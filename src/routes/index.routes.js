import { Router } from "express";
import userRoutes from "./user.routes.js";
import companyRoutes from "./company.routes.js";

const routes = Router();

routes.use("/api/users", userRoutes);

routes.use("/api/company", companyRoutes);

export default routes;
