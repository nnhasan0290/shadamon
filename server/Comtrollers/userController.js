import { User } from "../Models/UserModel.js";
import { catchAsyncError } from "../utils/catchAsyncErrors.js";
import ErrorHandler from "../utils/errorhandler.js";
import { sendToken } from "../utils/sendToken.js";

// export const loadUser = catchAsyncError((req,res,nex) => {
//     res.status(200).json({
//         success: true,
//         user: "nazmul hasan"
//     })
// })

export const createUser = catchAsyncError(async (req, res, nex) => {
  const user = await User.create(req.body);
  if (!user.email && !user.phone) {
    return nex(new ErrorHandler("Email or Phone is Required", 400));
  }
  sendToken(user, 200, res);
});

export const loginUser = catchAsyncError(async (req, res, nex) => {

  const { phone, email, password } = req.body;
  let user;

  if (email) {
    user = await User.findOne({ email });
  } else {
    if (phone) {
      user = await User.findOne({ phone });
    }
  }
  
  if (!user) {
    return nex(new ErrorHandler("invalid email or password", 401));
  }
  if (!password) {
    return nex(new ErrorHandler("invalid email or Password", 401));
  }


  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return nex(new ErrorHandler("invalid email or password", 401));
  }
  sendToken(user, 200, res);
});
