//const express = require("express");
import "dotenv/config"; 
import express from "express";

import conectDB from "./infrastructure/db";
import formRoutes from "./api/form";
import submissionRoutes from "./api/submition";
import cors from "cors";
import globalErrorHandlingMiddleware from "./api/middlewares/global-error-handling-middleware";


const app= express();


//app.use(clerkMiddleware());//per middleware

conectDB();

// Middleware

//app.use(cors());

app.use(cors({ origin: process.env.FRONTEND_URL }));



app.use(express.json());

app.use("/api/forms", formRoutes);
app.use("/api/submissions", submissionRoutes);



app.use(globalErrorHandlingMiddleware);//post midlware




//difine the port on the server
const port = process.env.PORT||8000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));