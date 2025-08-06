const mongoose = require('mongoose')




const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
})





mongoose.model("ADMIN",adminSchema)