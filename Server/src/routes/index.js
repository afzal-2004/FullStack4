import { Router } from "express";

import { registerUser, loginUser, Auth } from "../controller/userController.js";
import { VerifyUser } from "../middleware/verifyUser.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/verify").get(VerifyUser, Auth);
export default router;
