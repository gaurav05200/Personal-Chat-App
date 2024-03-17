import express from "express";
import protectRoute from "../middleWare/protectRoute.js";

const router = express.Router();

router.get("/",protectRoute,getUserForSideBar);

export default router;