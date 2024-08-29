import { Router } from "express";

import { registerUser, loginUser, Auth } from "../controller/userController.js";
import { addcontact, AccessConatct } from "../controller/contactController.js";
import { VerifyUser } from "../middleware/verifyUser.js";

const router = Router();
//   THIS ALL ARE MY USER REALTED ROUTER
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/verify").get(VerifyUser, Auth);

//    DASHBOARD RELATED ROUTER
router.route("/AddContact").post(VerifyUser, addcontact);
router.route("/contacts").get(AccessConatct);
export default router;
