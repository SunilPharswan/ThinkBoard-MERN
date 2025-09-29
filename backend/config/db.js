import mongooes from "mongoose";

export const connectDB = async() => {
    try{
        await mongooes.connect(process.env.MONGO_URI)
        console.log("MongoDB Connect Successfully");
    } catch(error){
        console.error("Error Connectiong MongoDB",error);
        process.exit(1)
    }
}