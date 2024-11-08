import { Link } from "react-router-dom";
import TextInputFormContainer from "../Component/textinputfunctioncontainer"; 
function Startgame(){
    return(
        <>
        
        <h1>starting the Game...</h1>
        <p>you can start the game by clicking the button below</p>
        <TextInputFormContainer/>
        {/* <Link to ='/play' className="text-blue-500 hover:text-blue-700 underline font-medium">play Game Link</Link> */}
        
        </>
    )
}
export default Startgame;