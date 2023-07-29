import express from "express";
import { searchMachingBooks } from "../controllers/queryController";

const router = express.Router();

//consumes the search keyword through request query and fetches data from data service
router.get("/search", searchMachingBooks);

export { router as queryRouter };
