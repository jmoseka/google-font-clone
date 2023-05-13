import "./menuoption.scss";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";

const MenuOption = () => {

    const menuCategory = ["Serif", "Sans Serif", "Display", "Handwriting", 'Monospace'];
    const menuLang = ['All languages', 'Arabic', 'Chinese (Hong Kong)', 'Gujarati', 'Korean', 'Telugu', 'Vietnamese'];


    return (
        <div className="menuoption">
            <div className="dropdown-menu-option">
                <div className="dropdown-option dropdown-option-category">
                    <span className="dropdown-lbl">Categories</span>
                    <span className="arrow-down">
                        <RiArrowDownSFill />
                    </span>
                </div>

                <div className="dropdown-option dropdown-option-language">
                    <span className="dropdown-lbl"> Arabic</span>
                    <span className="arrow-down">
                        <RiArrowDownSFill />
                    </span>
                </div>

                <div className="dropdown-option dropdown-option-styles">
                    <span className="dropdown-lbl">Number of styles</span>
                    <span className="arrow-down">
                        <RiArrowDownSFill />
                    </span>
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