const Header = () => {
  return (
    <h1>
      Half Stack application development
    </h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>

        <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
        <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
        <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises}/>


    </div>
  )
}

const Total = (props) => {
  let sum = 0;

  // Lasketaan Harjoitusten summa sum nimiseen muuttujaan
  for (let i = 0; i < props.parts.length; i++) {
    sum = sum + props.parts[i].exercises
  }

  return (
    <p>
      Number of exercises {sum}
    </p>
  )
}

const App = () => {

  //tietorakenne jossa kurssin nimi, osien nimet ja harjoitusten määrät
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>
      <Header />
      <Content parts = {course.parts}/>
      <Total parts= {course.parts} />
    </div>
  )
}

export default App