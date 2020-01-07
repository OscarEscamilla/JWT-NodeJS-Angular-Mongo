import {Schema,model } from 'mongoose';


const userSchema = new Schema({
    name: { type: String, required: true},
    apellidos: { type: String, required: true},
    email: { type: String, required: true, unique: true, lowercase: true},
    password: { type: String, required: true},
    calle: String,
    colonia: String,
    numero: Number,
    createdAt:  {type: Date, default: Date.now()},
    updatedAt: Date
});


export default model('User', userSchema);