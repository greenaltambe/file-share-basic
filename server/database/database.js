import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBconnection = async () => {
	const MONGODB_URL = process.env.MONGODB_URI;
	try {
		await mongoose.connect(MONGODB_URL);
		console.log("Database connected");
	} catch (error) {
		console.log("Database connection failed", error);
	}
};

export default DBconnection;
