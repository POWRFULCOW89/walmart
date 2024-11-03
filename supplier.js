const WebSocket = require('ws');
const readline = require('readline');

// Conectar al servidor WebSocket
const ws = new WebSocket('ws://localhost:3000');

// Configurar la entrada de la línea de comandos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ws.on('open', () => {
    console.log('Client2 conectado al servidor intermediario.');
    ws.send('client2'); // Identificación inicial como client2

    // Permitir ingresar mensajes en la línea de comandos
    rl.on('line', (input) => {
        console.log(`Client2 enviando: ${input}`);
        ws.send(input);
    });
});

ws.on('message', (message) => {
    console.log(`Mensaje recibido en client2: ${message}`);
});
