import React, {Component} from 'react';

class Result extends Component
{
    render()
    {
        let {result} = this.props;
        return(
            <div className="result">
                <p>RESULT!</p>
                {/* <p>{result}</p> */}
            </div>
        );
    }
}

export default Result;