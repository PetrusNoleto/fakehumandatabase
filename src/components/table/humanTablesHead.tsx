import { childrenProps } from "@/types/default"
import React from "react"



const HumansTableHead :React.FC<childrenProps> = ({children})=>{
    return(
        <thead className='bg-[#141414]'>{children}</thead>
    )
}
export default HumansTableHead