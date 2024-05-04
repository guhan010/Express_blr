import mongoose, { Schema } from "mongoose";

const mobileSchema = new Schema({
  brand: String,
  model: String,
  price: Number,
});

const Samsung = mongoose.model("Samsung", mobileSchema);
// console.log(samsung)
export default Samsung;
