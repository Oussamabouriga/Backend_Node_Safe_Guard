import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const zoneDeDangerSchema = new Schema(
    {
        latitudeDeZoneDanger: {
            type: Number,
            required: true
        },
        longitudeDeZoneDanger: {
            type: Number,
            required: true
        },
        etatDezoneDeDanger: {
            type: String,
            required: true
        }
    }, 
    {
        timestamps : true
    }
);

export default model("ZoneDeDanger", zoneDeDangerSchema);