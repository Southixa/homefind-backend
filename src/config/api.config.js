import dotenv from "dotenv";
dotenv.config();
const KLimit = 20;
const EAPI = process.env.EAPI;
const SERVER_PORT = process.env.SERVER_PORT;

const SECRET_KEY = process.env.SECRET_KEY;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const JWT_TIMEOUT = process.env.JWT_TIMEOUT;
const JWT_REFRECH_TIMEOUT = process.env.JWT_REFRECH_TIMEOUT;

const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

export {
  KLimit,
  EAPI,
  SERVER_PORT,
  SECRET_KEY,
  REFRESH_TOKEN,
  JWT_TIMEOUT,
  JWT_REFRECH_TIMEOUT,
  CLOUDINARY_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
};
