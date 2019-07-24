import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const stats = {
    title: `give feedback`,
    votes: [
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

        
console.log(stats.votes);
        
const Heading = props => <div><h1>{props.stats.title}</h1></div>

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>

)

const TotalVotes = (props) => props.stats.votes.reduce((total, vote) => {console.log(vote); return (total + vote)}, 0)
console.log(TotalVotes);


const VoteTally = (props) => {
    return (
        <div>
            <h1>statistics</h1>
            {props.stats.votes.map((votes) => <p key={votes.type}>{votes.type} {votes.count}</p>)}
            {/* {props.stats.votes.map((votes) => <p key={votes.type}>{votes.type} {votes.count}</p>)} */}
        </div> 
    )

}
const Average = (props) => (
    <div>
        <p>average {(props.stats.votes[0].count - props.stats.votes[2].count) / props.stats.votes.length}</p>
    </div>
)    
// console.log(stats.votes.reduce((a=, b) => a + b, 0));


const Positive = (props) => (
    <div>
        <p key={props.stats.votes.count}>positive {(props.stats.votes.count / TotalVotes)*100}%</p>
    </div>
)
    
    const App = () => {
        
        
        const [count, setCount] = useState(0)
        

        const Feedback = (props) => {
            console.log(props);
            return (
                <div className="give-feedback"> 
                
                    <Heading stats={stats} /> 
                    <Button stats={stats} handleClick={() => setCount(stats.votes[0].count += 1)} text={stats.votes[0].type} /> 
                    <Button stats={stats} handleClick={() => setCount(stats.votes[1].count += 1)} text={stats.votes[1].type} /> 
                    <Button stats={stats} handleClick={() => setCount(stats.votes[2].count += 1)} text={stats.votes[2].type} /> 
                </div>
            ) 
                    
        }

        const Stats = (props) => {
            console.log(props);
            return (
            <div className="stats"> 
                <VoteTally stats={stats} />
                <Average stats={stats} />
                <Positive stats={stats} />
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