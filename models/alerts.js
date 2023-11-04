import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const alertSchema = new Schema(
    {
        notifiedPerson: {
            type: String,
            enum: ['dangerSelf', 'dangerFriend'],
            required: true,
          },
        description: {
            type: String,
            required: true
        },
        idUser: {
            type: Types.ObjectId,
            ref: 'User'
        },
        idCatastrophe: {
            type: Types.ObjectId,
            ref: 'Catastrophe'
        }
    }, 
    {
        timestamps : true
    }
);

export default model("Alerts", alertSchema);