//vamos a comenzar entonces
console.log('hola mundo');


//vamos a extraer el id de lo que tenemos en el front-end

const conectado = document.querySelector('#id_online');
const desconectado = document.querySelector('#id_offline');

//vamos a crear las variables para la manipulacion de objetos
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

const socket = io();

//vamos a estar a la escucha de nuestro servidor

socket.on('connect', ()=> {
    //cuando nos conectemos entonces vamos a quitar el de offline
    //console.log('Conectado');
    conectado.style.display = '';
    desconectado.style.display = 'none';
});

socket.on('disconnect', ()=> {
    //cuando nos conectemos entonces vamos a quitar el de offline
    //console.log('Desconectado');
    conectado.style.display = 'none';
    desconectado.style.display = '';
});


socket.on('mensaje-server', (payload) => {
    console.log(payload);
})


//vamos a mandarle algo a nuestro servidor
btnEnviar.addEventListener('click', () =>{
    //vamos a intentar mandar algo
    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    };

    //cliente mandando mensaje
    socket.emit('enviar-mensaje', payload, (id) => {

        console.log('Desde el server', id);
    });
});

//vamos a seguir con la siguiente actividad

