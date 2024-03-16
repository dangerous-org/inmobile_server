import { request, response } from "express";
import { RegisterUserService } from "../services/user.service.js";

export const RegisterUserController = async (req = request, res = response) => {
  try {
    const payload = req.body;
    const User = await RegisterUserService(payload, req, res);
    return res.status(200).json(User);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
};
