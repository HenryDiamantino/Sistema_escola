import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();
app.use(express.json());

app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://sistema-de-escola.vercel.app"
    ],
    methods:[
        "GET", "POST", "PUT", "DELETE"
    ],
    allowedHeaders:[
        "Content-Type","Authorization", "ngrok-skip-browser-warning"
    ]
}));

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando http://localhost:${process.env.PORT}`);
});

