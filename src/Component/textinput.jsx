function Textinput({label , type = "text", placeholder = "enter your text here" ,value,onChangeHandler,}){
    
    return(<>
    
        <span className="text-gray-700 font-semibold">{label}</span>
        <input className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
        type={type} 
        placeholder={placeholder}
        value = {value}
        onChange = {onChangeHandler}/>  
           

         </>
    )
}
export default Textinput;