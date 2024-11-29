import { authenticateToken } from "./middlewares/authenticate.middleware.js";
import express from "express";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";
import tasksRouter from "./routes/tasks.routes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/login", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/tasks", authenticateToken, tasksRouter);

export default app;
