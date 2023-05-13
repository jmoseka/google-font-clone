import FontCard from "./card/fontcard";
import './homepage.scss';
import "./toolbar/toolbar.scss";
import "./toolbar/searchfont.scss";
import "./toolbar/toolbar-font-group.scss";
import "./toolbar/fontsentence.scss";
import "./utility/dropdown.scss";
import { useEffect, useState } from "react";
import FontSize from "./toolbar/fontsize/fontsize";
import fontsData from './data.js';
import Header from "./Header/header";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";
import MenuOption from "./menuoption/menuoption";


function Homepage() {
    const defaultSentence = 'Whereas recognition of the inherit dignity';
    const defaultParagraph = 'No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.';
    // const [sentence, setSentence] = useState(defaultSentence);
    const [fontPX, setFontPX] = useState(30);
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = ["Custom", "Sentence", "Paragraph"];
    const [preview, setPreview] = useState(defaultSentence);
    const [isCustom, setIsCustom] = useState(false);
    const [prevCategory, setPrevCategory] = useState('Sentence');

    function handleSentence(event) {
        setPreview(event.target.value)

        if (prevCategory === 'Custom') {
            setIsCustom(false)
        }
    }

    function handleFontChange(newData) {
        setFontPX(newData);
   
    }

    const handlePreview = (item) => {
        setPrevCategory(item);
        const text = item.toLowerCase();

        if (text === 'custom') {
            setIsCustom(true);
            setPreview('');
        }

        else if (text === 'sentence') {
            setPreview(defaultSentence);
        }

        else if (text === 'paragraph') {
            setPreview(defaultParagraph);
            setFontPX(18)
            handleFontChange(fontPX)
        }
        setIsOpen(!isOpen);
    }

    useEffect(() => {

        if (preview === ''  && !isCustom) {
            setPreview(defaultSentence)
        }

    }, [preview, isCustom])


    return (
        <div className="main light-theme">
            <Header />
            <div className="homepage">
                <div className="toolbar">

                    {/* search fonts */}
                    <div className="toolbar-search-font toolbar-item-input">
                        <div className="search-icon toolbar-icon"><AiOutlineSearch /></div>
                        <input className="search-input toolbar-input" type="text" placeholder="Search fonts" />
                    </div>

                    {/* font settings */}
                    <div className="toolbar-font-group">

                        {/* font type sentence */}
                        <div className="toolbar-item-input font-sentence">
                            <button onClick={
                                () => setIsOpen(!isOpen)
                            } className="toolbar-btn btn-sentence">
                                <span className="toolbar-lbl">{prevCategory}</span>
                                <span className="arrow-down"><RiArrowDownSFill /></span>
                            </button>

                            {isOpen && (
                                <div className="dropdown-content dropdown-sentence">
                                    {menuItems.map((item, index) => (
                                        <p className="dropdown-content_item"
                                        onClick={
                                            () => {
                                                handlePreview(item)
                                            }
                                        }
                                            key={index} href="#">
                                            <span >{item}</span>
                                        </p>
                                    ))}
                                </div>
                            )}


                            <input className='setting-text toolbar-input' typeof="text" placeholder="Type something"
                                onChange={handleSentence}
                            />
                        </div>

                        {/* font setting size */}
                        <div className="font-setting-size">
                            <FontSize onFontChange={handleFontChange} />
                        </div>

                    </div>

                </div>

                <MenuOption />

                <div className="fontcard-container">
                    {
                        fontsData.map((data) => {
                            return <FontCard key={data.id} fontText={preview} fontSize={fontPX} fontsdata={data} />
                        })
                    }

                </div>


            </div>
        </div>
    )
}

export default Homepage