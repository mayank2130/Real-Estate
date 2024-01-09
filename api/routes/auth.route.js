import express from "express";
import { google, signin, signout, signup } from "../controllers/auth.controller.js";

const router = express.Router();


router.route("/signup").post(signup)

router.route("/signin").post(signin)

router.route("/google").post(google)

router.route("/signout").get(signout)

export default router