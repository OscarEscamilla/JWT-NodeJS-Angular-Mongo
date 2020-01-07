"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("./../models/userModel")); // schema import 
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    async getAllUsers(req, res) {
        try {
            let result = await userModel_1.default.find();
            res.json(result);
        }
        catch (error) {
            res.json(error);
        }
    }
    /*
    function: signUp
    {
        "name": "Manuel",
        "apellidos": "Alonso",
        "email": "manuel@manuel.com",
        "password": "password",
        "calle": "Juarez",
        "colonia": "Santiago",
        "numero": 101
    }
    */
    async signUp(req, res) {
        try {
            let { name, apellidos, email, password, calle, colonia, numero } = req.body;
            let newUser = new userModel_1.default({
                name,
                apellidos,
                email,
                password,
                calle,
                colonia,
                numero
            });
            await newUser.save();
            let token = jsonwebtoken_1.default.sign({ id: newUser._id }, 'secretkey');
            res.json({ token: token });
        }
        catch (error) {
            res.json(error);
        }
    }
    async signIn(req, res) {
        try {
            let { email, password } = req.body;
            let user = await userModel_1.default.findOne({ email });
            if (!user)
                return res.json({ message: "el email o contraseña incorrecta" });
            //if(user.password !== password) res.json({message: "contraseña incorrecta"});
            let token = jsonwebtoken_1.default.sign({ id: user.id }, 'secretkey');
            //return  res.json(user);
            return res.json({ token: token });
        }
        catch (error) {
            res.json(error);
        }
    }
    dataPrivate(req, res) {
        let data = [
            {
                id: 0,
                name: "Kiwi",
                color: "verde"
            },
            {
                id: 1,
                name: "mango",
                color: "amarillo"
            },
            {
                id: 2,
                name: "Fresa",
                color: "red"
            }
        ];
        res.json(data);
    }
}
exports.UserController = UserController;
