import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    postCode:{
        type:String,
        required:true
    },
    rodeNumber:{
        type:String,
        required:true
    },
    prodectId:{
        type:String,
        required:true
    }

})

const BookingModel = mongoose.model("Booking",bookingSchema)

export default BookingModel;