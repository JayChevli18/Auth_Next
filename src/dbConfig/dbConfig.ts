import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGOURL!);
        const connection=mongoose.connection;

        connection.on('connected', ()=>{
            console.log("Mongo DB connected Successfully");
        })

        connection.on('error', (err)=>{
            console.log("Error! MongoDB connection error: ", err);
            process.exit();
        })
    }
    catch(error){
        console.log("Something went Wrong! Error: ", error);
    }
}