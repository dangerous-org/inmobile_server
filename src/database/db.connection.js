import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(process.env.DBURL, {
    });
    console.log("conexion exitosa");
  } catch (error) {
    console.log(error, "error en base de datos");
  }
};

export default connectDB;