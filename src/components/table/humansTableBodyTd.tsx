import React from "react"

interface tableBodyTdProps{
    fieldName?:string
    fieldNumber?:number
}


const HumansTableBodyTd:React.FC<tableBodyTdProps> = ({fieldName , fieldNumber})=>{
    const setContent = [{fieldName}, {fieldNumber}] 
    const getContent = setContent.find((field) => field.fieldName !==undefined || field.fieldNumber !== undefined) as {}
    const content = Object.values(getContent)[0] as string
    return <td className='border border-slate-500 p-3'>{content}</td> 
}
export default HumansTableBodyTd