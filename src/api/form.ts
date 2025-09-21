import express from "express";

import { createFormHandler, getFormHandler } from "../application/createFormHandler";

const Formrouter = express.Router();

Formrouter.route("/").post(createFormHandler).
get(getFormHandler)


//router.get("/:id", getFormHandler);

export default Formrouter;

