import mongoose, { Schema } from "mongoose";

const mobileSchema = new Schema({
  brand: String,
  model: String,
  price: Number,
});

const samsung = mongoose.model("samsung", mobileSchema);
// console.log(samsung)
export default samsung;
