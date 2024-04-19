import { NextFunction, Request, Response } from "express";
import { ProductService } from "../services/product.service";
import { AuthenticatedRequest } from "../Types";

export const ProductController = {
  async createProduct(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { title, description, price, category, image } = req.body;
    const ownerId = req.user.id;
    try {
      await ProductService.createProduct(title, description, price, category, image, ownerId);
      res.status(201).json({ status: true, message: "Product created successfully." });
    } catch (error) {
      next(error);
    }
  },

  async updateProduct(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { id } = req.query;
    const { title, description, price, image } = req.body;
    try {
      await ProductService.updateProduct(id as string, title, description, price, image);
      res.status(200).json({ status: true, message: "Product updated successfully." });
    } catch (error) {
      next(error);
    }
  },

  async getProductsByUser(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const userId = req.user.id;
    const categoryId = req.query.categoryId as string | undefined;
    const sortByPrice = req.query.sort as string | undefined;
    try {
      const products = await ProductService.getProductsByUserId(userId, categoryId, sortByPrice);
      res.status(200).json({ message: "Products Retrival Success", status: true, products });
    } catch (error) {
      next(error);
    }
  },

  async getProductById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.query;
    try {
      const product = await ProductService.getProductById(id as string);
      res.status(200).json({ message: "Products Retrival Success", status: true, product });
    } catch (error) {
      res.status(404).json({ status: false, message: "Product not found." });
    }
  },

  async deleteProduct(req: Request, res: Response, next: NextFunction) {
    const ids: string[] = req.body;
    try {
      await ProductService.deleteProduct(ids);
      res.status(200).json({ status: true, message: "Product deleted successfully." });
    } catch (error) {
      next(error);
    }
  },
};
