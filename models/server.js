//vamos a comenzar a crear el servidor asi que manos a la obra
const express = require('express');

const cors = require('cors');
const { socketController } = require('../sockets/socket');

require('dotenv').config();

class Server{

    constructor(){ 
        //vamos a definir las variables que necesitamos 

        //vamos a crear la aplicacion
        this.app = express();
        //vamos a comenzar
        this.server = require('http').createServer(this.app);

        this.io = require('socket.io')(this.server);

        //vamos a definir los middlewares
        this.middlewares();

        this.sockets();

    }
    
    middlewares(){
        //vamos a comenzar
        this.app.use( cors() );
        
        //vamos a colocar la parte del nuestra web estatica
        this.app.use( express.static('public') );
    }

    sockets(){
        this.io.on('connection', socketController);
    }

    listen(){
        this.server.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en el puerto', process.env.PORT);
        });
    }
}

module.exports = Server;


//bien vamos a continuar con las configuraciones


//vamos a hacer la parte de front-end mas vistoso asi que manos a la obra

//vamos a hacer la parte de la retroalimentacion
//vamos ahora a hacer la parte del broadcast manos a la obra
