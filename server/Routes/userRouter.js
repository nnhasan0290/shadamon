import express from "express";
import { createUser, loginUser } from "../Comtrollers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/user/create").post(createUser);
router.route("/user/login").post(loginUser);
router.route("/user/load").get(isAuthenticated);

export default router;
