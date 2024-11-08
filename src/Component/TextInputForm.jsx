import Button from "./button";
import Textinput from "./textinput";
function TextInputForm({ inputType = "text",handleFormSubmit,handleshowHidechange,handleTextInputChange}){
    return(
        
     <form onSubmit={handleFormSubmit} >
        <div><Textinput 
        type = {inputType}
         label="Enter a word or phrase :-" 
        placeholder="Enter a word or a phrase here ..."
        onChangeHandler={handleTextInputChange}/>
        </div>

        <div>
        <Button
        text={inputType == "password" ?"show":"hide"}
        onclickHandler={handleshowHidechange}/>
        </div>

        <div><Button type="submit"
        text ="submit"
        // className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out"
        // onClick={handleTextInputChange}
         />
        </div>
        </form>
        
    )
}
export default TextInputForm;