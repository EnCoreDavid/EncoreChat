module.exports = (io) => {
    io.on('connection', (socket) => {
    console.log(`a user connected with id: ${socket.id}`);
    socket.emit('chat message', 'Welcome To Encore Chat');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message:', msg);
        io.emit('chat message', msg);
    });
    
});
};
