import express from 'express';
import path from 'path';
import morgan from 'morgan';
import {router} from './routes/index';
import {connect} from './db';
import cors from 'cors';


export class Server{

    public app = express();

    constructor(){
       
        this.config();
        connect(); // conexion a BD
        this.midlewares();
        this.routes();
        this.start();
    }

    config(){
        this.app.set('port', process.env.PORT || 3000);
        this.app.use('uploads', express.static(path.resolve()))
    }


    midlewares(){
        this.app.use(express.json());
        this.app.use(morgan('dev')); // muestra peticiones por consola
        this.app.use(cors());
    }

    routes(){
        this.app.use('/api', router);
    }

    async start(){
        await this.app.listen(this.app.get('port'));
        console.log('server runing', this.app.get('port'));
    }
}


const server = new Server();

