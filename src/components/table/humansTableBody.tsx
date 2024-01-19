import { childrenProps } from "@/types/default"

const HumansTableBody:React.FC<childrenProps> = ({children})=>{
    return(
        <tbody>{children}</tbody>
    )
}
export default HumansTableBody