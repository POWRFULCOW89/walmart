const WebSocket = require('ws');

const PORT = 3000;
const wss = new WebSocket.Server({ port: PORT });
console.log(`Servidor intermediario WebSocket escuchando en el puerto ${PORT}`);

let client1 = null;
let client2 = null;

wss.on('connection', (ws) => {
    console.log('Nuevo cliente conectado.');

    ws.on('message', (message) => {
        message = message.toString(); // Convertir el mensaje a una cadena
        console.log(`Mensaje recibido: ${message}`);

        if (message === 'client1') {
            client1 = ws;
            console.log('Cliente 1 conectado.');
        } else if (message === 'client2') {
            client2 = ws;
            console.log('Cliente 2 conectado.');
        } else {
            // Reenvía el mensaje al otro cliente
            if (ws === client1 && client2) {
                console.log(`Mensaje de client1 a client2: ${message}`);
                client2.send(`client1: ${message}`);
            } else if (ws === client2 && client1) {
                console.log(`Mensaje de client2 a client1: ${message}`);
                client1.send(`client2: ${message}`);
            } else {
                console.log('Un cliente no identificado envió un mensaje.');
            }
        }
    });

    ws.on('close', () => {
        console.log('Cliente desconectado.');
        if (ws === client1) client1 = null;
        if (ws === client2) client2 = null;
    });
});
