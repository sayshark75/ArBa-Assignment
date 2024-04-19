import mongoose, { Schema } from "mongoose";
import { Product } from "../Types";

const ProductSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  image: { type: String },
  imageID: { type: String, required: true, unique: true },
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const ProductModel = mongoose.model<Product>("Product", ProductSchema);

export default ProductModel;
