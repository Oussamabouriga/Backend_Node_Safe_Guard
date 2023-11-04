import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const notificationSchema = new Schema(
    {
        idUser: {
            type: Types.ObjectId,
            ref: 'User',
            required: true
        },
        typeNotification: {
            type: String,
            required: true
        },
        idInformation: {
            type: Types.ObjectId,
            ref: 'Information',
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    }, 
    {
        timestamps : true
    }
);

export default model("Notification", notificationSchema);