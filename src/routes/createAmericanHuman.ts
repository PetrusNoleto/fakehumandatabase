import axios from "axios";
import { Router,Request,Response } from "express";
import { resultsProps } from "../types/humanTypes";
import { databaseConnection } from "../functions/databaseConnection";
import { setNewHumanData } from "../functions/setNewHumanData";
import * as dotenv from "dotenv"

dotenv.config()

export const newEuaHuman = Router()

const $ApiUrl = process.env.API_NEW_EUA_HUMAN_URL as string
const $EuaHumansQnt = 100

newEuaHuman.get("/neweuahuman", async(req:Request,res:Response)=>{
    try {
        console.log("route /neweuahuman access")
        await databaseConnection.$connect()
        console.log("user connection success")
        const getNewBrasilianHumanData = await axios.get(`${$ApiUrl}results=${$EuaHumansQnt}`)
        const data = await getNewBrasilianHumanData.data as resultsProps
        console.log("get data for us human success")
        await setNewHumanData(data)
        console.log(`${$EuaHumansQnt} humans created`)
        res.status(200).json(`${$EuaHumansQnt} humans created`)  
    } catch (error) {
        console.log(error)
        res.json("not created")
    }
})