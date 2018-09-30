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
    socket.on('disconnect', () => {
        console.log('user was disconnected');
    });
});

server.listen(process.env.PORT, () => console.log(`Server now listening on port ${process.env.PORT}`));