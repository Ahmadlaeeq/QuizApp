import './App.css';
import questions from './questions';
import { useState } from 'react';
import ResultSheet from './resultsheet';

function App() {
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [score, setScore] = useState(0);
  let [showResult, setShowResult] = useState(false);
  let [correctAns, setCorrectAns] = useState(0);
  let nextquestion;
  const getresult = (istrue) => {
    nextquestion = (currentQuestion + 1);
    setCurrentQuestion(nextquestion)
    if (istrue) {
      setScore(score + 5)
      let ans = correctAns + 1;
      setCorrectAns(ans)
    }
    if (nextquestion < questions.length) {
      nextquestion = (currentQuestion + 1);
      setCurrentQuestion(nextquestion)
    }
    else {
      setShowResult(true)
    }
  }
  const handleQuit = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false)
  }
  return (
    <>
      <div className='container'>
        {showResult ? (<ResultSheet score={score} correctAns={correctAns} handleQuit={handleQuit} />) : (<>
          <div className='name'>
            <h1 className='title'>Easy Quiz App</h1>
            <h2>Question {currentQuestion + 1} of {questions.length}</h2>
            <h3>Score:{score}</h3>
          </div>
          <div className='queblock shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
            <div className='statment'>
              {
                questions[currentQuestion].statment
              }
              <hr className='hr'></hr>
              <div>
                <ul>
                  {questions[currentQuestion].options.map((op, i) => {
                    return (
                      <li key={i} ><button
                        onClick={() => getresult(op.istrue)}
                        className="btn btn-primary btn-lg opbtn my-1 ">{op.ans}</button></li>)
                  })
                  }
                </ul>
              </div>
              <div className='activity-btn'>
                <button onClick={handleQuit} className='btn btn-primary mx-2 action-btn'>Quit</button>
              </div>
            </div>
          </div>
        </>)}
      </div>
    </>
  );
}

export default App;
