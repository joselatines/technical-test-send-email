import { PdfReader } from "pdfreader";
import fs from "fs";

export const extractLinesFromPDF = (pdfPath, lines = 30) => {
	const splitIntoLines = txt => txt.split("\n").slice(0, lines).join("\n");

	return new Promise((resolve, reject) => {
		fs.readFile(pdfPath, (err, pdfBuffer) => {
			if (err) {
				return reject(err);
			}

			const pdfReader = new PdfReader();
			let text = "";
			let lineCount = 0;

			pdfReader.parseBuffer(pdfBuffer, (err, item) => {
				if (err) {
					return reject(err);
				}

				if (!item) {
					// End of file, resolve the text
					return resolve(splitIntoLines(text));
				}

				if (item.text) {
					text += item.text + "\n";
					lineCount += item.text.split("\n").length;

					if (lineCount >= lines) {
						return resolve(splitIntoLines(text));
					}
				}
			});
		});
	});
};
