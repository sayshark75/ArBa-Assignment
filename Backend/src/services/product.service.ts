import ProductModel from "../models/Products.model";
import { ProductImgUploader } from "../utils/cloudinaryUploader";

export const ProductService = {
  async createProduct(title: string, description: string, price: number, category: string, image: string, ownerId: string): Promise<void> {
    try {
      const uploadedProductImg = await ProductImgUploader.uploadImage(image);
      if (uploadedProductImg) {
        const newProduct = new ProductModel({
          title,
          description,
          price,
          category,
          image: uploadedProductImg.url,
          imageID: uploadedProductImg.public_id,
          owner: ownerId,
        });

        await newProduct.save();
      }
    } catch (error) {
      throw error;
    }
  },

  async updateProduct(id: string, title: string, description: string, price: number, image: string): Promise<void> {
    try {
      const imageUploadResult = await ProductImgUploader.uploadImage(image);
      const product = await ProductModel.findById(id);
      if (!product) {
        throw new Error("Product not found.");
      }

      if (!imageUploadResult) {
        throw new Error("Unable to update image");
      }

      await ProductImgUploader.deleteImage(product.imageID);

      product.title = title;
      product.description = description;
      product.price = price;
      product.image = imageUploadResult.url;
      product.imageID = imageUploadResult.public_id;

      await product.save();
    } catch (error) {
      throw error;
    }
  },

  async getProductsByUserId(userId: string, categoryId?: string, sortByPrice?: string): Promise<any[]> {
    try {
      let query: any = { owner: userId };
      if (categoryId) {
        query.category = categoryId;
      }

      let productsQuery = ProductModel.find(query);

      if (sortByPrice) {
        productsQuery = productsQuery.sort({ price: sortByPrice === "asc" ? 1 : -1 });
      }

      const products = await productsQuery.exec();
      return products;
    } catch (error) {
      throw error;
    }
  },

  async getProductById(id: string): Promise<any> {
    try {
      const product = await ProductModel.findById(id);
      if (!product) {
        throw new Error("Product not found.");
      }
      return product;
    } catch (error) {
      throw error;
    }
  },

  async deleteProduct(ids: string[]): Promise<void> {
    try {
      for (const id of ids) {
        const product = await ProductModel.findById(id);
        if (!product) {
          throw new Error(`Product with ID ${id} not found.`);
        }

        await ProductImgUploader.deleteImage(product.imageID);

        await ProductModel.findByIdAndDelete(id);
      }
    } catch (error) {
      throw error;
    }
  },
};
