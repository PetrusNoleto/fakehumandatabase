import axios from "axios";
import { Router,Request,Response } from "express";
import { resultsProps } from "../types/humanTypes";
import { databaseConnection } from "../functions/databaseConnection";
import { setNewHumanData } from "../functions/setNewHumanData";
import * as dotenv from "dotenv"

dotenv.config()

export const newBrasiliansHuman = Router()

const $ApiUrl = process.env.API_NEW_BRASILIAN_HUMAN_URL as string
const $BrasilianHumansQnt = 100

newBrasiliansHuman.get("/newbrasilianshuman", async(req:Request,res:Response)=>{
    try {
        console.log("rota /newBrasilianHuman acessada")
        await databaseConnection.$connect()
        console.log("usuario conectou")
        const getNewBrasilianHumanData = await axios.get(`${$ApiUrl}results=${$BrasilianHumansQnt}`)
        const data = await getNewBrasilianHumanData.data as resultsProps
        console.log("dados dos humanos brasileiro pegos com sucesso")
        await setNewHumanData(data)
        console.log(`${$BrasilianHumansQnt} humanos criados`)
        res.status(200).json(`${$BrasilianHumansQnt} humanos criados`)  
    } catch (error) {
        console.log(error)
        res.json("não foi possivel criar")
    }
})