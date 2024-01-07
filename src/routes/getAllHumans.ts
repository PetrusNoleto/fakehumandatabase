import { Router,Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

const databaseConnection = new PrismaClient()

export const getAllHumans = Router()

getAllHumans.get("/br", async(req:Request,res:Response)=>{
    console.log("rota / acessada")
    const humans = await databaseConnection.human.findMany({
        where:{
            humanLocation:{
                every:{
                    humanCountry:"Brazil"
                }
            }
        },
        include:{
            humanLogin:true,
            humanLocation:true
        }
    })
    res.status(200).json(humans)
})

getAllHumans.get("/us", async(req:Request,res:Response)=>{
    console.log("rota / acessada")
    const humans = await databaseConnection.human.findMany({
        where:{
            humanLocation:{
                every:{
                    humanCountry:"United States"
                }
            }
        },
        include:{
            humanLogin:true,
            humanLocation:true
        }
    })
    res.status(200).json(humans)
})

getAllHumans.get("/all", async(req:Request,res:Response)=>{
    console.log("rota / acessada")
    const humans = await databaseConnection.human.findMany({
        include:{
            humanLogin:true,
            humanLocation:true
        }
    })
    res.status(200).json(humans)
})

