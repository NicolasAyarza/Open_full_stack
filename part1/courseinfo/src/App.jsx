const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log('part', props)
  return (
    <div>
      {props.array.map(element => (
        <p key={element.name}>
          {element.name} {element.exercises}
        </p>
      ))}
    </div>
  )
}

const Content = (props) => {
  console.log('content', props)
  return (
    <div>
      <Part array={props.parts} />
    </div>
  )
}

const Total = (props) => {
  console.log('total', props)
  const suma = props.array.reduce(
    (acumulador, element) => acumulador + element.exercises, 0
  )
  return (
    <div>
      <p>Total ejercicios: {suma}</p>
    </div>
  )
}

function App() {

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
      <Header course={course.name} />
      <Content
        parts={course.parts}
      />
      <Total
        array={course.parts}
      />
    </div>
  )
}

export default App
