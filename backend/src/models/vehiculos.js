import { Schema,model } from "mongoose";

const vehiculoSchema = new Schema ({
    placa: {
        type: String,
    },
    nombre:{
        type: String,
    },
    categoria:{
        type: String,
    },
    tiempoAlquiler:{
        type: String,
    },
    precio:{
        type: Number,
    },
},{versionKey: false, timestamps:true});

export default model ('vehiculo', vehiculoSchema);