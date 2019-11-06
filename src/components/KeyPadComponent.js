import React, {Component} from 'react'
import './calculator.css'
import 'bootstrap/dist/css/bootstrap.min.css';nkjk
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dis/css/bootstrap.min.css'

class Keypad extends Component
{
    render()
    {
        return (
            <div className="keypad">
                <div className="row1">
                    <button name="(" onClick = {e => this.props.onClick(e.target.name)}>(</button>
                    <button name="clear" onClick = {e => this.props.onClick(e.target.name)}>Clear</button>
                    <button name=")" onClick = {e => this.props.onClick(e.target.name)}>)</button>
                    <button name="del" onClick = {e => this.props.onClick(e.target.name)}>del</button>
                </div>

                <div className="row2">
                    <button name="1" onClick = {e => this.props.onClick(e.target.name)}>1</button>
                    <button name="2" onClick = {e => this.props.onClick(e.target.name)}>2</button>
                    <button name="3" onClick = {e => this.props.onClick(e.target.name)}>3</button>
                    <button name="+" onClick = {e => this.props.onClick(e.target.name)}>+</button>
                </div>

                <div className="row3">
                    <button name="4" onClick = {e => this.props.onClick(e.target.name)}>4</button>
                    <button name="5" onClick = {e => this.props.onClick(e.target.name)}>5</button>
                    <button name="6" onClick = {e => this.props.onClick(e.target.name)}>6</button>
                    <button name="-" onClick = {e => this.props.onClick(e.target.name)}>-</button>
                </div>

                <div className="row4">
                    <button name="7" onClick = {e => this.props.onClick(e.target.name)}>7</button>
                    <button name="8" onClick = {e => this.props.onClick(e.target.name)}>8</button>
                    <button name="9" onClick = {e => this.props.onClick(e.target.name)}>9</button>
                    <button name="*" onClick = {e => this.props.onClick(e.target.name)}>*</button>
                </div>

                <div className="row5">
                    <button name="." onClick = {e => this.props.onClick(e.target.name)}>.</button>
                    <button name="0" onClick = {e => this.props.onClick(e.target.name)}>0</button>
                    <button name="=" onClick = {e => this.props.onClick(e.target.name)}>=</button>
                    <button name="/" onClick = {e => this.props.onClick(e.target.name)}>/</button>
                </div>
                
            </div>
        );
    }
}

export default Keypad;