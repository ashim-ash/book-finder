import express from "express";
import { json } from "body-parser";
import cors from "cors";

//Routes 
import { queryRouter } from "./routes/query";

const app = express();
app.use(json());
app.use(cors());

app.use("/api", queryRouter);

app.listen(3000, () => {
  console.log("data server listening on 3000");
});
