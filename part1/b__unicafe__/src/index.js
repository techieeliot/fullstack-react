import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
    const stats = {
        vote: [
            {
                type: `good`,
                count: 0
            },
            {
                type: `neutral`,
                count: 0
            },
            {
                type: `bad`,
                count: 0
            },
            
        ]
    }
    
    console.log(stats.vote);
    
        function useIncrement() {
            const [count, setCount] = useState(0);
            const increment = () => setCount(count + 1);
            return (count, increment )
            
        } 
        
        const ounter = () => {
            const {increment} = useIncrement()
            return <button onClick={increment}>good</button>
        
        }

    const Feedback = (props) => {
        console.log(props);
        return (
            <div className="give-feedback"> 
            
                <h1>give feedback</h1> 
                <button onClick={Counter(stats.vote[0].count)}>{stats.vote[0].type}</button> 
                <button>neutral</button>
                <button>bad</button> 
            </div>
        ) 
            
        }
    const Stats = (props) => {
        console.log(props);
        return (
        <div className="stats"> 
            <h1>statistics</h1>
            <p>good {props.stats.vote[0].count}</p>
            <p>neutral {props.stats.vote[1].count}</p>
            <p>bad {props.stats.vote[2].count}</p>
            <p>average 0</p>
            <p>positive 0%</p> 
        </div>
        ) 
        
    }
        

  return (
    <div>
        <Feedback stats={stats} />

        <Stats stats={stats} />
        

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)