import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';



dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("management", managementRoutes);
app.use("sales", salesRoutes);


