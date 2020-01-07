import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';


interface IDecoded {
    id: string;
    iat: number;
}

export async function verifyToken(req: Request, res: Response, next: NextFunction){
    let token = String(req.header('Access-Token'));
    if(!token) return res.json({message: "Access Denied"});
    try {
        const decoded =  await jwt.verify(token , 'secretkey') as IDecoded;
        req.userId = decoded.id;
        //console.log(req.userId);
        next()
    } catch (error) {
        if(error) return res.json({message: "Access Denied"}); 
    } 
}