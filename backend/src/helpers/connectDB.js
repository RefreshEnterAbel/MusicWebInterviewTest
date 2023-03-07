import mongoose from "mongoose";

const url = process.env.MONGO_DB_URL


const connectDB = async () => {
    try {
        await mongoose.connect(url)
        console.log("Connected to mongo DB: ")

    } catch (error) {
        console.log("Could not connect to MongoDB", error);
    }
}
export default connectDB