import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Stats = (props) => {
    console.log(props);
    return(        
        <div>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {props.total}</p> 
            <p>average {props.average}</p>
            <p>positive {props.positive}%</p>
        </div> 
    )
}

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
            <h1>give feeback</h1>
            <button onClick={()=> handleGood(good + 1)}>good</button>
            <button onClick={()=> handleNeutral(neutral + 1)}>neutral</button>
            <button onClick={()=> handleBad(bad + 1)}>bad</button>
        </div>


        <div>
            <h1>statistics</h1>
            {display}
        </div>        
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)