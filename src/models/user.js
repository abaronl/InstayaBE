const mongoose = require("mongoose");
const userSchema= mongoose.Schema
({
    usuario:{
        type:String,
        required:true
    },
    contrasena:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('User', userSchema);