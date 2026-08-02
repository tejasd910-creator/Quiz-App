import { useEffect, useState } from 'react'
import { Question } from './component/Question'
import { Option } from './component/Option'
import { data } from './assets/questions'
import './App.css'

function App() {

  const [question, setQuestion] = useState(0)
  const [score, setScore] = useState(0)

  const allAttempted = data.every((item) => item.attempted)
  // const allAttempted

  const handleAnswer = (id) => {
    if (data[question].attempted) return;
    if (data[question].correct == id) {
      setScore(score + 1)
    }
    console.log(score, id);
    data[question].attempted = true


  }

  const updateQuestion = (direction) => {
    setQuestion((prev) => {
      if(direction === "next")
        return question < data.length - 1 ? prev + 1 : prev

      if(direction === "prev")
        return question > 0 ? prev - 1 : prev
    })
  }


  //   return (
  //     <>
  //       <Question question={data[question].question} />

  //       {
  //         data[question].options.map((option) => (
  //           <Option
  //             key={option.id}
  //             id={option.id}
  //             text={option.text}
  //             onSelect={handleAnswer}
  //           />
  //         ))
  //       }



  //       <button
  //         onClick={() => updateQuestion(0)}
  //       >
  //         Next
  //       </button>
  //       <button
  //         onClick={() => updateQuestion(1)}
  //       >
  //         Prev
  //       </button>

  //       <div>{question + 1}/{data.length}</div>

  //       <div>{score}</div>
  //     </>
  //   )
  // }

  return (
    <>
      {!allAttempted ? (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-5">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">

            <Question question={data[question].question} />

            <div className="space-y-4 mt-6">
              {data[question].options.map((option) => (
                <Option
                  key={option.id}
                  id={option.id}
                  text={option.text}
                  attempted={data[question].attempted}
                  onSelect={handleAnswer}
                />
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => updateQuestion("prev")}
                className="px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300"
              >
                Prev
              </button>

              <button
                onClick={() => updateQuestion("next")}
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
              >
                Next
              </button>
            </div>

            <div className="flex justify-between mt-6 text-gray-600 font-semibold">
              <span>
                Question {question + 1}/{data.length}
              </span>
            </div>

          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-600">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Quiz Completed 🎉
            </h1>

            <p className="text-3xl font-semibold text-indigo-600">
              Score: {score} / {data.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
export default App
