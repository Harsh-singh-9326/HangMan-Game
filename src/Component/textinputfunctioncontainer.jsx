import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";
function TextInputFormContainer(){

    // const [inputvalue,setinputvalue] = useState("");
    const [inputType,setInputType] = useState("password");
    const [value, setValue] = useState()
    const navigate = useNavigate()

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("form Submited :", value)
        if (value){
            setTimeout(() => {
                navigate('/play')
            }, 1000);
        }
        // type = "password"

    }
    function handleTextInputChange(event){
        console.log("event value has changed")
        setValue(event.target.value)
        

    }
    function handleshowHidechange(event){
        console.log("show/hidebutton clicked ")
        if(inputType ==="password"){
            setInputType ("text")
        }else{
            setInputType ("password")
        }
        console.log(inputType)
    }

  return (
    <TextInputForm
    handleFormSubmit = {handleFormSubmit}
    handleTextInputChange ={handleTextInputChange}
    handleshowHidechange = {handleshowHidechange}
    inputType={inputType}
    />)
  }
  export default TextInputFormContainer;
