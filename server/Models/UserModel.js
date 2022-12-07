import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    }
});

userSchema.pre("save", async function(nex) {
    this.password = await bcrypt.hash(this.password,10);
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.getJsonToken = async function(){
    return jsonwebtoken.sign({id: this._id}, process.env.JWT_SECRET);
}



export const User = mongoose.model("User",userSchema);