import exp from "express";
import { connect } from "mongoose";
import { empApp } from "./API/empAPI.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = exp();

// add cors middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://employee-management-system-1qgl-jkda3a6d0.vercel.app",
      "https://employee-management-system-1qgl.vercel.app"
    ],
    credentials: true,
  })
);

// add body parser
app.use(exp.json());

app.use(cookieParser());

// root route
app.get("/", (req, res) => {
  res.send("Employee Management Backend Running");
});

app.use("/api", empApp);

// connect to db server
async function connectDB() {
  try {

    await connect(process.env.MONGO_URI);

    console.log("db connection successful");

    const port = process.env.PORT || 4000;

    app.listen(port, "0.0.0.0", () =>
      console.log(`server listening to ${port}`)
    );

  } catch (err) {
    console.log("err in db connection :", err);
  }
}

console.log("MONGO_URI =", process.env.MONGO_URI);

connectDB();

app.use((err, req, res, next) => {
  console.log("error is ", err);

  // ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "error occurred",
      error: "Validation failed",
    });
  }

  // CastError
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "error occurred",
      error: "Invalid ID format",
    });
  }

  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;

  const keyValue =
    err.keyValue ??
    err.cause?.keyValue ??
    err.errorResponse?.keyValue;

  if (errCode === 11000 && keyValue) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];

    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    });
  }

  // server-side error
  res.status(500).json({
    message: "error occurred",
    error: "Server side error",
  });
});