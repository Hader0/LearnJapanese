import React from 'react';
import './errorPage.css';
import errorImg from './chibiError.png';

export default function ErrorPage() {
  return (
    <div className='error-div'>
        <img src={errorImg} alt="Chibi Error"/>
        <h2>Sorry, page not found...</h2>
    </div>
  )
}