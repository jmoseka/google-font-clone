import './fontcard.css'

function FontCard({fontText, fontSize}) {
    console.log(fontText);
    return (
        <div className="font-card">
            <h2 className="font-name">San serif</h2>
            <p className="font-owner">Christian rovbertson</p>
            <p className="font-text" style={{ fontSize: `${fontSize}px` }}>{fontText}</p>
        </div>
    )
}

export default FontCard