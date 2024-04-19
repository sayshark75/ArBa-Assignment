import { NextFunction, Response } from "express";
import UserService from "../services/user.service";
import { AuthenticatedRequest } from "../Types";

class UserController {
  async updateFullName(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const userId = req.user.id;
    const { fullName } = req.body;

    try {
      await UserService.updateUserFullName(userId, fullName);
      res.status(200).json({ status: true, message: "Full name updated successfully." });
    } catch (error) {
      next(error);
    }
  }

  async updateAvatar(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const userId = req.user.id;
    const avatarID = req.user.avatarID;
    const { imgUrl } = req.body;

    try {
      await UserService.updateUserAvatar(userId, imgUrl, avatarID);
      return res.status(200).json({ status: true, message: "Avatar updated successfully." });
    } catch (error) {
      next(error);
    }
  }

  async changePassword(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const userId = req.user.id;
    const { oldPassword, newPassword } = req.body;

    try {
      await UserService.updateUserPassword(userId, oldPassword, newPassword);
      res.status(200).json({ message: "Password changed successfully." });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
