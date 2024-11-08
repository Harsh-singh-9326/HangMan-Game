import { Link } from "react-router-dom";
function Playgame(){
    return(
  <>
  <h1>playing the Game...</h1>
  <p>you can start the game by clicking the button below</p>
  <Link to ='/start' className="text-blue-500 hover:text-blue-700 underline font-medium">start Game Link</Link>
        

  </>  
)
}
export default Playgame;