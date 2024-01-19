import { childrenProps } from "@/types/default"

const HumanTableBodyTr:React.FC<childrenProps> = ({children})=>{
    return(
        <tr className='text-white'>{children}</tr>
    )
}
export default HumanTableBodyTr