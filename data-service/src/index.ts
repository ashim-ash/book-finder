import express from "express";
import { json } from "body-parser";
import dotenv from "dotenv";
import { Kafka, Partitioners } from "kafkajs";
import cors from "cors";

//Routes
import { booksRouter } from "./routes/fetch-data";

const app = express();
app.use(json());
app.use(cors());

app.use("/api", booksRouter);

app.listen(4000, () => {
  console.log("data server listening on 4000");
});
