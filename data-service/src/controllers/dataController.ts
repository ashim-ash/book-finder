import { Request, Response, NextFunction } from "express";
import { fetchBooks } from "../config/axiosConfig"; // axios base url configuration 

//receives search keyword as json , fetchs matching book data with axios api call
export const fetchBooksData = async (req: Request, res: Response) => {
  try {
    const searchKeyword = req.body.key;
    const bookData = await fetchBooks(`${searchKeyword}`);
    if(!bookData.totalItems){
     throw ("Books not found") //once the keyword return zero book count
    }
    res.status(200).json(bookData);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
