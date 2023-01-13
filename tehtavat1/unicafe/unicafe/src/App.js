import { useState } from "react";

const vote = (action) => {
    action[1](action[0]+1);
}

const Button = ({ text,action }) => {
  return (
    <button onClick={()=>vote(action)}>
      {text}
    </button>
  )
}

const Display = ({text, value}) =>{
  return(
    <div>
      {text} {value}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return (
    <div className="App">
      <h1>give feedback</h1>
      <Button text="good" action={[good, setGood]}  />
      <Button text="neutral" action={[neutral, setNeutral]} />
      <Button text="bad" action={[bad, setBad]} />
      <h1>statistics</h1>
      <Display text="good" value={good}/>
      <Display text="neutral" value={neutral}/>
      <Display text="bad" value={bad}/>
    </div>
  );
}

export default App;
