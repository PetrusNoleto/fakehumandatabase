import { humanDatabaseProps, resultsProps } from "../types/humanTypes"
import { createNewHuman } from "./createNewHuman"

export const setNewHumanData = async(data:resultsProps)=>{
    const newHumanData = data.results.map(human=>{ 
        const firstName = human.name.first
        const lastName = human.name.last
        const humanName = (`${firstName} ${lastName}`)    
        const newHuman:humanDatabaseProps = {
            humanIndentification:human.id.value,
            humanName:humanName,
            humanAge:human.dob.age,
            humanGender:human.gender,
            humanEmail:human.email,
            humanPhone:human.phone,
            humanLocation:{
                humanStreetName:human.location.street.name,
                humanStreetNumber:human.location.street.number,
                humanState:human.location.state,
                humanCountry:human.location.country,
                humanPostCode:human.location.postcode
            },
            humanLogin:{
                humanUserName:human.login.username,
                humanPassword:human.login.password
            }
        }
        createNewHuman(newHuman)
        return newHuman    
    }) 
    return newHumanData
}