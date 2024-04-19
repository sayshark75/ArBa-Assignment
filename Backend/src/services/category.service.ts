import CategoryModel from "../models/Category.model";
import { CategoryImgUploader } from "../utils/cloudinaryUploader";

export const CategoryService = {
  async createCategory(name: string, slug: string, imageUrl: string, ownerId: string): Promise<void> {
    try {
      const imageUploadResult = await CategoryImgUploader.uploadImage(imageUrl);
      if (!imageUploadResult) {
        throw new Error("Unable to update image");
      }
      const newCategory = new CategoryModel({
        name,
        slug,
        image: imageUploadResult.url,
        imageID: imageUploadResult.public_id,
        owner: ownerId,
      });

      await newCategory.save();
    } catch (error) {
      throw error;
    }
  },

  async updateCategory(id: string, name: string, slug: string, imageUrl: string): Promise<void> {
    try {
      const imageUploadResult = await CategoryImgUploader.uploadImage(imageUrl);

      const category = await CategoryModel.findById(id);
      if (!category) {
        throw new Error("Category not found.");
      }

      if (!imageUploadResult) {
        throw new Error("Unable to update image");
      }

      await CategoryImgUploader.deleteImage(category.imageID);

      category.name = name;
      category.slug = slug;
      category.image = imageUploadResult.secure_url;
      category.imageID = imageUploadResult.public_id;

      await category.save();
    } catch (error) {
      throw error;
    }
  },

  async getCategoryById(id: string, name: string, userId: string): Promise<any> {
    try {
      const query: any = { owner: userId };
      if (id) {
        query._id = id;
      }
      if (name) {
        query.name = { $regex: new RegExp(name, "i") };
      }
      const category = await CategoryModel.find(query).exec();
      if (!category) {
        throw new Error("Category not found.");
      }
      return category;
    } catch (error) {
      throw error;
    }
  },

  async deleteCategory(id: string, userId: string): Promise<void> {
    try {
      const query = { owner: userId, _id: id };
      const category = await CategoryModel.findOne(query);
      if (!category) {
        throw new Error("Category not found.");
      }

      await CategoryImgUploader.deleteImage(category.imageID);

      await CategoryModel.findByIdAndDelete(category._id);
    } catch (error) {
      throw error;
    }
  },
};
