import { useState } from "react";
import './fontsettingsize.scss'
import { RiArrowDownSFill, RiArrowDropUpFill } from "react-icons/ri";
import { GrPowerReset } from "react-icons/gr";

const FontSize = ({onFontChange}) => {
  const defaultFontsize = 40;
  const [isDown, setIsDown] = useState(true);

  const [fontSize, setFontSize] = useState(defaultFontsize);
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280];

  const handleScrollBarFont = (event) => {
    const font = event.target.value;
    setFontSize(font)
    onFontChange(fontSize)
  }
  
  //onFontChange(fontSize)

  return (
    <>
      <div className="dropdown">
        <button className="toolbar-btn" onClick={() =>  
          {setIsOpen(!isOpen)
          setIsDown(!isDown)
          }
          }>
          <span className="toolbar-lbl">{`${fontSize}px`}</span>
          {
            isDown ? <span className="arrow-down"><RiArrowDownSFill /></span> 
            : <span className="arrow-down arrow-up"><RiArrowDownSFill /></span>
          }
          
        </button>
        {isOpen && (
          <div className="dropdown-content">
            {menuItems.map((item, index) => (
              <p className="dropdown-content_item center-item" onClick={
                ()=>{
                  setFontSize(item)
                  onFontChange(fontSize)
                }
              } key={index} href="#">
                <span>{item}</span>
              </p>
            ))}
          </div>
        )}

      </div>
      <div className="fontsize-slider">
        <input type="range" min="8" max="280" value={fontSize} onChange={handleScrollBarFont} />
      </div>

      <button className="reset-btn center-item" type="button">
        <div className="reset-btn_container center-item">
          <GrPowerReset />
        </div>
      </button>
    </>
  )
}

export default FontSize;