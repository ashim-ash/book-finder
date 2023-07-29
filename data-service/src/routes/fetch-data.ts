import express from "express"
import { fetchBooksData } from "../controllers/dataController"

const router = express.Router()

router.post("/fetch-books", fetchBooksData)

export { router as booksRouter }