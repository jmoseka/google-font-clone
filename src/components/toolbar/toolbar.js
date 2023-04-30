import './toolbar.css'

function Toolbar() {

    return(
        <div className="toolbar">
            <div className="toolbar-search">
                <h2>Search fonts</h2>
            </div>
            <div className="toolbar-font-setting">
                <input className='setting-text' typeof="text" placeholder="Type something" />
                <h2 className='setting-size' font>Font size</h2>
            </div>

        </div>
    )
}

export default Toolbar