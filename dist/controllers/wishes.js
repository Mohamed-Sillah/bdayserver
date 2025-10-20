var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prisma from "../config/connectDB.js";
export const postWishes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, message } = req.body;
    if (!name)
        return res.status(400).json({ message: "Name is required!" });
    if (!message)
        return res.status(400).json({ message: "Message is required!" });
    const wish = yield prisma.wishes.create({ data: { name, message } });
    const wishes = yield prisma.wishes.findMany();
    if (wish)
        return res.status(200).json(wishes);
    return res.status(500).json({ message: "Unable to send wish!" });
});
export const getWishes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const wishes = yield prisma.wishes.findMany();
    return res.status(200).json(wishes);
});
