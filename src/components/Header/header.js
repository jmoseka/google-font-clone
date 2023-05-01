import './header.scss'

const Header = () => {

    return (
        <header className="header-container">
            <div className='header-content'>
                <div className='header-logo'>
                    <h1>Google Fonts</h1>
                </div>

                <div className='header-menu'>
                    <ul className='header-menu_nav'>
                    <li className='center-item'>Fonts</li>
                    <li className='center-item'>Icons</li>
                    <li className='center-item'>Knowledge</li>
                    <li className='center-item'>FAQ</li>
                    </ul>

                <div className='header-menu_icons'>
                    <span>menu bar</span>
                    <span>switch theme</span>
                    <span>selected families</span>
                </div>

                </div>
            </div>

        </header>
    )
}

export default Header;