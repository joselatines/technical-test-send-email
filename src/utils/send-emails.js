import nodemailer from "nodemailer";
const { EMAIL_SERVICE, EMAIL_HOST, EMAIL, EMAIL_PWD } = process.env;

export const sendEmail = async (text, to, subject = "I am a subject!😀") => {
	const transporter = nodemailer.createTransport({
		service: EMAIL_SERVICE,
		host: EMAIL_HOST,
		port: 587,
		secure: false,
		auth: {
			user: EMAIL,
			pass: EMAIL_PWD,
		},
	});

	const mailOptions = {
		from: EMAIL,
		to,
		subject,
		text,
	};

	try {
		await transporter.sendMail(mailOptions);

		return {
			success: true,
			message: `The email has been successfully sent to ${to}`,
		};
	} catch (error) {
		return { success: false, message: error.message, error };
	}
};
