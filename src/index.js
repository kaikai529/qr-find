import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Controller from './Controller';

import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './MainPage';
import SubPage from './SubPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App/>} />
                <Route path="/MainPage" element={<MainPage/>} />
                <Route path="/SubPage" element={<SubPage/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
