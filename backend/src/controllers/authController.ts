import { Request, Response } from "express";

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        // Your login logic here
        res.status(200).json({ message: "User logged in successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
