import React, {Component} from 'react'
import './calculator.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dis/css/bootstrap.min.css'

class Keypad extends Component
{
    render()
    {
        return (
            <div className="keypad">
                <div className="row1 rows">
                    <button name="(" className="btn btn-dark myButton" onClick = {e => this.props.onClick(e.target.name)}>(</button>
                    <button name="clear" className="btn btn-dark myButton" onClick = {e => this.props.onClick(e.target.name)}>Clear</button>
                    <button name=")" className="btn btn-dark myButton" onClick = {e => this.props.onClick(e.target.name)}>)</button>
                    <button name="del" className="btn btn-light myButton" onClick = {e => this.props.onClick(e.target.name)}>del</button>
                </div>

                <div className="row2 rows">
                    <button name="1" className="btn btn-dark myButton" onClick = {e => this.props.onClick(e.target.name)}>1</button>
                    <button name="2" className="btn btn-dark myButton" onClick = {e => this.props.onClick(e.target.name)}>2</button>
                    <button name="3" className="btn btn-dark myButton" onClick = {e => this.props.onClick(e.target.name)}>3</button>
                    <button name="+" className="btn btn-light myButton" onClick = {e => this.props.onClick(e.target.name)}>+</button>
                </div>

                <div className="row3 rows">
                    <button name="4" className="btn btn-dark myButton" onClick = {e => this.props.onClick(e.target.name)}>4</button>
                    <button name="5" className="btn btn-dark myButton" onClick = {e => this.props.onClick(e.target.name)}>5</button>
                    <button name="6" className="btn btn-dark myButton" onClick = {e => this.props.onClick(e.target.name)}>6</button>
                    <button name="-" className="btn btn-light myButton" onClick = {e => this.props.onClick(e.target.name)}>-</button>
                </div>

                <div className="row4 rows">
                    <button name="7" className="btn btn-dark myButton" onClick = {e => this.props.onClick(e.target.name)}>7</button>
                    <button name="8" className="btn btn-dark myButton" onClick = {e => this.props.onClick(e.target.name)}>8</button>
                    <button name="9" className="btn btn-dark myButton" onClick = {e => this.props.onClick(e.target.name)}>9</button>
                    <button name="*" className="btn btn-light myButton" onClick = {e => this.props.onClick(e.target.name)}>*</button>
                </div>

                <div className="row5 rows">
                    <button name="." className="btn btn-dark myButton" onClick = {e => this.props.onClick(e.target.name)}>.</button>
                    <button name="0" className="btn btn-dark myButton" onClick = {e => this.props.onClick(e.target.name)}>0</button>
                    <button name="=" className="btn btn-dark myButton"onClick = {e => this.props.onClick(e.target.name)}>=</button>
                    <button name="/" className="btn btn-light myButton" onClick = {e => this.props.onClick(e.target.name)}>/</button>
                </div>
                
            </div>
        );
    }
}

export default Keypad;