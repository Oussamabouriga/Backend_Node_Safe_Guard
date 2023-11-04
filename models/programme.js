import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const programmeSchema = new Schema(
    {
        Titre: {
            type: String,
            required: true
        },
        descriptionProgramme: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }, 
    {
        timestamps : true
    }
);

export default model("Programme", programmeSchema);