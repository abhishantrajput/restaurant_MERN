import mongoose from "mongoose";


export const dbConnection = () =>{
    mongoose.connect(process.env.backend_URI,{
        dbName: "RESTAURANT"
    }).then(()=>{
        console.log("MongoDB Connected")
    }).catch((err)=>{
        console.log("Some Error has Occured",err)
    })
}