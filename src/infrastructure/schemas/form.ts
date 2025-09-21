import mongoose from "mongoose";

// Field Schema
const fieldSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["Text Input", "Text Area", "Checkbox", "Option"],
  },
  label: { type: String, required: true },
  required: { type: Boolean, default: false },
  options: { type: [String], default: [] },
});

// Form Schema
const formSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  fields: [fieldSchema],
}, { timestamps: true }); // adds createdAt and updatedAt automatically

// Model
const Form = mongoose.model("Form", formSchema);
export default Form;
