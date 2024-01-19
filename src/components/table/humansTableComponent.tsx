"use client"
import { usePathname } from "next/navigation";
import { HumansTable } from "./humansTable"
import { useEffect, useState } from "react";
import { humanDatabaseProps } from "@/types/default";
import { getHumans } from "@/funtions/getHumans";

const HumansTableComponent = ()=>{
    const path = usePathname().split("/")
    const nationAbreviation = path.pop() || path.pop() as string;
    const [contentLoading, setContentLoading] = useState(true)
    const [humansList,setHumansList] = useState<humanDatabaseProps[] | []>([])
    const getAllHumans = async(nationAbrev:string)=>{
       const allHumans = await getHumans(nationAbrev)
        setHumansList(allHumans)
        setContentLoading(false)
        console.log(humansList)
       return(allHumans)
    }
    useEffect(()=>{   
      getAllHumans(nationAbreviation)
    },[nationAbreviation])  
    return(
        <>
         {contentLoading == false ?
            <HumansTable.root>
            <HumansTable.head>
                <HumansTable.htr>
                    <HumansTable.th fieldName="indetification"/>
                    <HumansTable.th fieldName="name"/>
                    <HumansTable.th fieldName="age"/>
                    <HumansTable.th fieldName="email"/>
                    <HumansTable.th fieldName="phone"/>
                    <HumansTable.th fieldName="gender"/>
                    <HumansTable.th fieldName="country"/>
                    <HumansTable.th fieldName="state"/>
                    <HumansTable.th fieldName="street"/>
                    <HumansTable.th fieldName="street number"/>
                    <HumansTable.th fieldName="postal code"/>
                    <HumansTable.th fieldName="username"/>
                    <HumansTable.th fieldName="password"/>
                </HumansTable.htr>
            </HumansTable.head>
            <HumansTable.body>
            {humansList.map(human=>{
                return(
                <HumansTable.btr key={human.humanApiId}>
                    <HumansTable.td fieldName={human.humanIndentification}/>
                    <HumansTable.td fieldName={human.humanName}/>
                    <HumansTable.td fieldNumber={human.humanAge}/>
                    <HumansTable.td fieldName={human.humanEmail}/>
                    <HumansTable.td fieldName={human.humanPhone}/>
                    <HumansTable.td fieldName={human.humanGender}/>
                    {human.humanLocation.map(location=>{
                     return (
                        <>
                        <HumansTable.td fieldName={location.humanCountry}/>
                        <HumansTable.td fieldName={location.humanState}/>
                        <HumansTable.td fieldName={location.humanStreetName}/>
                        <HumansTable.td fieldNumber={location.humanStreetNumber}/>
                        <HumansTable.td fieldName={location.humanPostalCode}/>
                        </>
                    )
                    })}
                    {human.humanLogin.map(login=>{
                     return (
                        <>
                        <HumansTable.td fieldName={login.humanUserName}/>
                        <HumansTable.td fieldName={login.humanPassword}/>
                        </>
                    )
                    })}
                </HumansTable.btr>
                )
            })}
            </HumansTable.body>
        </HumansTable.root>
            :
            <>
                <div className='flex flex-col items-center'>
                    <div className='animate-spin w-8 h-8 border-white border-2 rounded-full'></div>
                    <div className='text-white text-xl'>loading</div>
                </div>
            </> 
        }
        </>
        
    )
}
export default HumansTableComponent