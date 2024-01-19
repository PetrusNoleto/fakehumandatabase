import FlagComponent from "../flags/flag"
import { Header } from "./Header"

const HeaderComponent = ()=>{
    return(
        <Header.root>
            <Header.brand siteName={`fakehumandatabase`} />
            <div className="flex">
                <Header.links/>
                <FlagComponent/>
            </div>
        </Header.root>
    )
}
export default HeaderComponent