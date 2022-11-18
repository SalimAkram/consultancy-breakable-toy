import express from "express";

import { Squid } from "../../models/index.js"; 
import { nextWrapper } from "../lib/nextWrapper.js";

const squidsRouter = new express.Router();

squidsRouter.get("/", nextWrapper(async (req, res) => {
  try {
    const squids = await Squid.query()
    .orderBy("createdAt", "desc")
    res.status(200).json({ squids: squids })
    } catch (error) {
    res.status(500).json({ errors: error })
    }
  })
);

squidsRouter.post("/", nextWrapper(async (req, res) => {
  console.log(`response ${res}`);
  console.log(`request ${req}`);
}))

export { squidsRouter };