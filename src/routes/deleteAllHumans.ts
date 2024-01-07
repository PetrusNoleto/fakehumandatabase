import { Router,Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

const databaseConnection = new PrismaClient()

export const deleteAllHumans = Router()

deleteAllHumans.get("/delete", async(req:Request,res:Response)=>{
    console.log("rota /delete acessada")
    const getAllHumans = await databaseConnection.human.count()
    const humans = await databaseConnection.human.deleteMany()
    res.status(200).json(`${getAllHumans} humanos deletados`)
})


