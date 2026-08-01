import { useState } from 'react'
import { Question } from './component/Question'
import { Option } from './component/Option'
import { data } from './assets/questions'

function App() {

  const handleAnswer = (id) => (
    console.log(id)
  )

  return (
    <>
        <Question />
        {data.map((item) => {
          return item.options.map((option) => (
            <Option
              id={option.id}
              text={option.text}
              onSelect={handleAnswer}
            />
          ))
        })}
    </>
  )
}

export default App
