import File from "../models/file.js";

export const uploadImage = async (req, res) => {
	console.log(req);
	const fileOjb = {
		path: req.file.path,
		name: req.file.originalname,
	};

	try {
		const file = await File.create(fileOjb);
		res.status(200).json({
			path: `http://localhost:5001/file/${file._id}`,
			success: true,
			message: "File uploaded successfully",
			file,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

export const getImage = async (req, res) => {
	try {
		const file = await File.findById(req.params.id);
		if (!file) {
			return res
				.status(404)
				.json({ success: false, message: "File not found" });
		}
		file.downloadCount += 1;
		await file.save();

		res.download(file.path, file.name);
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};
