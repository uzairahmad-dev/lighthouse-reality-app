import consola from "consola";
import mongoose from "mongoose";
import { DB_URI } from "./index.js";

const { success, error } = consola;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URI);
    success({
      badge: true,
      message: `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold,
    });
  } catch (err) {
    error({
      badge: true,
      message: `MONGODB ERROR: ${err.message}`.red.underline.bold,
    });
  }
};
