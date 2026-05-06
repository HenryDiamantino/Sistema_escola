import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoute.js";
import authRoutes from "./routes/authRoute.js";
import alunoRoutes from "./routes/alunoRoute.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({ msg: "João fiotasso" });
});

app.get("/teste", (req,res)=>{
    res.status(200).json({ok: true});
});

app.use("/auth", authRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/alunos", alunoRoutes);

export default app;