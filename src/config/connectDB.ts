import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

export const connectDB = async () => {
    try{
        await prisma.$connect();
        console.log("✅Successfully connected to Database!");
    } catch(err){
        console.log("⚠️Failed to connect to Database!");
    }
}

export default prisma;