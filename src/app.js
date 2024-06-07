import "dotenv/config";
import express, { json } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { notFound, errorHandler } from "./middlewares.js";
import api from "./api/index.js";

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to my api✨. Visit /api/v1",
	});
});

app.use("/api/v1", api);

app.use(notFound);
app.use(errorHandler);

export default app;
