import './fontcard.css'

function FontCard({fontsdata, fontText, fontSize}) {
    const {fontowner, fontfamily, fontname} = fontsdata;

    return (
        <div className="font-card">
            <h2 className="font-name">{fontname}</h2>
            <p className="font-owner">{fontowner}</p>
            <p className="font-text" style={{ fontSize: `${fontSize}px`,
            fontFamily: `'${fontname}', ${fontfamily}`
        }}>
                {fontText}</p>
        </div>
    )
}

export default FontCard