import React from 'react';
import './Footer.css';
import facebook from './../../src/FB_icon-icons.com_65484.png'
import instagram from './../../src/instagram_f_icon-icons.com_65485.png'
import twitter from './../../src/twitter-3_icon-icons.com_50735.png'
import youtube from './../../src/YOUTUBE_icon-icons.com_65487.png'

export default () => {
    return (
        <footer className="footer">
            <div className="footer--redes">
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={twitter}/>
                <img src={youtube}/>
            </div>
            <div className="footer--criador">
                Criado por <strong><a href="https://github.com/CBrunoSantos">github.com/CBrunoSantos</a> 🖤</strong> 
            </div>            
            <div className="footer--criador">
                © 2022-2022 Brunoflix, Inc.   
            </div>
        </footer>
    );
}