
const express = require("express");
const path = require("path");
const app = express();

const jsondata = {
  Whiskey: "200",
  rum: "100",
};
let dir = path.dirname("C:\\UsersADMINDocumentsProjectsExpress_blr");
dir = "C:\\UsersADMINDocumentsProjectsExpress_blrindex.html";
console.log(dir);

let imag = __dirname;
imag = path.join(imag, "tree.jpg");

let jso = __dirname;
jso = path.join(jso, "package.json");
// console.log(dir);

app.get("/", (req, res) => res.send("<h1>Shopping mall</h1>"));
app.get("/kfc", (req, res) => res.send("kfc shop"));
app.get("/mrp", (req, res) => res.json(jsondata));
app.get("/html", (req, res) => {
  res.sendFile(dir);
});
app.get("/image", (req, res) => {
  res.sendFile(imag);
});
app.get("/json", (req, res) => {
  res.sendFile(jso);
});

app.listen(1010, () => {
  console.log("server connected");
});
