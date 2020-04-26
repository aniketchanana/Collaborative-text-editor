const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);
const { adduser,removeUser,getAllUsers } = require('./utils/Users');

io.on('connection',(client)=>{
    client.on('addnewuser', (username) => {
        adduser(username,client.id);
        io.emit('activeusers',getAllUsers());
        console.log(getAllUsers());
    });
    client.on('editorvaluechange',(message)=>{
        console.log(message);
        client.broadcast.emit('editorvaluechange', message);
    })
    client.on('disconnect',() => {
        removeUser(client.id);
        io.emit('activeusers',getAllUsers());
        console.log(getAllUsers());
    })
})

server.listen(8000,() => {
    console.log('server is running');
})