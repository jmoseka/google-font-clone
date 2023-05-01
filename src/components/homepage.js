import FontCard from "./card/fontcard"
import './toolbar/toolbar.css'
import './homepage.css'
import { useEffect, useState } from "react"
import FontSize from "./toolbar/fontsize/fontsize";
import fontsData from './data.js';

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
    }, [sentence])


    const [fontPX, setFontPX] = useState(40);
    function handleFontChange(newData) {
        setFontPX(newData);
      }

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

                <div className="setting-size">
                    <FontSize onFontChange={handleFontChange} />
                </div>
                
            </div>

        </div>

        {
            fontsData.map((data) => {
                return <FontCard key={data.id} fontText={sentence} fontSize={fontPX} fontsdata={data} />
            })
        }

        </div>
    )
}

export default Homepage