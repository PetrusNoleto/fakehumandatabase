"use client"
import { flags } from "@/data/flags"
import { childrenProps, flagMenuItemProps, flagProps } from "@/types/default"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react"


const FlagMenuItemComponent:React.FC<flagMenuItemProps> = ({menuItemHref,menuItemImageAddress,menuItemImageAltText,menuItemName})=>{
    return(
        <div className="relative flex ">
            <Link href={menuItemHref}  className="group flex gap-1 border-2 border-[#2a2a2a] hover:border-[#FF5C00] duration-300 items-center text-white text-sm p-3 rounded-lg w-[180px]">
                <Image alt={menuItemImageAltText} src={menuItemImageAddress} width={48} height={48} className="p-1"/>
                <h4 className="text-white group-hover:text-[#FF5C00] duration-300">{menuItemName}</h4>
            </Link>
        </div>
    ) 
}

const FlagMenuComponent:React.FC<childrenProps> = ({children})=>{
    return(
        <li className="relative flex "> 
            {children}
        </li>
    )
}


const FlagComponent = ()=>{
    
    const [flagsdata,setFlagsData] = useState<flagProps[] | []>([])
    const [activeMenu, setActiveMenu] = useState(false)

    const activateMenu = ()=>{
        if(!activeMenu){
            setActiveMenu(true)
        }
    }
    const inactiveMenu = ()=>{
        if(activeMenu){
            setActiveMenu(false)
        }
    }
    const OpenFlagMenu = ()=>{
        return(
            <button className="relative border-2 w-auto h-[40px] leading-10 px-3 rounded-lg text-center"  onClick={activateMenu} >
                {/* <Image alt={"allnations"} src={'/flags/onu.svg'} width={48} height={48} className="p-1"/>   */}
                <h4 className="text-white text-sm">nations</h4>
            </button>
        )
    }



    useEffect(()=>{
            setFlagsData(flags)
    },[flagsdata])
    
    return(
        <ul className="">
          <FlagMenuComponent>  
               {!activeMenu  ?
                    <div className="flex p-3">
                        <OpenFlagMenu  />
                    </div>
                :
                    <div className="flex flex-wrap gap-3 absolute -top-8 right-2 bg-[#2a2a2a] p-3 w-[420px] rounded-lg justify-between">
                        <h3 className="text-white text-center w-full">nations</h3>
                        {flagsdata.map(menuflag => {
                            return(<FlagMenuItemComponent key={menuflag.flagId} menuItemName={menuflag.flagName} menuItemHref={menuflag.flagHref} menuItemImageAddress={menuflag.flagAdreess} menuItemImageAltText={""}/>)
                        })}
                        <button onClick={inactiveMenu} className="text-white text-center w-full">close</button>
                    </div>
               }   
          </FlagMenuComponent>
        </ul>
    )
}


export default FlagComponent