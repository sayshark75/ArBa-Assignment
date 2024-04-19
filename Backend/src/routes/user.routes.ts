import express from "express";
import UserController from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = express.Router();

router.patch("/update-fullname", verifyToken, UserController.updateFullName);
router.patch("/update-avatar", verifyToken, UserController.updateAvatar);
router.patch("/change-password", verifyToken, UserController.changePassword);

export default router;
