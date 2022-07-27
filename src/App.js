import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(state=>state.isLoading);
  dispatch({
    type: "LOADING"
  })
  return (
    isLoading==true?
      <div className='spinner'></div>
    :
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
