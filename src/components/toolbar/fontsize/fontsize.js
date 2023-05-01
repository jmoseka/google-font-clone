import { useState } from "react";
import './fontsize.css'

const FontSize = (props)=> {
    const defaultFontsize = 40;

    const [fontSize, setFontSize] = useState(defaultFontsize)
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280];

    const handleScrollBarFont = (event) => {
        const font = event.target.value;
        setFontSize(font)
    }

    props.onFontChange(fontSize)

    return (
        <>
        <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>{fontSize}</button>
      {isOpen && (
        <div className="dropdown-content">
          {menuItems.map((item, index) => (
            <p key={index} href="#">{item}</p>
          ))}
        </div>
      )}
    </div>
        <input type="range" min="8" max="280" value={fontSize} onChange={handleScrollBarFont} />
        </>
    )
}

export default FontSize;