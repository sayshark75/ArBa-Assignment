import express from "express";
import { ProductController } from "../controllers/product.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/create", verifyToken, ProductController.createProduct);
router.patch("/update", verifyToken, ProductController.updateProduct);
router.get("/user-prod", verifyToken, ProductController.getProductsByUser);
router.get("/", verifyToken, ProductController.getProductById);
router.delete("/delete", verifyToken, ProductController.deleteProduct);

export default router;
