import mongoose, { Schema } from "mongoose";
import { Category } from "../Types";

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true, index: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String },
  imageID: { type: String, required: true, unique: true },
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const CategoryModel = mongoose.model<Category>("Category", CategorySchema);

export default CategoryModel;
