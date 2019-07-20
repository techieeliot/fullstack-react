import React, { useState } from 'react'
import ReactDOM from 'react-dom'
        const stats = {
            title: `give feedback`,
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

const Heading = props => <div><h1>{props.stats.title}</h1></div>

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>

)

const VoteTally = () => (
    <div>Vote Tally</div>  
    )
    
    
    const App = () => {
        
        
        const [count, setCount] = useState(0)
        
        const Feedback = (props) => {
                    console.log(props);
                    return (
                        <div className="give-feedback"> 
                        
                            <Heading stats={stats} /> 
                            <Button stats={stats} handleClick={() => setCount(stats.vote[0].count += 1)} text={stats.vote[0].type} /> 
                            <Button stats={stats} text={stats.vote[1].type}/>
                            <Button stats={stats} text={stats.vote[2].type} /> 
                        </div>
                    ) 
                        
                    }
                const Stats = (props) => {
                    console.log(props);
                    return (
                    <div className="stats"> 
                        <h1>statistics</h1>
                        <p>{stats.vote[0].type} {props.stats.vote[0].count}</p>
                        <p>{stats.vote[1].type} {props.stats.vote[1].count}</p>
                        <p>{stats.vote[2].type} {props.stats.vote[2].count}</p>
                        <p>average 0</p>
                        <p>positive 0%</p> 
                    </div>
                    ) 
                    
                }
        // save clicks of each button to own state

    
        function useIncrement() {
            const [count, setCount] = useState(0);
            const increment = () => setCount(count + 1);
            return (count, increment )
            
        } 
        
        const Counter = () => {
            const {increment} = useIncrement()
            return <button onClick={increment}>good</button>
        
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