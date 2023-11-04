import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const favorieSchema = new Schema(
    {
        idRessourceProgramme: {
            type: Types.ObjectId,
            ref: 'RessourceProgramme'
        },
        idUser: {
            type: Types.ObjectId,
            ref: 'User'
        }
    }, 
    {
        timestamps : true
    }
);

export default model("Favorie", favorieSchema);