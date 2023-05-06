import './fontcard.scss'

function FontCard({fontsdata, fontText, fontSize}) {
    const {fontowner, fontfamily, fontname} = fontsdata;

    return (
            <div className="font-card">
            <h2 className="font-card_name">{fontname}</h2>
            <p className="font-card_owner">{fontowner}</p>
            <p className="font-card_text" style={{ fontSize: `${fontSize}px`,
            fontFamily: `'${fontname}', ${fontfamily}`
        }}>
                {fontText}</p>
        </div>
    )
}

export default FontCard