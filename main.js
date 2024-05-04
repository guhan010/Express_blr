import express from "express";
import appleRoute from "./routes/apple.js";
import samsungRoute from "./routes/samsung.js";
import mongoose from "mongoose";
// import body from "body-parser";

const app = express();
app.use(express.json());
app.use("/mobile/apple", appleRoute);
app.use("/mobile/samsung", samsungRoute);

// console.log(mongoose);
mongoose
  .connect(
    "mongodb+srv://donic73471:tenny010@cluster0.9shmgxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.listen(1010, () => {
  console.log("server connected");
});
