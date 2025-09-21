// handlers/submitFormHandler.ts
import { Request, Response, NextFunction } from "express";
import FormSubmission from "../infrastructure/schemas/FormSubmission";

export const submitFormHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { formId, data } = req.body;

    if (!formId || !data) {
      return res.status(400).json({ success: false, message: "formId and data are required" });
    }

    const submission = new FormSubmission({ formId, data });
    await submission.save();

    res.status(201).json({ success: true, submission });
  } catch (err) {
    next(err);
  }
};

export const getAllSubmissionsHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const submissions = await FormSubmission.find();

    res.status(200).json({
      success: true,
      count: submissions.length,
      submissions,
    });
  } catch (err) {
    next(err);
  }
};
