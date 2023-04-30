import FontCard from "./card/fontcard"
import Toolbar from "./toolbar/toolbar"
import './homepage.css'

function Homepage() {

    return(
        <div className="homepage">
            <Toolbar />
            <FontCard />
        </div>
    )
}

export default Homepage