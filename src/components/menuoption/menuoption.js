import "./menuoption.scss";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";

const MenuOption = () => {

    const menuCategory = ["Serif", "Sans Serif", "Display", "Handwriting", 'Monospace'];
    const menuLang = ['All languages', 'Arabic', 'Chinese (Hong Kong)', 'Gujarati', 'Korean', 'Telugu', 'Vietnamese'];

    const [isDown, setIsDown] = useState(true);
    const [isDownArrowLang, setIsDownArrowLang] = useState(true);
    const [isDownArrowStyle, setIsDownArrowStyle] = useState(true);

    const [isCatOpen, setIsCatOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(true);
    const [isStyleOpen, setIsStyleOpen] = useState(false);

    const [selectedLang, setSelectedLang] = useState('Language')

    const [isChecked, setIsChecked] = useState(false);
    const [styleNo, setIsStyleNo] = useState(8);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleScrollStyle = (event) => {
        setIsStyleNo(event.target.value)
        // const font = event.target.value;
        // setFontSize(font)
        // onFontChange(fontSize)
    }

    return (
        <div className="menuoption">
            <div className="dropdown-menu-option">
                <div className="menu-tab">

                    <div className="dropdown-option-btn dropdown-option-category"
                        onClick={() => {
                            setIsDown(!isDown)
                            setIsCatOpen(!isCatOpen)
                        }}>
                        <span className="dropdown-lbl">Categories</span>
                        {
                            isDown ? <span className="arrow-down"><RiArrowDownSFill /></span>
                                : <span className="arrow-down arrow-up"><RiArrowDownSFill /></span>
                        }
                    </div>


                    {isCatOpen && (
                        <div className="dropdown-content dropdown-category">
                            {menuCategory.map((item, index) => (
                                <div>
                                    <span></span>
                                    <p className="" onClick={
                                        () => {
                                            setIsCatOpen(!isCatOpen)
                                            setIsDown(!isDown)
                                        }
                                    } key={index} href="#">
                                        <span>{item}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                </div>







                <div className="menu-tab">

                    <div className="dropdown-option-btn dropdown-option-language"
                        onClick={() => {
                            setIsDownArrowLang(!isDownArrowLang)
                            setIsLangOpen(!isLangOpen)
                        }}
                    >
                        <span className="dropdown-lbl"> {selectedLang} </span>
                        {
                            isDownArrowLang ? <span className="arrow-down"><RiArrowDownSFill /></span>
                                : <span className="arrow-down arrow-up"><RiArrowDownSFill /></span>
                        }
                    </div>

                    {!isLangOpen && (
                        <div className="dropdown-content dropdown-lang">
                            {menuLang.map((item, index) => (
                                <p className="dropdown-content_item" onClick={
                                    () => {
                                        setIsLangOpen(!isCatOpen)
                                        setIsDownArrowLang(!isDownArrowLang)
                                        if (item === 'All languages') {
                                            item = 'Language'
                                        }
                                        setSelectedLang(item)
                                    }
                                } key={index} href="#">
                                    <span>{item}</span>
                                </p>
                            ))}
                        </div>
                    )}


                </div>








                <div className="menu-tab">
                    <div className="dropdown-option-btn dropdown-option-styles"
                        onClick={() => {
                            setIsDownArrowStyle(!isDownArrowStyle)
                            setIsStyleOpen(!isStyleOpen)
                        }}
                    >
                        <span className="dropdown-lbl">Number of styles</span>
                        {
                            isDownArrowStyle ? <span className="arrow-down"><RiArrowDownSFill /></span>
                                : <span className="arrow-down arrow-up"><RiArrowDownSFill /></span>
                        }
                    </div>

                    {
                        !isStyleOpen && (
                            <div className="dropdown-content dropdown-style">

                                <div className="number-of-style-box">
                                    <p>Number of styles</p>

                                    <div className="style-setting">
                                        <div className="style-setting-checkbox">
                                            <div className="checkbox-circle">
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={handleCheckboxChange}
                                                />
                                            </div>


                                            <div className="style-setting-slider slider center-item">
                                                <input type="range" min="0" max="18" value={styleNo} onChange={handleScrollStyle} />
                                            </div>

                                        </div>



                                        <span>All</span>
                                    </div>

                                    <button className="style-reset-btn" type="button">Reset</button>

                                    
                                </div>
                                
                                
                            </div>
                        )
                    }
                </div>

            </div>




            <div className="checkbox-menu-option">
                <div className="checkbox-option checkbox-option-variable">
                    <span>Show only variable fonts</span>
                    <span className="info-icon">
                        <AiOutlineInfoCircle />
                    </span>
                </div>

                <div className="checkbox-option checkbox-option-color-fonts">
                    <span>Show only color fonts</span>
                    <span className="info-icon">
                        <AiOutlineInfoCircle />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MenuOption;