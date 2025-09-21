import express from "express";

import {submitFormHandler,getAllSubmissionsHandler} from "../application/submitFormHandler";

const router = express.Router();

// POST /api/submissions
router.post("/", submitFormHandler);
router.get("/", getAllSubmissionsHandler);
//get(getFormHandler)


//router.get("/:id", getFormHandler);

export default router;
