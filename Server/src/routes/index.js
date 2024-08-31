import { Router } from "express";

import { registerUser, loginUser, Auth } from "../controller/userController.js";
import { addContact, accessContact } from "../controller/contactController.js";
import { VerifyUser } from "../middleware/verifyUser.js";

const router = Router();

// USER RELATED ROUTES
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify", VerifyUser, Auth);

// DASHBOARD RELATED ROUTES
router.post("/addContact", VerifyUser, addContact);
router.get("/getContact", accessContact);

export default router;
