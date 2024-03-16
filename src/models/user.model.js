import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.model("UserModel", UserModel, 'Users');
