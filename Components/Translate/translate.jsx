import React from 'react';
import './translate.css';
import { useState, useEffect } from 'react';
const axios = require('axios').default;

const Translate = () => {
    const [options, setOptions] = useState([]);
    const [to, setTo] = useState('en');
    const [from, setFrom] = useState('en');
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const translate = () => {

        const params = new URLSearchParams();
        params.append('q', input);
        params.append('source', from);
        params.append('target', to);
        params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

        axios.post('https://libretranslate.de/translate', params, {
             headers: { 
                'accept': 'application/json', 
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(res=>{
            console.log(res.data);
            setOutput(res.data.translatedText)
        }) 
        }

        useEffect(() => {
            axios.get("https://libretranslate.de/languages",
                { headers: { "accept": "application/json" } }).then(res => {
                    console.log(res.data);
                    setOptions(res.data);
                })
        });

    // curl -X GET "https://libretranslate.de/languages" -H "accept: application/json"

    return (
        <div className='bg-div'>
            <div className='translate-div'>
                <div className="text">
                    <textarea onInput={(e) => setInput(e.target.value)} cols="30" rows="10" className='text-1' placeholder='Type some text!'></textarea>
                    <textarea value={output} cols="30" rows="10" className='text-2'></textarea>
                </div>
                <div className="select">
                    <select onChange={e => setFrom(e.target.value)} className='select-1'>
                        {options.map(opt => <option key={opt.code} value={opt.code}>{opt.name}</option>)}
                    </select>
                    <select onChange={e => setTo(e.target.value)} className='select-2'>
                        {options.map(opt => <option key={opt.code} value={opt.code}>{opt.name}</option>)}
                    </select>
                </div>
                <div className="button">
                    <button onClick={e=>translate()}>Translate</button>
                </div>
            </div>
            <div className='dictionaryButton-div'>
                <button className='dictionaryButton'><a href='http://localhost:3001/dictionary'>Go to Dictionary!</a></button>
            </div>
        </div>
            
    );
}


export default Translate;