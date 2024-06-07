import { PdfReader } from "pdfreader";
import fs from "fs";

export const extractLinesFromPDF = (pdfPath, lines) => {
	let text = "";
	const splitIntoLines = txt => txt.split("\n").slice(0, lines).join("\n");

	return new Promise((resolve, reject) => {
		fs.readFile(pdfPath, (err, pdfBuffer) => {
			if (err) return reject(err);
			const pdfReader = new PdfReader();
			pdfReader.parseBuffer(pdfBuffer, (err, letter) => {
				if (err) return reject(err);
				if (!letter) return resolve(splitIntoLines(text));
				if (letter.text) {
					text += letter.text;
					if (text.split("\n").length >= lines) {
						resolve(splitIntoLines(text));
					}
				}
			});
		});
	});
};
