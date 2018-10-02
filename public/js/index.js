var socket = io();
socket.on('connect', () => {
    console.log('connected to server');
    socket.emit('createMessage', {
        from: "Bluebird2000",
        message: 'Hey suhas how do you do?'
    });
});
socket.on('newMessage', (message) => {
    console.log('newMesssage', message);
});
socket.on('disconnect', () => {
    console.log('Disconnected from the server');
});
