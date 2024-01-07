import express from "express"
import cors from "cors"
import { newBrasiliansHuman } from "./routes/createNewBrasilianHumans"
import { getAllHumans } from "./routes/getAllHumans"
import { deleteAllHumans } from "./routes/deleteAllHumans"
import { newEuaHuman } from "./routes/createAmericanHuman"



const server = express()
server.use(cors())
server.use(deleteAllHumans)
server.use(getAllHumans)
server.use(newBrasiliansHuman)
server.use(newEuaHuman)


server.listen(3330,()=>{
    console.log('helloWord')
})