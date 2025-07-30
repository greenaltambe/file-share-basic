import axios from "axios";

export const uploadFile = async (data) => {
	try {
		const res = await axios.post("http://localhost:5001/upload", data);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// Frontend -> backend
// We are sending file from frontend to backend

// ======= Usually ========
// to store static content we dont use database
// we use storage servece for that (aws s3 bucket, firebase storage, cloudinary etc)

// ======= For now ========
// we will store path in mongodb
// the path is to the local storage
// File is not stored in database
// File is stored in the local storage (server)
