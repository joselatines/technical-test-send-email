import app from "./app.js";

const port = process.env.PORT || 5000;
app.listen(port, () => {
	/* eslint-disable no-console */
	console.info(`Listening: http://localhost:${port}`);
	/* eslint-enable no-console */
});
