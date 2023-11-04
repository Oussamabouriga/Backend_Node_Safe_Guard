import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const informationSchema = new Schema(
    {
        typeCatastrophe: {
            type: String,
            required: true
        },
        idUser: {
            type: Types.ObjectId,
            ref: 'User',
            required: true
        },
        pays: {
            type: String,
            required: true
        },
        region: {
            type: String,
            required: true
        },
        descriptionInformation: {
            type: String,
            required: true
        },
        dateDePrevention: {
            type: Date,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        pourcentageFiabilite: {
            type: Number,
            required: true
        },
        etat: {
            type: String,
            required: true
        }
    }, 
    {
        timestamps : true
    }
);

export default model("Information", informationSchema);