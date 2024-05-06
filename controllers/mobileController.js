import Samsung from "../model/Mobiles.js";

export const getData = async (req, res) => {
  const da = await Samsung.find();
  res.json(da);
};
export const getDataById = async (req, res) => {
  const da = await Samsung.findById(req.params.idNumber);
  console.log(req.params);
  res.json(da);
};
export const getOne = async (req, res) => {
  const data = await Samsung.find({ brand: req.params.brand });
  res.json(data);
};
// export const getOne = async (req, res) => {
//   const data = await Samsung.findOneAndDelete({ brand: req.params.brand });
//   res.json(data);
// };

export const postData = async (req, res) => {
  const model = new Samsung(req.body);
  const neww = await model.save();
  res.json(neww);
};
export const putData = async (req, res) => {
  const content = req.body;
  const updatedData = await Samsung.findByIdAndUpdate(req.params.id, content, {
    new: true,
  });
  res.json(updatedData);
};
export const deleteData = async (req, res) => {
  await Samsung.findByIdAndDelete(req.params.id);
  res.send("ID Deleted");
};
