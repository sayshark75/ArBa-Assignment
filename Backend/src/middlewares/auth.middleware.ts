import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest } from "../Types";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.headers.authorization?.split(" ")[1];
    if (!accessToken) {
      return res.status(401).json({ message: "Access denied. Invalid or missing token." });
    }
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET as string);
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};
