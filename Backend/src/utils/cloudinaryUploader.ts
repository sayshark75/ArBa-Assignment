import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const AvatarUploader = {
  uploadImage: async (imgUrl: string) => {
    try {
      if (!imgUrl) {
        throw new Error("No image url found");
      }
      const result = await cloudinary.uploader.upload(imgUrl, {
        folder: "avatar",
        allowed_formats: ["jpg", "png", "gif", "webp"],
        transformation: [{ width: 180, height: 180, crop: "fill" }],
      });
      if (result) {
        return result;
      }
    } catch (error) {
      throw error;
    }
  },
  async deleteImage(imagePublicId: string) {
    try {
      if (!imagePublicId) {
        throw new Error("No image public ID found");
      }

      await cloudinary.uploader.destroy(imagePublicId);

      return { message: "Image deleted successfully" };
    } catch (error) {
      throw error;
    }
  },
};

export const CategoryImgUploader = {
  async uploadImage(imgUrl: string) {
    try {
      if (!imgUrl) {
        throw new Error("No image url found");
      }
      const result = await cloudinary.uploader.upload(imgUrl, {
        folder: "category",
        allowed_formats: ["jpg", "png", "gif", "webp"],
        transformation: [{ width: 400, height: 280, crop: "fill" }],
      });
      if (result) {
        return result;
      }
    } catch (error) {
      throw error;
    }
  },
  async deleteImage(imagePublicId: string) {
    try {
      if (!imagePublicId) {
        throw new Error("No image public ID found");
      }

      await cloudinary.uploader.destroy(imagePublicId);

      return { message: "Image deleted successfully" };
    } catch (error) {
      throw error;
    }
  },
};

export const ProductImgUploader = {
  async uploadImage(imgUrl: string) {
    try {
      if (!imgUrl) {
        throw new Error("No image url found");
      }
      const result = await cloudinary.uploader.upload(imgUrl, {
        folder: "product",
        allowed_formats: ["jpg", "png", "gif", "webp"],
        transformation: [{ width: 400, height: 280, crop: "fill" }],
      });
      if (result) {
        return result;
      }
    } catch (error) {
      throw error;
    }
  },
  async deleteImage(imagePublicId: string) {
    try {
      if (!imagePublicId) {
        throw new Error("No image public ID found");
      }

      await cloudinary.uploader.destroy(imagePublicId);

      return { message: "Image deleted successfully" };
    } catch (error) {
      throw error;
    }
  },
};
