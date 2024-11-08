import Button from "./Component/button";
import Textinput from "./Component/textinput";
import TextInputForm from "./Component/TextInputForm";
import TextInputFormContainer from "./Component/textinputfunctioncontainer";
import { Route,Routes } from "react-router-dom";
import Playgame from "./screen/playgame";
import Startgame from "./screen/startgame";

function App() {
  return (
    <>
  <Routes>
    <Route path='/play' element={<Playgame/>}/>
    <Route path='/start' element={<Startgame/>}/>
    <Route path='/' element={<h1>hello welcome to our game </h1>}/>
    </Routes>
   </>
  );
}
export default App;
