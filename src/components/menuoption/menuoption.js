import "./menuoption.scss";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

const MenuOption = () => {
    const defaultStyle = 8;

    const menuCategory = ["Serif", "Sans Serif", "Display", "Handwriting", 'Monospace'];
    const menuLang = ['All languages', 'Arabic', 'Chinese (Hong Kong)', 'Gujarati', 'Korean', 'Telugu', 'Vietnamese'];
    const styleReset = 'style-reset';
    const [isDown, setIsDown] = useState(true);
    const [isDownArrowLang, setIsDownArrowLang] = useState(true);
    const [isDownArrowStyle, setIsDownArrowStyle] = useState(true);

    const [isCatOpen, setIsCatOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(true);
    const [isStyleOpen, setIsStyleOpen] = useState(false);

    const [selectedLang, setSelectedLang] = useState('Language')

    const [isChecked, setIsChecked] = useState(false);
    const [styleNo, setIsStyleNo] = useState(0);

    const [activeMenuTab, setActiveMenuTab] = useState(0);


    useEffect(() => {
        // If ischecked == false
        if (!isChecked) {
            setIsStyleNo(defaultStyle)
        }

        else {
            setIsStyleNo(0)
        }

        console.log(activeMenuTab, 'useeffect');
        if(activeMenuTab > 0) {
            const menuTab = document.querySelectorAll('.menu-tab');
            menuTab.forEach((item) => {
                const child = item.children;
                console.log(child)

                // if(child[0].hasAttribute('dropdown-option-category')){
                //     console.log(child);
                // }
            })
           

        }

    }, [isChecked,activeMenuTab])

    


    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    // const trackStyle = {
    //     // '--progress': `${(styleNo / 18) * 100}%`,
    //     background: `linear-gradient(to right, #c84139 ${(styleNo / 18) * 100}%, #000 ${(styleNo / 18) * 100}%)`,
    // };

    const handleScrollStyle = (event) => {
        const number = event.target.value;
        setIsStyleNo(number);

        // const font = event.target.value;
        // setFontSize(font)
        // onFontChange(fontSize)
    }

    const handleCheckBox = () => {
        setIsChecked(!isChecked)
    }



    const handleStyleReset = () => {
        // setDefaultReset(true);
        return styleReset;
    }

    


    return (
        <div className="menuoption">
            <div className="dropdown-menu-option">
                <div className="menu-tab">

                    <div className="dropdown-option-btn dropdown-option-category dropdown-option-active"
                        onClick={() => {
                            setActiveMenuTab(1)
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
                                <div key={index}>
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

                    <div className="dropdown-option-btn dropdown-option-language dropdown-option-active"
                        onClick={() => {
                            setActiveMenuTab(2)
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


                <div className="menu-tab" >
                    <div
                     className={`dropdown-option-btn dropdown-option-styles 
                     `}
                        onClick={() => {
                            setActiveMenuTab(3)
                            setIsDownArrowStyle(!isDownArrowStyle)
                            setIsStyleOpen(!isStyleOpen)
                        }}
                    >
                        <span className="dropdown-lbl">
                            Number of styles {!isChecked ? null :
                                (
                                    <span className="style-no-update">
                                        ({styleNo < 1 ? '1' : styleNo}
                                        <span className="plus">+</span>)
                                    </span>
                                )}
                        </span>
                        {
                            isDownArrowStyle ? <span className="arrow-down"><RiArrowDownSFill /></span>
                                : <span className="arrow-down arrow-up"><RiArrowDownSFill /></span>
                        }
                    </div>

                    {
                        isStyleOpen && (
                            <div className={`dropdown-content dropdown-style 
                            ${isChecked ? '' : handleStyleReset()}`}>



                                <div className="number-of-style-box">
                                    <p>Number of styles</p>

                                    <div className="style-setting ">
                                        <div className="checkbox-slider-group">
                                            <div className="checkbox-circle center-item" >
                                                <div className="checkbox">
                                                <input
                                                    
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onClick={handleCheckBox}
                                                    onChange={handleCheckboxChange}
                                                />
                                                    </div>
                                            </div>


                                            <div className=" slider slider-style center-item">
                                                <input type="range" min="0" max="18" value={styleNo} onChange={handleScrollStyle}
                                                />

                                            </div>
                                        </div>



                                        <span className="style-no-update">
                                            {
                                                styleNo > 0 ? <span>{styleNo}
                                                    <span className="plus">+</span> </span>
                                                    :
                                                    'All'
                                            }
                                        </span>
                                    </div>

                                    <button className="style-reset-btn" type="button"
                                    onClick={() => setIsChecked(!isChecked)}
                                    >Reset</button>


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