import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/MongoDB.js";
import roles_router from "./routes/roles.router.js";
import users_router from "./routes/users.router.js";
import privilege_router from "./routes/privilege.router.js";

dotenv.config();

const app = express();
const port = 3002;

app.use(express.json());

app.use("/roles", roles_router);
app.use("/users", users_router);
app.use("/privilege", privilege_router);

connectDB();

app.listen(port, () => {
  console.log("localhost connected");
});
