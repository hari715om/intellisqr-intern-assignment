import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

const SECRET_KEY = "your_secret_key"; 

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post("/register", async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("Incoming registration request:", req.body);

    const { email, password } = req.body;
    if (!email || !password) {
      console.log("Missing fields");
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      console.log("User already exists:", existingUser);
      res.status(400).json({ error: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    console.log("User created successfully");
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
});

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user and get token
 * @access  Public
 */
router.post("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(400).json({ error: "User not found" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ error: "Invalid password" });
      return;
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" });

    res.json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * @route   GET /api/auth/users
 * @desc    Get all users (For testing)
 * @access  Public
 */
router.get("/users", async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
});

export default router;
