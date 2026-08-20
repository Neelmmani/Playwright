import dotenv from 'dotenv';

dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL!,
  email: process.env.email!,
//   password: process.env.PASSWORD!
};