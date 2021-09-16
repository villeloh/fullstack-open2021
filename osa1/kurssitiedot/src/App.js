import React from 'react'

const Header = (props) => {

  return (<h1>{props.title}</h1>)
}

const Content = (props) => {

  const parts = props.parts.map(item => {

    return <Part title={item.title} amount={item.amount} />
  })

  return (
    <>
      {parts}
    </>
  )
}

const Part = (props) => {
  return (<p>
  {props.title} {props.amount}
</p>)
}

const Total = (props) => {

  const arrayOfAmounts = props.exercises.map(ex => {
    return ex.amount
  });

  const sumOfExercises = arrayOfAmounts.reduce((prev, next) => { 
    return prev + next 
  })

  return <p>Number of excercises: {sumOfExercises}</p>
}

const App = () => {

  const courseTitle = 'Half Stack application development'

  const part1 = { title: 'Fundamentals of React', amount: 10 }
  const part2 = { title: 'Using props to pass data', amount: 7 }
  const part3 = { title: 'State of a component', amount: 14 }

  const parts = [part1, part2, part3]

  return (
    <>
      <Header title={courseTitle}/>
      <Content parts={parts}/>
      <Total exercises={parts}/>
    </>
  )
}

export default App
