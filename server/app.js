import express from "express";
import errorMiddleware from "./middleware/error.js";
import cors from "cors";
import userRouter from "./Routes/userRouter.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import multer from "multer";


const app = express();
const upload = multer();


app.use(express.json());
app.use(cookieParser())
app.use(cors());

if (process.env.NODE_ENV !== "PRODUCTION") {
dotenv.config({ path: "server/config/.env" })
}
connectDatabase();

app.use(upload.array());



app.use("/api", userRouter);



app.use(errorMiddleware);
export default app;
