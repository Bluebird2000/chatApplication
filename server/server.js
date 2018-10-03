import express from 'express';
import http from 'http';
import path from 'path';
import socketIO from 'socket.io';
import dotenv from 'dotenv';
dotenv.config();
const publicPath = path.join(__dirname, '../public');
const app = express();
var server = http.createServer(app);
app.use(express.static(publicPath));
const io = socketIO(server);
io.on('connection', (socket) => {
    console.log('New user connected');
    socket.emit('newMessage', {
        from: 'Admin',
        text: 'welcome to the chat app',
        createdAt: new Date().getTime()
    });
    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined channel',
        createdAt: new Date().getTime()
    });
    socket.on('createMessage', (message) => {
        //console.log('createMessage :', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
    });
    socket.on('disconnect', () => {
        console.log('user was disconnected');
    });
});

server.listen(process.env.PORT, () => console.log(`Server now listening on port ${process.env.PORT}`));