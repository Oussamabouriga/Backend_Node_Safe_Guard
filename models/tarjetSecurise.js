import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const tarjetSecuriseSchema = new Schema(
    {
        etat: {
            type: Boolean,
            required: true
        },
        iduser: {
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

export default model("TarjetSecurise", tarjetSecuriseSchema);