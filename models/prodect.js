import mongoose from "mongoose";

const prodectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})


const ProdectModel = mongoose.model("Prodect",prodectSchema)

export default ProdectModel;