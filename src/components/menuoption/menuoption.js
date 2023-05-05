import "./menuoption.scss";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";

const MenuOption = () => {

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
                <div className="checkbox-option-variable">
                <span>Show only variable fonts</span>
                    <span className="info-icon">
                    <AiOutlineInfoCircle />
                    </span>
                </div>

                <div className="checkbox-option-color-fonts">
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