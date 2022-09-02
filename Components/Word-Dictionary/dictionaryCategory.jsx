import React from 'react';
import './dictionary.css';
import { useEffect, useState } from 'react';

export default function DictionaryCategory(props) {

  const [list, setList] = useState([])

  const dataUrl = 'http://localhost:3000/words'

  let categoryData
  useEffect(() => {
    fetch(dataUrl)
    .then(response => response.json())
    .then(responseData => {
      categoryData = responseData.map(function(categoryList){
        if (categoryList.category === props.category){
          return(
            <div className='wordDiv' key={categoryList.id}>
              <div className="category"><div className="categoryType">{props.category}</div></div>
              <div className="kanji"><div className="kanjiDiv">{categoryList.kanjiWord}</div></div>
              <div className="katakanaWord">{categoryList.katakanaWord}</div>
              <div className="romanjiWord">{categoryList.romanjiWord}</div>
              <div className="englishWord">{categoryList.englishWord}</div>
            </div>
          )}
        else {
          console.log("nope")
        }
      })
      setList(categoryData);
      console.log(categoryData);
    })
  }, [])

  
  return (
    <div className='dictionary-category-div'>
      <div>{list}</div>
    </div>
  )
}
