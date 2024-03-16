import { request, response } from "express";
import {
  RegisterUserRepository,
  FindUserRepository,
} from "../repositories/user.repository.js";
import { encryptPassword } from "../helpers/password.js";

export const RegisterUserService = async (
  payload,
  req = request,
  res = response
) => {
  const { user, password, email } = payload;
  const encryptedPassword = await encryptPassword(password);
  const userFound = await FindUserRepository(user);
  if (userFound.length > 0) {
    throw new Error(`An user already exists with user name ${user}`);
  }
  const User = await RegisterUserRepository(user, encryptedPassword, email);
  return User;
};
