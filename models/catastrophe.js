import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const catastropheSchema = new Schema(
    {
        titre: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        tsunami: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        radius: {
            type: Number,
            required: true
        },
        magnitude: {
            type: Number,
            required: true
        },
        latitudeDeCatastrophe: {
            type: Number,
            required: true
        },
        longitudeDeCatastrophe: {
            type: Number,
            required: true
        },
    }, 
    {
        timestamps : true
    }
);

export default model("Catastrophe", catastropheSchema);