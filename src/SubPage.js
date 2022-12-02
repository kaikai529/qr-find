import React from 'react';
import logo from './logo.svg';
import './SubPage.css';
import Button from './Button';

function SubPage() {
    return (
        <div className='SubPage'>
            <header className='SubPage-header'>
                <img src={logo} className='SubPage-logo' alt='logo' />
                SubPage
                <Button name='return' content='/' />
            </header>
        </div>
    );
}

export default SubPage; 