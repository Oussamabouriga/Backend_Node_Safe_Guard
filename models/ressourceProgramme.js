import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const ressourceProgrammeSchema = new Schema(
    {
        video: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        idProgramme: {
            type: Types.ObjectId,
            ref: 'Programme'
        }
    }, 
    {
        timestamps : true
    }
);

export default model("RessourceProgramme", ressourceProgrammeSchema);