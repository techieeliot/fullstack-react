import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Quote = props => <div>{props.quote}</div>


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  
  const handleSelected = (value) => setSelected(value)
  
  function randomWholeNum() {
    return Math.floor(Math.random() * (anecdotes.length));
  }
  
  const quote = <p>{anecdotes[selected]}</p>
  
  const handlePoints = () => {
    const copy =  [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  console.log(points)

  return (
    <div>
      <Quote quote={quote} />
      <p>has {points[selected]} votes</p>
      <div className="buttons-flex">
        <Button handleClick={() => handlePoints()} text="vote" />
        <Button handleClick={() => handleSelected(randomWholeNum)} text="next anecdote" />
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)