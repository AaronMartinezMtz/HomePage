

const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');



class Server {

    constructor() {
        this.app = express();;
        this.port = process.env.PORT || 3000 ;

        // Conectar a db

        // Http server
        this.server = http.createServer( this.app );


        // Configuraciones de sockets
        //this.io = socketio( this.server, {/* configuraciones */} );

    }


    middlewares() {




        this.app.use( cors() );
        this.app.use( express.json() );
        
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );

    }

    execute() {
        
        this.middlewares();

        // Inicializar Server
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port );
        })
    }


}


module.exports = Server;