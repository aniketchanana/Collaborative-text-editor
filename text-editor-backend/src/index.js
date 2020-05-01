const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);
const { adduser,removeUser,getAllUsers,changePresentingStatus } = require('./utils/Users');
const path = require('path');
app.use(express.static(path.join(__dirname,'./build')));

const port = process.env.PORT || 3000;

io.on('connection',(client)=>{
    client.emit('activeusers',getAllUsers());
    client.on('addnewuser', (username) => {
        adduser(username,client.id);
        io.emit('activeusers',getAllUsers());
        console.log(getAllUsers());
    });
    client.on('editorvaluechange',(message)=>{
        console.log(message);
        client.broadcast.emit('editorvaluechange', message);
    })
    client.on('blur',() => {
        changePresentingStatus(client.id,false,() => {
            console.log(getAllUsers());
        });
        io.emit('activeusers',getAllUsers());
        client.broadcast.emit('unlockEditor');
    })
    client.on('focus',() => {
        let users = getAllUsers();
        for(let i=0;i<users.length;i++) {
            if(users[i].isPresenting) {
                console.log(client.id);
                client.emit('lockEditor');
                return ;
            }
        }
        changePresentingStatus(client.id,true,() => {
            console.log(getAllUsers());
        });
        io.emit('activeusers',getAllUsers());
        client.broadcast.emit('lockEditor');
    })
    client.on('disconnect',() => {
        removeUser(client.id);
        io.emit('activeusers',getAllUsers());
        io.emit('unlockEditor');
        console.log(getAllUsers());
    })
})

server.listen(3000,() => {
    console.log('server is running');
})