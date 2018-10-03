var socket = io();
socket.on('connect', () => {
    console.log('connected to server');
});
socket.on('newMessage', (message) => {
    console.log('newMesssage', message);
});

socket.on('disconnect', () => {
    console.log('Disconnected from the server');
});
