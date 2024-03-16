import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(process.env.DBURL, {
    });
    console.log("conexion exitosa");
  } catch (error) {
    console.log(error, "error db");
  }
};

export default connectDB;