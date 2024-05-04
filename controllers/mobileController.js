import mobiles from "../data/mobiles.js";

export const getData = (req, res) => {
  res.json(mobiles);
};
export const postData = (req, res) => {
  res.send("posting data controller");
};
export const putData = (req, res) => {
  res.send("updating data controller");
};
export const deleteData = (req, res) => {
  res.send("Deleting data controller");
};
