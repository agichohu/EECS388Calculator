import React from 'react';
import Result from './components/ResultComponent';
import Keypad from './components/KeyPadComponent';
import './App.css';
// import { throwStatement } from '@babel/types';

class App extends React.Component
{
  constructor()
  {
    super();

    this.state ={
      result: ""
    }
  }

  onClick = button => {
    if(button === "=")
    {
      this.calculate()
    }
    else if(button === "clear")
    {
      this.reset()
    }
    else if( button === "del")
    {
      this.setState({
        result: this.state.result + button
      })
    }
  }

 calculate = () => {
   try {
     this.setState({
     result: (eval(this.state.result) || "") + ""
   })
 }
 catch (e) {
   this.setState({
     result: "error"
   })
 }

};

  
  reset = ()  =>
  {
    this.setState({
      result: ""
    })
  }

  backspace = () =>
  {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };


  render()
  {
    return(
      <div>
        <div className="calculator">
          <Result result={this.state.result}/>
          <Keypad onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;
