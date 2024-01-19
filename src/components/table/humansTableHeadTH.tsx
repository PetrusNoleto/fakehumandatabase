import React from "react"

interface tableHeadThProps{
    fieldName:string
}


const HumansTableHeadTh :React.FC<tableHeadThProps> = ({fieldName})=>{
    return(
        <th className='border-x border-x-slate-500 p-3 text-[#c9c9c9] font-normal'>{fieldName}</th>
    )
}
export default HumansTableHeadTh