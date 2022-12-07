import { catchAsyncError } from "../utils/catchAsyncErrors.js";
import jsonwebtoken from "jsonwebtoken";

const isAuthenticated = catchAsyncError(async (req,res, nex) => {
    const {token} = req.cookies;
    console.log(token);
    const decoded_id = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    res.send(decoded_id);
})

export default isAuthenticated;