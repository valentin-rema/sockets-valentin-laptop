
//vamos a crear el controlador de los sockets

const socketController = (socket) => {

            console.log('Cliente Conectado', socket.id)

            socket.on('disconnect', () => {
                console.log('Cliente desconectado', socket.id);    
            });

            socket.on('enviar-mensaje', (payload, callback) => {

                //una vez escuchado lo que diga un cliente ese mismo mensaje lo mandamos a todos
                //los clientes
                //this.io.emit('mensaje-server', payload);
                const id = 123456;  
                callback(id);
                //ahora vamos a mandar la informacion a todos los usuarios menos al emisor
                socket.broadcast.emit('mensaje-server', payload);
            }); 
};
module.exports = {
    socketController
}