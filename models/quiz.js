import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const choixSchema = new Schema(
    {
        text: {
            type: String,
            required: true
        },
        isCorrect: {
            type: Boolean,
            required: true
        }
    }
);

const questionsSchema = new Schema(
    {
        text: {
            type: String,
            required: true
        },
        choix: [choixSchema]
    }
);

const quizSchema = new Schema(
    {
        titreQ: {
            type: String,
            required: true
        },
        questions: [questionsSchema],
        idProgramme: {
            type: Types.ObjectId,
            ref: 'Programme',
            required: true
        }
    }, 
    {
        timestamps : true
    }
);

export default model("Quiz", quizSchema);