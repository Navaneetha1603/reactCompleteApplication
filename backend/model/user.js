const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
},
{
    timestamps:true
})

const User=mongoose.model('User',userSchema);
module.exports=User