import mongoose from "mongoose";

async function ConnectDB() {
    if (mongoose.connections[0].readyState) return;
    mongoose.connect(process.env.MONGO_URI);
    console.log('connected to dataBase');
}

export default ConnectDB;