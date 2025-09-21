//const express = require("express");
import "dotenv/config"; 
import express from "express";

import conectDB from "./infrastructure/db";
import formRoutes from "./api/form";
import submissionRoutes from "./api/submition";
//import bookingsRouter from "./api/booking";
//import user from "./api/user";
import cors from "cors";
import globalErrorHandlingMiddleware from "./api/middlewares/global-error-handling-middleware";
//import { handleWebhook } from "./application/payment";
//import { clerkMiddleware } from "@clerk/express";
//import bodyParser from "body-parser";
//import paymentsRouter from "./api/payment";

const app= express();


//app.use(clerkMiddleware());//per middleware

conectDB();

// Middleware

app.use(cors());

//app.use(cors({ origin: process.env.FRONTEND_URL }));

/*app.post(
  "/api/stripe/webhook",
  bodyParser.raw({ type: "application/json" }),
  handleWebhook
);

app.use(express.json());//parse the json data

app.use("/api/forms", formRoutes);
app.use("/api/hotels",hotelsRouter);
app.use("/api/bookings",bookingsRouter);
app.use("/api/users",user);
app.use("/api/payments", paymentsRouter);
*/
app.use(express.json());

app.use("/api/forms", formRoutes);
app.use("/api/submissions", submissionRoutes);



app.use(globalErrorHandlingMiddleware);//post midlware


/*
app.delete('/:hotelId',(req,res)=>{
    const hotelId = req.params.hotelId;
    hotels.splice(
        hotels.findIndex((hotel) => hotel._id === hotelId),
        1
      );
      res.status(200).json({
        message: `Hotel ${hotelId} deleted successfully!`,
      });
});

app.put('/:hotelId',(req,res)=>{
    const hotelId = req.params.hotelId;
    const hotel = req.body;
    const index = hotels.findIndex((hotel) => hotel._id === hotelId);
    hotels[index] = hotel;
    res.status(200).json({
        message: `Hotel ${hotelId} updated successfully!`,
      });   });*/

//difine the port on the server
const port = process.env.PORT||8000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));