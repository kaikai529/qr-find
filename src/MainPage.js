import React from 'react';
import logo from './logo.svg';
import './MainPage.css';
import Button from './Button';

function MainPage() {
  return (
    <div className="MainPage">
      <header className="MainPage-header">
        <img src={logo} className="MainPage-logo" alt="logo" />
        MainPage
        <Button name="return" content="" />
      </header>
    </div>
  );
}

export default MainPage;