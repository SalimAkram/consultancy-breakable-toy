import express from "express";

import { Squid } from "../../models/index.js"; 
import { nextWrapper } from "../lib/nextWrapper.js";

const squidsRouter = new express.Router();

squidsRouter.get("/", nextWrapper(async (req, res) => {
  try {
    const squids = await Squid.query()
    .orderBy("createdAt", "desc")
    .page(req.query.pageOffset, req.query.pageSize)    
    res.status(200).json({ squids: squids })
    } catch (error) {
    res.status(500).json({ errors: error })
    }
  })
);

export { squidsRouter };