import './fontcard.css'

function FontCard({fontText}) {
    console.log(fontText);
    return (
        <div className="font-card">
            <h2 className="font-name">San serif</h2>
            <p className="font-owner">Christian rovbertson</p>
            <p className="font-text">{fontText}</p>
        </div>
    )
}

export default FontCard