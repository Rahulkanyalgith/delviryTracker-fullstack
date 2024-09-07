import express from "express";
import FedexTrackingController from "../controllers/fedexTrackingcoontroller.js"

const router = express.Router();

router.post("/track", FedexTrackingController.getTracking)

export default router;
    
