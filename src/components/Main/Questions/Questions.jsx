import React, {useState} from "react";
import { useSelector } from "react-redux";

const Questions = (props) => {
  const questions = props.preg;
  const btn = props.btn;
  const correctAnswers = props.correct;
  const current = props.crt;
  const aciertos = props.aciertos;
  const reset = props.reset;

  const [numebr, setnumebr] = useState(0);

  const users = useSelector(state=>state.users);

  let mixedQuestions = [...questions.incorrect_answers,questions.correct_answer];

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (e.target.question.value === questions.correct_answer) {
      correctAnswers();
    }
    btn();
    setnumebr(numebr+1)
  }

  console.log(users);
  
  return (
    <form onSubmit={handleSubmit} className='question-section'>
      {current===9?
      <div className='score-section'>
        <h4>Has acertado {aciertos}</h4>
        <button onClick={reset}>Reintentar</button>
      </div>
      :
      <div className="question-field">
        <div className='question-count'>
          <span>Question {current + 1}</span>/10
          <h4 >{questions.category}</h4>
          <h4 className='question-text'>{questions.question}</h4>
        </div>
        <div className='answer-section'>
          {mixedQuestions.map((q,i)=>
            <>
              <input id={i} type="radio" name="question" key={i} value={q}/>
              <label htmlFor={i} key={i+1}>{q}</label>
            </>
          )}
        </div>
        <input type="submit" />
        {users.length!=0?<h4 id="h4userName">Currently playing: {users[users.length-1]}</h4>:""}
      </div>}
    </form>
  )
};

export default Questions;
