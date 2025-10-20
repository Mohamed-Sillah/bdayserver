import { Request, Response } from "express";
import prisma from "../config/connectDB.js";

export const postWishes = async (req: Request, res: Response) => {
    const { name, message } = req.body;
    if(!name) return res.status(400).json({ message: "Name is required!" });
    if(!message) return res.status(400).json({ message: "Message is required!" });
    const wish = await prisma.wishes.create({ data: { name, message } });
    const wishes = await prisma.wishes.findMany();
    if(wish) return res.status(200).json(wishes);
    return res.status(500).json({ message: "Unable to send wish!" });
}

export const getWishes = async (req: Request, res: Response) => {
    const wishes = await prisma.wishes.findMany();
    return res.status(200).json(wishes);
}
