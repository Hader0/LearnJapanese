import React, { useState } from 'react'
import DictionaryCategory from './dictionaryCategory';
import './dictionary.css';

export default function Dictionary() {
    const [kanji, setKanji] = useState('');
    const [katakana, setkatakana] = useState('');
    const [romanji, setRomanji] = useState('');
    const [english, setEnglish] = useState('');
    const [select, setSelect] = useState(null);

    const [categoryDisplay, setCategoryDisplay] = useState(false)
    const [category, setCategory] = useState('')

    /* Functions */
    const handleKanji = e => {
        setKanji(e.target.value);
    }

    const handlekatakana = e => {
        setkatakana(e.target.value);
    }

    const handleRomanji = e => {
        setRomanji(e.target.value);
    }

    const handleEnglish = e => {
        setEnglish(e.target.value);
    }

    const handleSelect = e => {
        setSelect(e.target.value);
    }

    /* Storing Words */

    const handleSubmit = (e) => {
        e.preventDefault();


        const words = {kanjiWord: kanji, katakanaWord: katakana, romanjiWord: romanji, englishWord: english, category: select};

        fetch('http://localhost:3000/words', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(words)
        }).then(() => {
            console.log()
        })

    }


    return (
        <div className="dictionary-div">
            <div className="dictionary-add">
                <h2 className="da-title">Add Words to Categories!</h2>
                <input onChange={handleKanji} value={kanji} type="text" className='kanji-input da-input' placeholder='Kanji' />
                <input onChange={handlekatakana} value={katakana} type="text" className="katakana-input da-input" placeholder='Katakana' />
                <input onChange={handleRomanji} value={romanji} type="text" className="romanji-input da-input" placeholder='Romanji' />
                <input onChange={handleEnglish} value={english} type="text" className="english da-input" placeholder='English' />
                <select onChange={handleSelect} className="da-select">
                    <option value="colours">Colours</option>
                    <option value="numbers">Numbers</option>
                    <option value="days">Days</option>
                    <option value="animals">Animals</option>
                    <option value="weather">Weather</option>
                    <option value="greetings">Greetings</option>
                </select>
                <button className="da-button" onClick={handleSubmit}>Add</button>
            </div>
        


        <div className="category-div-container">
            <div onClick={() => {setCategoryDisplay(true); setCategory('greetings'); console.log(category)}} className='category-div'>Greetings</div>
            <div onClick={() => {setCategoryDisplay(true); setCategory('weather'); console.log(category)}} className='category-div'>Weather</div>
            <div onClick={() => {setCategoryDisplay(true); setCategory('weather'); console.log(category)}} className='category-div'>Colours</div>
            <div onClick={() => {setCategoryDisplay(true); setCategory('weather'); console.log(category)}} className='category-div'>Days</div>
            <div onClick={() => {setCategoryDisplay(true); setCategory('weather'); console.log(category)}} className='category-div'>Animals</div>
            <div onClick={() => {setCategoryDisplay(true); setCategory('weather'); console.log(category)}} className='category-div'>JLPT N5</div>
            <div onClick={() => {setCategoryDisplay(true); setCategory('weather'); console.log(category)}} className='category-div'>JLPT N4</div>
            <div onClick={() => {setCategoryDisplay(true); setCategory('weather'); console.log(category)}} className='category-div'>JLPT N3</div>
            <div onClick={() => {setCategoryDisplay(true); setCategory('weather'); console.log(category)}} className='category-div'>JLPT N2</div>
            <div onClick={() => {setCategoryDisplay(true); setCategory('weather'); console.log(category)}} className='category-div'>JLPT N1</div>
        </div>

        

        {categoryDisplay && <DictionaryCategory category={category}  />}
        {!categoryDisplay && <div></div>}
    </div>
        
    )
}