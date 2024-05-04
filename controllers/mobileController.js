import Samsung from "../model/Mobiles.js";

export const getData = (req, res) => {};
export const postData = (req, res) => {
  const model = new Samsung(req.body);
  model.save();
  res.json(model);
};
export const putData = (req, res) => {
  res.send("updating data controller");
};
export const deleteData = (req, res) => {
  res.send("Deleting data controller");
};
