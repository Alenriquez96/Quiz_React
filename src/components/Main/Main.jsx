import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import axios from "axios";

const Main = () => {  
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    async function getQuestions() {
      let res = await axios.get("https://opentdb.com/api.php?amount=10");
      let data = res.data;
      console.log(data);
      setQuestions(data.results);
    }
    getQuestions();
  }, []);

  let handleClickNumberQuestion = () => {
    if (currentQuestion<=10) {
      setCurrentQuestion(currentQuestion+1);
      let inputs = document.getElementsByName("question");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
      }
    }
  } 
  
  let handleCorrectAnswers = () =>{
    setCorrectAnswers(correctAnswers+1)
  }

  let resetAnswers = () =>{
    setCorrectAnswers(0);
    setCurrentQuestion(0);
  }

  if (questions.length!==0) {
    return (
      <main>
        <Questions reset={resetAnswers} aciertos={correctAnswers} crt={currentQuestion} preg={questions[currentQuestion]} btn={handleClickNumberQuestion} correct={handleCorrectAnswers}/>
      </main>
    ) 
  } else {
    return(
        <div className='spinner'></div>
    )
  }
};

export default Main;
