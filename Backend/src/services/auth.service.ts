import UserModel from "../models/User.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AvatarUploader } from "../utils/cloudinaryUploader";
import dotenv from "dotenv";
import { Tokens, User } from "../Types";

dotenv.config();

class AuthService {
  async loginUser(username: string, password: string): Promise<Tokens> {
    try {
      const user = await UserModel.findOne({ userName: username }).exec();
      if (!user) {
        throw new Error("User not found, please sign up.");
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        throw new Error("Credentials do not match, try again...");
      }

      const accessToken = jwt.sign(
        { id: user._id, username: user.userName, email: user.email, avatar: user.avatar, fullName: user.fullName, avatarID: user.avatarID },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "3h",
        }
      );
      const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
        expiresIn: "30d",
      });

      return { accessToken, refreshToken };
    } catch (error) {
      throw error;
    }
  }

  async registerUser(fullName: string, userName: string, email: string, password: string, imgUrl: string): Promise<void> {
    try {
      if (password.length < 8) {
        throw new Error("Password length should be of atleast 8 characters");
      }
      const uploadedData = await AvatarUploader.uploadImage(imgUrl);
      if (!uploadedData) {
        throw new Error("Unable to upload avatar image");
      }
      const hashedPassword = await bcrypt.hash(password, 4);
      const user = new UserModel({
        fullName,
        userName,
        email,
        password: hashedPassword,
        avatar: uploadedData.url,
        avatarID: uploadedData.public_id,
      });
      await user.save();
    } catch (error) {
      throw error;
    }
  }

  async sendForgotPasswordOTP(email: string): Promise<string | null> {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) return null;

      const otp = Math.random().toString(36).substring(2, 8);
      const hashedOtp = await bcrypt.hash(otp, 4);
      user.password = hashedOtp;
      await user.save();

      return otp;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
