import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes"; 

dotenv.config(); 

const app = express(); 

app.use((req, res, next) => {
    console.log(`📡 Incoming request: [${req.method}] ${req.url}`);
    next();
});

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000"], 
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(express.json());

app.use("/api/auth", authRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error("Unhandled Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
