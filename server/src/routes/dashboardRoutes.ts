import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController";

const dashboardRoutes = Router();

dashboardRoutes.get("/", getDashboardMetrics);

export default dashboardRoutes;
