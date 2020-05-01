import opensocket from 'socket.io-client';
const socket = opensocket();


function subscribetoserver(username) {
    socket.emit('addnewuser',username);
}


export {subscribetoserver,socket};