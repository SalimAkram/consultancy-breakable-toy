import express from "express";
import objection from "objection";
const { ValidationError } = objection

import { cleanUserInput } from "../../db/services/cleanUserInput.js";
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

squidsRouter.post("/", nextWrapper(async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  
  try {
    const newSquid = await Squid.query().insertAndFetch(formInput)
    return res.status(201).json( { newSquid })
  } catch (error) {
    if (error instanceof ValidationError) {
    res.status(400).json({ errors: error.data.name[0].message
 })
    }
    res.status(500).json( { errors: error })
  }
}))

export { squidsRouter };