import {Request, Response, NextFunction } from 'express';
import User from './../models/userModel';// schema import 
import jwt, { decode } from 'jsonwebtoken';




export class UserController{

    
    async getAllUsers(req: Request, res: Response){
        try {
            let result = await User.find();
            res.json(result);
        } catch (error) {
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
    async signUp(req: Request, res: Response){
        try {
            let {name, apellidos, email, password, calle, colonia, numero} = req.body;
            let newUser = new User({
                name,
                apellidos, 
                email,
                password,
                calle,
                colonia,
                numero
            });
            await newUser.save();

            let token = jwt.sign({id: newUser._id}, 'secretkey');
            res.json({token: token});
        } catch (error) {
            res.json(error);
        }   
    }

    
    async signIn(req: Request, res: Response){
        try {
            let {email, password} = req.body;
            let user = await User.findOne({email});

            if(!user) return res.json({message: "email o contraseña incorrecta"});
            //if(user.password !== password) res.json({message: "contraseña incorrecta"});
            
            let token = jwt.sign({id: user.id},'secretkey');
            //return  res.json(user);
            return  res.json({token: token});
            
        } catch (error) {
            res.json(error);
        }
    }


    dataPrivate(req: Request, res: Response){
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
        ]
        res.json(data);
    }

}