import { Router } from "express";

const companyRoutes = Router();

companyRoutes.get("/");

companyRoutes.post("/register");

export default companyRoutes;
