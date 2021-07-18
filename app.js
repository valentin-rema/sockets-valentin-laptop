const Server = require('./models/server');

//vamos a llamar nuestro servidor
const servidor = new Server();

servidor.listen();

//vamos a comenzar a agregar la parte del socket-io

