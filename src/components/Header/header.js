import './header.scss'
import { FaEllipsisV } from 'react-icons/fa';
import { GiMoon } from 'react-icons/gi';
import { TfiLayoutGrid2Alt } from 'react-icons/tfi';

const Header = () => {

    return (
        <header className="header-container">
            <div className='header-content'>
                <div className='header-logo'>
                    <h1>Google Fonts</h1>
                </div>

                <div className='header-menu'>
                    <ul className='header-menu_nav'>
                    <li className='center-item active-nav-link'>Fonts</li>
                    <li className='center-item nav-link'>Icons</li>
                    <li className='center-item nav-link'>Knowledge</li>
                    <li className='center-item nav-link'>FAQ</li>
                    </ul>
                    
                    <div className='header-menu_icons'>
                        <span className='header-menu_icons-ellipsis center-item'>
                            <FaEllipsisV />
                            </span>
                    
                        <span className='header-menu_icons-themeSetting center-item'><GiMoon /></span>
                        <span className='header-menu_icons-selectedFam center-item'><TfiLayoutGrid2Alt /></span>
                    </div>

                </div>
            </div>

        </header>
    )
}

export default Header;