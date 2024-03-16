import { Router } from "express";
import { RegisterUserController } from "../controllers/user.controller.js";
import ValidateEmail from "../middlewares/validations/email.validator.js";
import ValidateUserName from "../middlewares/validations/username.validator.js";
import ValidatePassword from "../middlewares/validations/password.validator.js";

const userRoutes = Router();

userRoutes.get("/");

userRoutes.post(
  "/register",
  ValidateUserName,
  ValidatePassword,
  ValidateEmail,
  RegisterUserController
);

export default userRoutes;
