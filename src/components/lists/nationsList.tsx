"use client"

import { flags } from "@/data/flags"
import { getNationPopulation } from "@/funtions/getNationPopulation"
import Image from "next/image"
import Link from "next/link"

const NationsList = ()=>{
    const nationsList = flags

    const getPopulation = async(nationAbrev:string)=> {
        const population = await getNationPopulation(nationAbrev) 
        return population
  }
    return(
        <>
        <div className='text-center text-2xl text-[#c9c9c9] uppercase font-bold p-6'>nations <span className='text-sm'>&#10088;{nationsList.length}&#10089;</span></div>   
        <ul className='grid grid-cols-5 justify-between gap-3 p-6'>
            {nationsList.map((nation)=>{
            return(  
                <li key={nation.flagId} className='bg-[#141414] p-3 rounded-lg border border-[#c9c9c9]'>
                    <Link href={nation.flagHref} className=''>
                    <div className='flex relative w-[320px] h-[220px]  justify-center mb-3 '>
                    <Image src ={nation.flagAdreess} alt='' className='flex' fill={true} />
                    </div> 
                    <p className='text-white'>nation: {nation.flagName}</p>
                    <span className='text-[#c9c9c9]'>population: {getPopulation(nation.flagAbreviation)}</span>
                    </Link>
                </li>  
                )
                })} 
        </ul> 
        </>
       
    )
}
export default NationsList