"use client"
import { flags } from "@/data/flags";
import { usePathname } from "next/navigation";

import { flagProps } from "@/types/default";
import Image from "next/image"
import { useEffect, useState } from "react";

const FlagPageComponent = ()=>{
    const path = usePathname().split("/")
    const nationAbreviation = path.pop() || path.pop() as string;
    const locaNationsList = flags as flagProps[]
    const getFlag = locaNationsList.find(flag => flag.flagAbreviation === nationAbreviation)
    const [nationFlagName, setNationFlagName] = useState("")
    const [nationFlagImage,setNationFlagImage] = useState("")
    const setPageFlag = ()=>{
        if(getFlag !== undefined && getFlag !== null){
          setNationFlagName(getFlag.flagName)
          setNationFlagImage(getFlag.flagAdreess)
        }
      }
      useEffect(()=>{   
        setPageFlag()
      },[nationAbreviation,setPageFlag])
    return(
        <>
        <div className='p-3 flex justify-center items-center flex-col gap-3'>
            <div>
                <Image src={nationFlagImage} alt='' width={200} height={200}/>
            </div>
            <div className='text-[#c9c9c9] text-3xl'>
                <h1 className='text-white'>{nationFlagName}</h1>
            </div>
      </div>
        </>
    )
}
export default FlagPageComponent