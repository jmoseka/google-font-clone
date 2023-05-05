import './toolbar.scss'

function Toolbar() {

    return (

        <div className="toolbar">

            {/* search fonts */}
            <div className="toolbar-search-font">
                <AiOutlineSearch />
                <input type="text" placeholder="Search fonts" />
            </div>

            {/* font settings */}
            <div className="toolbar-text">

                <button className="sentence">Sentence</button>
                <RiArrowDownSFill />
                <input className='setting-text' typeof="text" placeholder="Type something"
                    onChange={handleSentence}
                />

                <div className="toolbar-setting-size">
                    <FontSize onFontChange={handleFontChange} />
                </div>
            </div>
        </div>
    )
}

export default Toolbar;