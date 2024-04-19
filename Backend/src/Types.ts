import { UploadApiResponse } from "cloudinary";
import { Request } from "express";
import { Types } from "mongoose";

export interface User extends Document {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  avatar?: string;
  avatarID: string;
}

export interface Category extends Document {
  name: string;
  slug: string;
  image: string;
  owner: Types.ObjectId | User;
  imageID: string;
}

export interface Product extends Document {
  title: string;
  description: string;
  price: number;
  category: Types.ObjectId | Category;
  image: string;
  imageID: string;
  owner: Types.ObjectId | User;
}

export interface AuthenticatedRequest extends Request {
  user?: any;
}

export interface CloudinaryReq extends Request {
  cloudinaryUpload: UploadApiResponse;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
