import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middleware";
import connectDB from "./connections/mongoConnect";
import dotenv from "dotenv";
import AuthRoutes from "./routes/auth.routes";
import UserRoutes from "./routes/user.routes";
import CategoryRoutes from "./routes/category.routes";
import ProductRoutes from "./routes/products.routes";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));

// Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/category", CategoryRoutes);
app.use("/api/product", ProductRoutes);

// Handle General Errors
app.use(errorHandler);

app.listen(process.env.PORT, async () => {
  try {
    await connectDB;
    console.log("Connected to DB");
  } catch (error) {
    console.log("error: ", error);
  }
  console.log(`Server running on Port ${process.env.PORT || 8080} - http://localhost:${process.env.PORT || 8080}/`);
});
