import FontCard from "./card/fontcard"
import './toolbar.scss'
import './homepage.scss'
import { useEffect, useState } from "react"
import FontSize from "./toolbar/fontsize/fontsize";
import fontsData from './data.js';
import Header from "./Header/header";

function Homepage() {
    const defaultSentence = 'Whereas recognition of the inherit dignity';
    const [sentence, setSentence] = useState(defaultSentence);
    const [fontPX, setFontPX] = useState(40);

    function handleSentence(event) {
        setSentence(event.target.value)
    }

    function handleFontChange(newData) {
        setFontPX(newData);
      }

    useEffect(()=> {
        if (sentence === '') {
            setSentence(defaultSentence)
        }
    }, [sentence])

    return(
        <div className="main light-theme">
            <Header />
            <div className="homepage">
                <div className="toolbar-menu">
                    {/* search fonts */}
                    <div className="toolbar-search">
                        <h2>Search fonts</h2>
                    </div>
                    
                    {/* font settings */}
                    <div className="toolbar-font-setting">
                        <input className='setting-text' typeof="text" placeholder="Type something"
                        onChange={handleSentence}
                        />
                        
                    <div className="setting-size">
                        <FontSize onFontChange={handleFontChange} />
                        </div>
                
                </div>

        </div>

        <div className="fontcard-container">
        {
            fontsData.map((data) => {
                return <FontCard key={data.id} fontText={sentence} fontSize={fontPX} fontsdata={data} />
            })
        }

        </div>
        
        
        </div>
        </div>
    )
}

export default Homepage