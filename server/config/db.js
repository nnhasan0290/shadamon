import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("mongodb connected successfully"))
    .catch((err) => console.log(err));
};
export default connectDatabase;
