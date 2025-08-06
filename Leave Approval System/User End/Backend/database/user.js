const mongoose = require('mongoose')




const userSchema = new mongoose.Schema({
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
    },
    collegeId:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    }
})





mongoose.model("USER",userSchema)