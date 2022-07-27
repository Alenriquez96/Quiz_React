import React, {useState} from "react";
import { useSelector } from "react-redux";

const Questions = (props) => {
  const questions = props.preg;
  const btn = props.btn;
  const correctAnswers = props.correct;
  const current = props.crt;

  const [numebr, setnumebr] = useState(0);

  const user = useSelector(state=>state.user);

  let mixedQuestions = [...questions.incorrect_answers,questions.correct_answer];

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (e.target.question.value === questions.correct_answer) {
      correctAnswers();
    }
    btn();
    setnumebr(numebr+1)
  }

  
  return (
    <form onSubmit={handleSubmit} className='question-section'>
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
        {user!=""?<h4 id="h4userName">Currently playing: {user}</h4>:""}
      </div>
    </form>
  )
};

export default Questions;
