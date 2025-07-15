import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/MongoDB.js";
import roles_router from "./routes/roles.router.js";
import users_router from "./routes/users.router.js";
import privileges_router from "./routes/privilege.router.js";
import categories_router from "./routes/categories.router.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/roles", roles_router);
app.use("/users", users_router);
app.use("/privilege", privileges_router);
app.use("/categories", categories_router);

connectDB();

app.listen(process.env.port, () => {
  console.log("localhost connected");
});
