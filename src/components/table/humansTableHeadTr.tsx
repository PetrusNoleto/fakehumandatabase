import { childrenProps } from "@/types/default"

const HumanTableHeadTr:React.FC<childrenProps> = ({children})=>{
    return(
        <tr className='text-sm'>{children}</tr>
    )
}
export default HumanTableHeadTr