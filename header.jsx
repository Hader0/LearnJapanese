import React from 'react';
import './index.css';

const Header = () => {
    return (
        <header>
            <div>Japanese Learning</div>
            <ul>
                <li><a href='http://localhost:3001/'>Home</a></li>
                <li>Words</li>
                <li><a href='http://localhost:3001/blog'>Blog</a></li>
            </ul>
        </header>
    );
}

export default Header;

