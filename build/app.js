"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = require("./routes/index");
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        db_1.connect(); // conexion a BD
        this.midlewares();
        this.routes();
        this.start();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use('uploads', express_1.default.static(path_1.default.resolve()));
    }
    midlewares() {
        this.app.use(express_1.default.json());
        this.app.use(morgan_1.default('dev')); // muestra peticiones por consola
        this.app.use(cors_1.default());
    }
    routes() {
        this.app.use('/api', index_1.router);
    }
    async start() {
        await this.app.listen(this.app.get('port'));
        console.log('server runing', this.app.get('port'));
    }
}
exports.Server = Server;
const server = new Server();
