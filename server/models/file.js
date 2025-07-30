import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
	path: {
		type: String,
		required: true,
	},

	name: {
		type: String,
		required: true,
	},

	downloadCount: {
		type: Number,
		default: 0,
	},
});
// backend -> mongoose-> mongodb

const File = mongoose.model("file", FileSchema);

export default File;
