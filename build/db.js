"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
async function connect() {
    const con = await mongoose_1.default.connect('mongodb://localhost/api_park', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(bd => console.log('Database is conected'))
        .catch(err => console.log('Error en conexion a DB', err));
}
exports.connect = connect;
