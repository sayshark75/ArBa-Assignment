import mongoose, { Schema } from "mongoose";
import { User } from "../Types";

const UserSchema: Schema = new Schema({
  fullName: { type: String, minLength: 2, required: true },
  userName: { type: String, required: true, minLength: 4, maxLength: 30, unique: true },
  email: { type: String, required: true, minLength: 4, maxLength: 30, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  avatarID: { type: String, required: true, unique: true },
});

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
