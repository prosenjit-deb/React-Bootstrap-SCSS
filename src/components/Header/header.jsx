import React, { Component } from "react";
import userIcon from './../../assets/images/header/celebrities.svg';
import favouriteIcon from './../../assets/images/header/favorite.svg';
import foundationIcon from './../../assets/images/header/Foundation.svg';
import homeIcon from './../../assets/images/header/home.svg';
import shopIcon from './../../assets/images/header/shop.svg';
import shoppingBag from './../../assets/images/header/shopping--bag.svg';
import tokenIcon from './../../assets/images/header/Token.svg';
import logo from './../../assets/images/logo.png';
import SearchInput from './../SearchInput/SearchInput';
import './HeaderModule.scss';

class Header extends Component {
  render() {
    let url="";
  return (
    <header className="header">
      <div className="header-left">
        <a href={url}><img className="logo" src={logo} alt="" /></a>
      </div>
      <div className="header-middle">
        <nav className="header-middle-nav">
          <ul>
            <li className="active"><a href={url}><img src={homeIcon} alt="" /></a></li>
            <li><a href={url}><img src={shopIcon} alt="" /></a></li>
            <li><a href={url}><img src={userIcon} alt="" /></a></li>
            <li><a href={url}><img src={foundationIcon} alt="" /></a></li>
            <li><a href={url}><img src={tokenIcon} alt="" /></a></li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <SearchInput />
        <div className="cart-options">
          <ul>
            <li><a href={url}><img src={favouriteIcon} alt="" /></a></li>
            <li>
              <a href={url}>
                <img src={shoppingBag} alt="" />
                <span className="notification-red">1</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
  }
}
export default Header;