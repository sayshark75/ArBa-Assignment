import { NextFunction, Request, Response } from "express";
import { CategoryService } from "../services/category.service";
import { AuthenticatedRequest } from "../Types";

export const CategoryController = {
  async createCategory(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { name, slug, imageUrl } = req.body;
    const ownerId = req.user.id;
    try {
      await CategoryService.createCategory(name, slug, imageUrl, ownerId);
      res.status(201).json({ status: true, message: "Category created successfully." });
    } catch (error) {
      next(error);
    }
  },

  async updateCategory(req: Request, res: Response, next: NextFunction) {
    const { cat_id } = req.query;
    const { name, slug, imageUrl } = req.body;
    try {
      await CategoryService.updateCategory(cat_id as string, name, slug, imageUrl);
      res.status(200).json({ status: true, message: "Category updated successfully." });
    } catch (error) {
      next(error);
    }
  },

  async getCategoryById(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { id, name } = req.query;
    const userId = req.user.id;

    try {
      const category = await CategoryService.getCategoryById(id as string, name as string, userId);
      if (!category) {
        res.status(404).json({ status: false, message: "Category not found." });
      }
      res.status(200).json({ message: "Retrival Success", status: true, category });
    } catch (error) {
      next(error);
    }
  },

  async deleteCategory(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { id } = req.query;
    const userId = req.user.id;
    try {
      await CategoryService.deleteCategory(id as string, userId);
      res.status(200).json({ status: true, message: "Category deleted successfully." });
    } catch (error) {
      next(error);
    }
  },
};
