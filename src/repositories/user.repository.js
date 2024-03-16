import UserModel from "../models/user.model.js";

export const RegisterUserRepository = async (user, password, email) => {
  const User = await UserModel.create({  user, password, email });
  return User;
};


export const FindUserRepository = async(user)=>{
    const User = await UserModel.find({user});
    return User;
}