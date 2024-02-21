 import mongoose from "mongoose";

 const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    lastName: {
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 3,
    },
    picturePath: {
        type: String,
        default: ""
    },
    friends: {
        type: Array,
        default: []
    },
    location: String,
    occupation: String,
    viewedProfile: {
        type: Number,
        default: () => Math.floor(Math.random() * 100),
    },
    impressions: {
        type: Number,
        default: () => Math.floor(Math.random() * 1000)
    }
 }, {timestamps: true});

 const User = mongoose.model("User", UserSchema);

 export default User;