import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan';
import cors from 'cors';
import { notFoundError, errorHandler } from './middlewares/error-handler.js';
import trajetSecuriseRoutes from './routes/tarjetSecuriseRoute.js'
import  alertRoutes from './routes/alertRoutes.js';
import  catastropheRoutes from './routes/catastopheRoutes.js'
import usgsRoutes from './routes/usgs_api.js'
const app = express() 
const hostname = '127.0.0.1'; 
const port=process.env.PORT || 9090 
const databaseName = 'safeguardDB';
mongoose.set('debug',true);
mongoose.Promise = global.Promise;
mongoose
mongoose
  .connect(`mongodb://${hostname}:27017/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch(err => {
    console.log(err);
  });

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/trajetSecurise', trajetSecuriseRoutes);
app.use('/alert', alertRoutes);
app.use('/catastrophe', catastropheRoutes);
app.use('/api', usgsRoutes);

app.use(notFoundError);
app.use (errorHandler);
app.listen(port,()=>{
    console.log(`Server running ${hostname}:${port}`)
})