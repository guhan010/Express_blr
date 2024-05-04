import express from "express";
import {
  deleteData,
  getData,
  postData,
  putData,
} from "../controllers/mobileController.js";

const router = express.Router();

router.get("/", getData);
router.post("/", postData);
router.put("/", putData);
router.delete("/", deleteData);

export default router;
