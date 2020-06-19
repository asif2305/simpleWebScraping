const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const amazonSchema=new Schema(
    {
        text:{
            type:String, 
            required:true,
        },
        textLink:{
            type:String,
            required:true
        }
    },
   {
    timestamps:true,
   }
);

const amazonData=mongoose.model('amazonDataList',amazonSchema);
module.exports=amazonData;