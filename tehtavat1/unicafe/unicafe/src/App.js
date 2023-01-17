import { useState } from "react";

const vote = (action) => {
  action[1](action[0] + 1);
}

const Button = ({ text, action }) => {
  return (
    <button onClick={() => vote(action)}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (

    <tr>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>

  )
}



const Statistics = ({ votes }) => {
  let sum = 0;
  for (let i = 0; i < votes.length; i++) {
    sum = sum + votes[i];
  }
  while (sum == 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }

  // Muuttuja johon tallennetaan keskiarvo
  let average;

  // muuttujat jotka muuttavat annetut äänet, niitä vastaaviksi painotetuiksi arvoiksi
  let positive = votes[0] * 1;
  let negative = votes[1] * -1;

  //lasketaan arvioiden keskiarvo
  average = positive + negative;
  average = average / sum;

  //lasketaan positiivisten arvioiden osuus kaikista arvioista
  let positivePrecentage = ((positive / sum) * 100) + "%";

  return (

      <tbody>
        <StatisticLine text="good" value={votes[0]} />
        <StatisticLine text="neutral" value={votes[2]} />
        <StatisticLine text="bad" value={votes[1]} />

        <StatisticLine text="all" value={sum} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positivePrecentage} />

      </tbody>


  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return (
    <div className="App">
      <h1>give feedback</h1>
      <Button text="good" action={[good, setGood]} />
      <Button text="neutral" action={[neutral, setNeutral]} />
      <Button text="bad" action={[bad, setBad]} />
      <h1>statistics</h1>
      <Statistics votes={[good, bad, neutral]} />

    </div>
  );
}

export default App;
