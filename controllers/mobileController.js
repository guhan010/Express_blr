import Samsung from "../model/Mobiles.js";

export const getData = async (req, res) => {
  const da = await Samsung.find();
  ewa.json(da);
};
export const postData = async (req, res) => {
  const model = new Samsung(req.body);
  const neww = await model.save();
  res.json(neww);
};
export const putData = (req, res) => {
  res.send("updating data controller");
};
export const deleteData = (req, res) => {
  res.send("Deleting data controller");
};
