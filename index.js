import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import privilegeRoutes from "./routes/privileges.routes.js";
import builderContainer from "./builder.container.js";
import errorHandler from "./middleware/handling.error.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const container = builderContainer();
const privilegeController = container.privilegeController;

app.use(cors({ origin: process.env.cors_url, credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Backend is running !");
});
app.use("/privileges", privilegeRoutes(privilegeController));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("localhost connected");
});
