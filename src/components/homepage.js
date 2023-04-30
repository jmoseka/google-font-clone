import FontCard from "./card/fontcard"
import './toolbar/toolbar.css'
import './homepage.css'
import { useEffect, useState } from "react"

function Homepage() {
    const defaultSentence = 'Whereas recognition of the inherit dignity';
    const [sentence, setSentence] = useState(defaultSentence);
    function handleSentence(event) {
        setSentence(event.target.value)
    }

    useEffect(()=> {
        if (sentence === '') {
            setSentence(defaultSentence)
        }
    })

    return(
        <div className="homepage">
            <div className="toolbar">
            <div className="toolbar-search">
                <h2>Search fonts</h2>
            </div>
            <div className="toolbar-font-setting">
                <input className='setting-text' typeof="text" placeholder="Type something"
                onChange={handleSentence}
                />
                <h2 className='setting-size' font>Font size</h2>
            </div>

        </div>

            <FontCard fontText={sentence} />
        </div>
    )
}

export default Homepage