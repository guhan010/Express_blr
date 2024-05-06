import express from "express";
import {
  deleteData,
  getData,
  getDataById,
  postData,
  putData,
} from "../controllers/mobileController.js";
import { get } from "mongoose";

const router = express.Router();

router.get("/", getData);
router.get("/:idNumber", getDataById);
router.post("/", postData);
router.put("/:id", putData);
router.delete("/:id", deleteData);

export default router;
