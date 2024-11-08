function Button({text,onclickHandler,type = "button"}){
    return(
        
        <button type = {type} onClick = {onclickHandler} className= "bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >{text}</button>
        

        
    )
}
export default Button;