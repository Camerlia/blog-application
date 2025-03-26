import express from "express";
import { clearkWebHook } from "../controllers/webhook.controller.js";
import bodyParser from "body-parser";

const router = express.Router();

router.post(
  "/clerk",
  bodyParser.raw({ type: 'application/json' }),
  clearkWebHook
);

export default router;
