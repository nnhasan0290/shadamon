import express from "express"
import errorMiddleware from "./middleware/error.js";
const app = express();


app.use(errorMiddleware);



export default app;