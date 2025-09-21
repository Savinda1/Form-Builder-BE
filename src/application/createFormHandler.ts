import { NextFunction,Request, Response } from "express";
import Form from "../infrastructure/schemas/form";
import NotFoundError from "../domin/error/not-found-error";
import ValidationError from "../domin/error/validation-error";

export const createFormHandler = async (
    req: Request, res: Response,  next: NextFunction) => {
  try {
    const { Title, fields } = req.body;
    if (!Title) {
                throw new  ValidationError ("Title is required");
                

    }

    const form = new Form({ Title, fields });
    await form.save();

    res.status(201).json({ id: form._id, Title, fields });

  } catch (error) {
    next(error);
  }
};

// Handler for getting a form by ID
export const getFormHandler = async (
    req: Request, res: Response,  next: NextFunction) => {
  try {
    const form = await Form.find();
    if (!form) {
        throw new NotFoundError("Form not found");
    }
    res.status(200).json(form);
    console.log(form);
  } catch (error) {
    next(error);
  }
};
