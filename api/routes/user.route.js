import express from "express";
import test from "../controllers/userController.js";

const router = express.Router();


router.route("/test").get(test)
// router.get("/test",test)

export default router