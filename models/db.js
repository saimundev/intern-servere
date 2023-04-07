import mongoose from "mongoose";
  
const connectDb =async ()=>{
    try {
      await  mongoose.connect("mongodb+srv://intern:internship@cluster0.d2pawnh.mongodb.net/intern?retryWrites=true&w=majority")
      console.log("DB connect")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;