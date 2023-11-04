import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const commentairesInformationSchema = new Schema(
    {
        idUser: {
            type: Types.ObjectId,
            ref: 'User',
            required: true
        },
        idInformation: {
            type: Types.ObjectId,
            ref: 'Information',
            required: true
        },
        descriptionCommentaire: {
            type: String,
            required: true
        }
    }, 
    {
        timestamps : true
    }
);

export default model("CommentairesInformation", commentairesInformationSchema);