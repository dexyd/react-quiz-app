import React, { useState } from 'react';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'Lyon', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ]
  },
  {
    questionText: 'Who is the CEO of Meta?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Mark Zuckerberg', isCorrect: true },
      { answerText: 'Elon Musk', isCorrect: false },
      { answerText: 'Bill Gates', isCorrect: false },
    ]
  },
  {
    questionText: 'What is the capital of Italy?',
    answerOptions: [
      { answerText: 'Rome', isCorrect: true },
      { answerText: 'Milan', isCorrect: false },
      { answerText: 'Valencia', isCorrect: false },
      { answerText: 'Lisbon', isCorrect: false },
    ]
  },
  {
    questionText: 'What is the capital of Nigeria?',
    answerOptions: [
      { answerText: 'Lagos', isCorrect: false },
      { answerText: 'Anambra', isCorrect: false },
      { answerText: 'Accra', isCorrect: false },
      { answerText: 'Abuja', isCorrect: true },
    ]
  },
  {
    questionText: 'Who is the CEO of Microsoft?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Mark Zuckerberg', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: false },
      { answerText: 'Bill Gates', isCorrect: true },
    ]
  }
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  }

  const NextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-lg bg-white p-5 rounded shadow-lg'>
        <div className='p-2 border text-center font-bold mb-2 text-xl'>Quiz App</div>
        { showScore ?
          <div>
            You scored {score} of {questions.length}
          </div> : 
          <div>
            <div>{questions[currentQuestion].questionText}</div>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
              onClick={() => handleAnswerOption(index, option.isCorrect)}
              className={`block w-full p-2 mt-2 rounded border ${
                answered ?
                option.isCorrect ?
                "bg-green-200"
                : selectedAnswer === index ?
                "bg-red-200"
                : ""
              : ""
              }`}>
                {option.answerText}</button>
            ))}
            <button className={`${answered ? "bg-green-500" : "bg-green-300"} block w-full text-white p-2 rounded`}
            disabled={answered ? "" : "disabled"}
            onClick={NextQuestion}>Next Question</button>
            <p className='text-center text-gray-400 text-sm'>Question {currentQuestion + 1} of {questions.length}</p>
          </div>
        }
      </div>
    </div>
  );
}

export default App;