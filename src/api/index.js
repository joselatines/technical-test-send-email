import { Router } from "express";
import emails from "./emails.js";

const router = Router();

router.get("/", (req, res) => {
	res.json({
		message: "API - 👋🌎🌍🌏",
	});
});

router.use("/emails", emails);

export default router;
