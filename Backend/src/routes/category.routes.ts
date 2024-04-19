import express from "express";
import { CategoryController } from "../controllers/category.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/create", verifyToken, CategoryController.createCategory);
router.patch("/update", verifyToken, CategoryController.updateCategory);
router.get("/", verifyToken, CategoryController.getCategoryById);
router.delete("/delete", verifyToken, CategoryController.deleteCategory);

export default router;
