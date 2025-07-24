import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/MongoDB.js";
import roles_router from "./routes/roles.router.js";
import users_router from "./routes/users.routes.js";
import privileges_router from "./routes/privileges.router.js";
import categories_router from "./routes/categories.router.js";
import { seedCategory, seedPrivilege, seedRole } from "./core/seed.js";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/roles", roles_router);
app.use("/users", users_router);
app.use("/privileges", privileges_router);
app.use("/categories", categories_router);

const startServeur = async () => {
  try {
    await connectDB();
    await seedCategory();
    await seedPrivilege();
    await seedRole();

    app.listen(process.env.port, () => {
      console.log("localhost connected");
    });
  } catch (err) {
    console.error("Error during serveur start:", err.message);
  }
};

startServeur();
