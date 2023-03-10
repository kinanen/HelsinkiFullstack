import { useState } from 'react'

const App = () => {



  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(getRandom(0, anecdotes.length));
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1));
  }
  
  const nextAnecdote = () => setSelected(getRandom(0, anecdotes.length-1))

  const vote = ()=> {
    let copy = [...votes];
    copy[selected] = copy[selected] +1;
    setVotes(copy);
  };

  return (
    <div>
      <p id="p1">{anecdotes[selected]}</p>
      <p> has {votes[selected]} votes </p>
      <Button handleClick={nextAnecdote} text="next anecdote"/>
      <Button handleClick={vote} text="vote"/>
      <BestAnecdote allAnecdotes={anecdotes} votes={votes} />
    </div>
  )
}

const BestAnecdote = ({allAnecdotes,votes}) => {

  let i = votes.indexOf(Math.max(...votes));
  
  return(
    <div>
      <h1>
        Anecdote with most votes
      </h1>
      <p>
      {allAnecdotes[i]}
      </p>
      <p> has {votes[i]} votes </p>
    </div>
  )
}

const Button = (props) => {
  return(
    <div>
      <button onClick={props.handleClick}> {props.text} </button>
    </div>
  )
}

export default App;
