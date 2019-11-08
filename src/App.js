import React, { Component } from 'react';
import './App.css';
import Result from './components/ResultComponent';
import KeyPad from "./components/KeyPadComponent";
import { delay } from 'q';

//tutorial from https://github.com/niinpatel/calculator-react/blob/master/src/App.js

class App extends Component 
{
    constructor()
    {
        super();

        this.state = 
        {
            result: ""
        }
    }

    onClick = button => 
    {

        if(button === "=")
        {
            this.calculate()
        }

        else if(button === "clear")
        {
            this.reset()
        }
        else if(button === "del")
        {
            this.backspace()
        }

        else 
        {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = async () => 
    {
      var checkResult = this.state.result

      try 
      {
          this.setState({
              // eslint-disable-next-line
              result: eval(checkResult)
          })
      } catch (e) 
      {
          this.setState({
              result: "does not compute"
          })

      }

      await delay(3000);

      this.reset();

  };



    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator">
                    <Result result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;



