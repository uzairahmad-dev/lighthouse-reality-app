import { config } from "dotenv";

const { parsed } = config();

export const {
  DB_URI,
  PORT,
  PROD,
  IN_PROD = PROD === "prod",
  BASE_URL = `http://localhost:${PORT}`,
  SECRET,
} = parsed;
