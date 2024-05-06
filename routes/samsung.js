import express from "express";
import {
  deleteData,
  getData,
  getDataById,
  getOne,
  postData,
  putData,
} from "../controllers/mobileController.js";
import { get } from "mongoose";

const router = express.Router();

router.get("/", getData);
router.get("/:idNumber", getDataById);
router.get("/brand/:brand", getOne);
router.post("/", postData);
router.put("/:id", putData);
router.delete("/:id", deleteData);

export default router;
