import mongoose from 'mongoose';
    const { Schema, model  } = mongoose;

    const userSchema = new Schema(
        {

        UserName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        latitudeDeUser: Number,
        longitudeDeUser: Number,
        numeroTel: Number,
    }, 
    {
    timestamps : true
    });

    export default model("User", userSchema);