import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname.replace("", "-"));
	},
});

export const upload = multer({
	storage,
	fileFilter(req, files, callback) {
		const ext = path.extname(files.originalname);
		const allowed = [".pdf"];
		if (allowed.includes(ext)) {
			callback(null, true);
		} else {
			callback(null, false); // handle error in middleware, not here
		}
	},
});
