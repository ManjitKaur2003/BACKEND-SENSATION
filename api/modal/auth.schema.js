import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },

},
    { timestamps: true }
);
export const Auth = mongoose.model("Auth", authSchema);

