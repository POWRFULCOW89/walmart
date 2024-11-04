# WebService intermediario

El presente proyecto tiene por objetivo ejemplificar un flujo de comunicación bidireccional entre dos clientes WebSocket, conectados a un servidor intermediario central que se encarga de loggear los mensajes y reenviarlos al otro cliente.

## Instalación

1. Clonar el repositorio

``` bash
git clone https://github.com/POWRFULCOW89/walmart.git
```

2. Instalar las dependencias

``` bash
npm install
```

3. Ejecutar los clientes y el servidor

``` bash
node logger.js
node inventory.js
node supplier.js
```

## Descripción
El archivo `logger.js` es el servidor intermediario que loggea todos los mensajes y los reenvía. `inventory.js` es el cliente que manejaría el inventario dentro de nuestra empresa, mientras que `supplier.js` sería el cliente dentro de la infraestructura de nuestro proveedor de inventario. Tanto `inventory.js` como `supplier.js` tienen una línea de comandos que envía el mensaje ingresado al servidor.

## EQUIPO 1
* Diego Domínguez Melo
* Juan José Baza Acosta
* Irving de Jesús Lopez García
* Oscar Gonzalez Arias
