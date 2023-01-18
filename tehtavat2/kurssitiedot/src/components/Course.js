const Header = ({ name }) => {
  return (
    <h1>
      {name}
    </h1>
  )
}


const Part = ({ ptName, exercises }) => {
  return (
    <p>
      {ptName} {exercises}
    </p>
  )
}

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return (
    <p id="total">
      <b>Number of exercises {totalExercises}</b>
    </p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <div>
        {course.parts.map(part =>
          <Part key={part.id} ptName={part.name} exercises={part.exercises} />
        )}
      </div>
      <div>
        <Total parts={course.parts} />
      </div>
    </div>
  )
}

export default Course