import mongoose from "mongoose";

const TipSchema = new mongoose.Schema({
    date:{
        type: String,
        required:true
    },
    location:{
        type:String,
        required:false
    },
    total:{
        type:Number,
        required:true
    },
    employees:{
        type:String,
        required:true
    },
    tips:{
        type:String,
        required:true
    },
    hours:{
        type:String,
        required:true
    }
});

const Tip = mongoose.model("Tips", TipSchema);

export default Tip;