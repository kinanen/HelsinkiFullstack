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

const DisplayVote = ({text, value}) =>{
  return(
    <div>
      {text} {value}
    </div>
  )
}



const DisplayStats = ({votes}) =>{
  let sum =0 ;
  for(let i=0; i<votes.length; i++){
      sum = sum + votes[i];
  }


  let average;

  let positive = votes[0] * 1;
  let negative = votes[1] * -1;
  average = positive + negative; 
  average = average / sum;
  average = (average * 100) + "%";


  return(
    <div>
      <div> 
        all {sum}
      </div>
      <div>
        average {average}
      </div>
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

      <DisplayVote text="good" value={good}/>
      <DisplayVote text="neutral" value={neutral}/>
      <DisplayVote text="bad" value={bad}/>

      <DisplayStats votes={[good, bad, neutral]}/>
    </div>
  );
}

export default App;
