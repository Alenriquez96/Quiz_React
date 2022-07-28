import React, { useEffect, useState } from "react";
import Questions from "./Questions/Questions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const Main = () => {  
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [fetch, setFetch] = useState(false);
  const isLoadingFetch = useSelector(state=>state.isLoadingFetch);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getQuestions() {
      let res = await axios.get("https://opentdb.com/api.php?amount=10");
      let data = res.data;
      setQuestions(data.results);
      setFetch(false);
      dispatch({
        type: "LOADINGFETCH",
        payload: false
      })
    }
    getQuestions();
  }, [fetch]);

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

  const handleSaveResult = ()=>{
    //------------Esta es otra forma--------//
    // let newUser = users.findIndex(user=>user.user== loggedUser);
    // users[newUser].score == correctAnswers;

    let newUsers = users.map(user=>
      user.user===loggedUser?
      Object.assign(user, {score: correctAnswers}):
       user);

    dispatch({
      type: "UPDATE",
      payload: newUsers
    })

    alert("Score saved")  
  }



  const users = useSelector(state=>state.users);
  const loggedUser = useSelector(state=>state.user);
  let resetAnswers = () =>{
    setCorrectAnswers(0);
    setCurrentQuestion(0);
    setFetch(true);
    dispatch({
      type: "LOADINGFETCH",
      payload : true
    })
  }

  if (isLoadingFetch===true) {
    <main className='spinner'></main>
  } else {
    if (questions.length!==0) {
      return (
        <main>
          {currentQuestion>9?
          <div className='score-section'>
            <h4>You have {correctAnswers} questions right!</h4>
            <button style={{margin:"10px"}} onClick={handleSaveResult}>Save results</button>
            <button onClick={resetAnswers}>Reintentar</button>
          </div>
        :
        <Questions crt={currentQuestion} preg={questions[currentQuestion]} btn={handleClickNumberQuestion} correct={handleCorrectAnswers}/>
        }
        </main>
      ) 
    }
  }
};

export default Main;
