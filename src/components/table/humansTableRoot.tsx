import { childrenProps } from "@/types/default"
import React from "react"

const HumansTableRoot:React.FC<childrenProps> = ({children})=>{
    return(
        <table className=" border-collapse border border-slate-500 text-sm">{children}</table>
    )
}
export default HumansTableRoot