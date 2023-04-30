import { useState } from "react";

const FontSize = (props)=> {
    const defaultFontsize = 40;

    const [fontSize, setFontSize] = useState(defaultFontsize)
    const [selectedOption, setSelectedOption] = useState(40);
    const [isScrolled, setIsScrolled] = useState(false);
    const figures = [fontSize, 8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280];

    const handelMenuSelectionFont = (event)=> {
        setIsScrolled(false)
        const font = event.target.value;
        setSelectedOption(font)

        // CHANGE FONT BAR
        setFontSize(font)
    }

    const handleScrollBarFont = (event) => {
        setIsScrolled(true);
        const font = event.target.value;
        setSelectedOption(font)
        setFontSize(font)
        console.log(selectedOption);
        // console.log(selectedOption);
    }

    const handleMenuClicked = () => {
        setIsScrolled(false)
        figures.map((figure) => {
            return <option key={`${figure}`} value={`${figure}`}>
                {figure}</option>
        })
    }

    return (
        <>
        <select value={selectedOption} onChange={handelMenuSelectionFont} onClick={handleMenuClicked}>
            {
                isScrolled===false? 
                figures.map((figure) => {
                    return <option key={`${figure}`} value={`${figure}`}>
                        {figure}</option>
                })

                :
                <option key={`${selectedOption}`} value={`${selectedOption}`}>
                        {selectedOption}</option>

            }

{/* <option key={`${selectedOption}`} value={`${selectedOption}`}>
                        {selectedOption}</option> */}
      </select>
        <input type="range" min="8" max="280" value={fontSize} onChange={handleScrollBarFont} />
        </>
    )
}

export default FontSize;