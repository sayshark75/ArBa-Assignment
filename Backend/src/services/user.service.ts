import UserModel from "../models/User.model";
import bcrypt from "bcrypt";
import { AvatarUploader } from "../utils/cloudinaryUploader";

class UserService {
  async updateUserFullName(userId: string, fullName: string): Promise<void> {
    try {
      await UserModel.findByIdAndUpdate(userId, { fullName });
    } catch (error) {
      throw error;
    }
  }

  async updateUserAvatar(userId: string, imgUrl: string, avatarID: string): Promise<void> {
    try {
      const uploadedData = await AvatarUploader.uploadImage(imgUrl);
      await AvatarUploader.deleteImage(avatarID);
      if (uploadedData) {
        await UserModel.findByIdAndUpdate(userId, { avatar: uploadedData.url, avatarID: uploadedData.public_id }).exec();
      }
    } catch (error) {
      throw error;
    }
  }

  async updateUserPassword(userId: string, oldPassword: string, newPassword: string): Promise<void> {
    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        throw new Error("User not found.");
      }
      const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
      if (!isPasswordValid) {
        throw new Error("Incorrect old password.");
      }
      if (newPassword.length < 8) {
        throw new Error("Password length should be of atleast 8 characters");
      }
      const hashedPassword = await bcrypt.hash(newPassword, 4);
      await UserModel.findByIdAndUpdate(userId, { password: hashedPassword });
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();
