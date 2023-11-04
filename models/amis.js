import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const userSchema = new Schema(
    {
        nomAmis: {
            type: String,
            required: true,
            unique: true
        },
        iduser: {
            type: Types.ObjectId,
            ref: 'User'
        }
    }, 
    {
        timestamps : true
    }
);

export default model("User", userSchema);