import React from 'react';
import './Header.css';
import logo from './../../src/brunoflix-logo.png'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={logo}/>
                </a>
            </div>
            
            <h4>Inicio</h4>
            <h4>Filmes</h4>
            <h4>Séries</h4>
            <h4>Bombando</h4>
            <h4>Minha Lista</h4>
                
            <div className="header--user">
                <a>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                </a>
            </div>

        </header>
    );
}