import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import dbConnection from "./config/db";

const PORT = process.env.PORT || 6000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(`${process.cwd()}/storage`));

dbConnection();

app.use( router );

app.listen( PORT , () => {
  console.log('SERVER ON PORT:' + PORT);
});
