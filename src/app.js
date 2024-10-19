import express from "express";
import morgan from "morgan";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


//routes


//not found
app.use((req, res, next) => {
    res.status(404).json({ message: 'endpoint not found' });
});


export default app;