"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    apellidos: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    calle: String,
    colonia: String,
    numero: Number,
    createdAt: { type: Date, default: Date.now() },
    updatedAt: Date
});
exports.default = mongoose_1.model('User', userSchema);
