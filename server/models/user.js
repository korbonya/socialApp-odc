import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const User = mongoose.model("User", userSchema);

export default User;
