import bcrypt from "bcrypt";

export const encryptPassword = async (password) => {
  const encryptedPassword = await bcrypt.hash(password, 10);
  return encryptedPassword;
};
