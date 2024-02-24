import React, { Component } from "react";
import logo from './../../assets/images/logo.png';
import facebookIcon from './../../assets/images/social-icon/facebook.svg';
import instaicon from './../../assets/images/social-icon/instagram.svg';
import twittericon from './../../assets/images/social-icon/twitter.svg';
import './FooterModule.scss';

class Footer extends Component {
    render() { 
        let url="";
        return (
            <footer className='footer'>
                <div className='footer-left'>
                    <nav className="footer-nav">
                        <ul>
                            <li><a href={url}>Contact</a></li>
                            <li><a href={url}>FAQ's</a></li>
                            <li><a href={url}>Privacy Policy</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='footer-middle'>
                    <a href={url}><img className="logo" src={logo} alt="" /></a>
                </div>
                <div className='footer-right'>
                    <ul className="s-icon">
                        <li>
                            <a href={url}><img className="logo" src={facebookIcon} alt="" /></a>
                        </li>
                        <li>
                            <a href={url}><img className="logo" src={twittericon} alt="" /></a>
                        </li>
                        <li>
                            <a href={url}><img className="logo" src={instaicon} alt="" /></a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
};

export default Footer;
