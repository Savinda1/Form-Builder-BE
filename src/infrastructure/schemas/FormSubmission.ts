import mongoose, { Schema, Document } from "mongoose";

export interface IFormSubmission extends Document {
  formId: string;
  data: Record<string, any>;
  createdAt: Date;
}

const FormSubmissionSchema: Schema = new Schema(
  {
    formId: { type: String, required: true },
    data: { type: Object, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IFormSubmission>(
  "FormSubmission",
  FormSubmissionSchema
);
