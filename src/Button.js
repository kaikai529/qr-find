import React from 'react';
import { goBack } from 'react-router-dom';
import './Button.css';
import App from './App';
class Button extends React.Component {
    handleToPage = () => {
        this.props.history.push("/App")
    }

    render() {
        return (
            <div className="Button" onClick={()=>{this.handleToPage();}}>
                {this.props.name}
            </div>
        );
    }
}

export default Button