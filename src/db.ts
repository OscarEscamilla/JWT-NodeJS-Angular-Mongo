import mongoose from 'mongoose';


export async function connect(){

    const con = await mongoose.connect('mongodb://localhost/api_park',{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true })
            .then(bd => console.log('Database is conected'))
            .catch(err => console.log('Error en conexion a DB', err)); 
}