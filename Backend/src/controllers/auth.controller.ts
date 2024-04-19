import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth.service";
import dotenv from "dotenv";
import mailerService from "../utils/MailSender";

dotenv.config();

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;

    try {
      if (!username || !password) {
        return res.status(400).json({ status: false, message: "All fields are required." });
      }

      const tokens = await AuthService.loginUser(username, password);

      res.status(200).json({ message: "Login success", status: true, tokens });
    } catch (error) {
      next(error);
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    const { fullName, userName, email, password, imgUrl } = req.body;

    try {
      if (!fullName || !userName || !email || !password) {
        return res.status(400).json({ status: false, message: "All fields are required." });
      }

      await AuthService.registerUser(fullName, userName, email, password, imgUrl);
      res.status(201).json({ status: true, message: "User registered successfully." });
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    try {
      const otp = await AuthService.sendForgotPasswordOTP(email);
      if (!otp) {
        return res.status(404).json({ status: false, message: "User not found." });
      }

      if (typeof email === "string" && typeof otp === "string") {
        const info = await mailerService.sendMail(email, otp);
        if (info.accepted.length > 0) {
          return res.status(200).json({ message: "Password reset OTP sent to your email.", status: true });
        }
        if (info.rejected.length > 0) {
          return res.status(500).json({ message: "Unable to send email", status: false });
        }
      } else {
        res.status(401).json({ message: "Required fields not present", status: false });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
