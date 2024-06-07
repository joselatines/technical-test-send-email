import { extractLinesFromPDF } from "../utils/files.js";
import { sendEmail } from "../utils/send-emails.js";
import { upload } from "../utils/multer.js";
import { Router } from "express";

const router = Router();

router.post("/upload", upload.single("file"), async (req, res) => {
	const { body, file: pdf } = req;
	const linesToSplit = body?.lines;

	if (!pdf || !body.email) {
		return res.status(400).json({
			message: "A PDF and email are required",
			success: false,
		});
	}

	try {
		const text = await extractLinesFromPDF(pdf.path, linesToSplit);
		const emailResponse = await sendEmail(text, body.email);

		res.json({
			message: emailResponse.message,
			success: emailResponse.success,
		});
	} catch (error) {
		res.json({ message: error.message, success: false });
	}
});

export default router;
