import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    return(
    <button onClick={props.handleClick}>
        {props.text}
    </button>
    )
}
const Stats = (props) => {
    console.log(props);
    return(        
        <div>
            <table>
                <tr>
                    <td>good</td>
                    <td>{props.good}</td>
                </tr>
                <tr>
                    <td>neutral</td>
                    <td>{props.neutral}</td>
                </tr>
                <tr>
                    <td>bad</td>
                    <td>{props.bad}</td>
                </tr>
                <tr>
                    <td>all</td>
                    <td>{props.total}</td> 
                </tr>
                <tr>
                    <td>average</td>
                    <td>{props.average}</td>
                </tr>
                <tr>
                    <td>positive</td>
                    <td>{props.positive}%</td>
                </tr>
            </table>
        </div> 
    )
}

const Display = props => <div>{props.display}</div>



const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const total = good + neutral + bad;
    const average = (good - bad) / total;
    const positive = (good/total)*100;

    const handleGood = (value) => setGood(value)
    const handleNeutral = (value) => setNeutral(value)
    const handleBad = (value) => setBad(value)

    const display = (total) ? <Stats 
    good={good}
    neutral={neutral}
    bad={bad}
    total={total}
    average={average}
    positive={positive}
    />
    : "No Feedback Given";


  return (
    <div>
        <div> 
            <h1>give feedback</h1>
            <Button handleClick={() => handleGood(good + 1)} text="good"/>
            <Button handleClick={() => handleNeutral(neutral + 1)} text="neutral" />
            <Button handleClick={() => handleBad(bad + 1)} text="bad"/>
        </div>


        <div>
            <h1>statistics</h1>
            <Display display={display} />
        </div>        
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)