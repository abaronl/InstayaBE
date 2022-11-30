const mongoose = require("mongoose");
const pedidoSchema= mongoose.Schema
({
    usuario:{
        type:String,
        required:true
    },
    fecha_recogida:{
        type:Date,
        required:true
    },
    hora_recogida:{
        type:String,
        required:true
    },
    ancho:{
        type:Number,
        required:true
    },
    alto:{
        type:Number,
        required:true
    },
    largo:{
        type:Number,
        required:true
    },
    peso:{
        type:Number,
        required:true
    },
    delicado:{
        type:String,
        required:true
    },
    estado:{
        type:String,
        required:true
    },
    nombre_origen:{
        type:String,
        required:true
    },
    identificacion_origen:{
        type:Number,
        required:true
    },
    direccion_origen:{
        type:String,
        required:true
    },
    telefono_origen:{
        type:String,
        required:true
    },
    ciudad_origen:{
        type:String,
        required:true
    },
    pais_origen:{
        type:String,
        required:true
    },
    nombre_destino:{
        type:String,
        required:true
    },
    identificacion_destino:{
        type:Number,
        required:true
    },
    telefono_destino:{
        type:String,
        required:true
    },
    direccion_destino:{
        type:String,
        required:true
    },
    ciudad_destino:{
        type:String,
        required:true
    },
    pais_destino:{
        type:String,
        required:true
    }

});
module.exports=mongoose.model('Pedido', pedidoSchema);