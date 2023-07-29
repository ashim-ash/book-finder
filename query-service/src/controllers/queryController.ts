import { Request, Response } from "express"
import { requestDataServer } from "../config/axiosConfig";

//request made to data server
export const searchMachingBooks = async (req:Request,res:Response) => { 
    try { 
        const searchedKeyword = String(req.query.q);
        const books = await requestDataServer(searchedKeyword); // api call to data service
        res.status(200).send(books)
    } catch (error) {
        res.status(404).send({error:"No Books found"})
    } 
}
