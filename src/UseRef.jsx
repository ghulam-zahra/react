import { useRef } from "react"

function UseRef (){
    const inputRef = useRef(null)
    const inputHandler = () =>{
        console.log(inputRef)
        inputRef.current.focus();
        inputRef.current.style.color='purple'
        inputRef.current.placeholder='Enter password'
        inputRef.current.value='123'
    }

    const toggleHandler =()=>{
        if(inputRef.current.style.display!='none'){
            inputRef.current.style.display ='none'
        } else{
            inputRef.current.style.display='inline'
        }
    }
    return(
        <div>
            <h1>useRef</h1>
            <button onClick={toggleHandler}>Toggle</button>
            <input ref={inputRef} type="text" placeholder="Enter your name" /><br />
            <button onClick={inputHandler} style={{margin:'10px'}}>Focus on Input field</button>
        </div>
    )
}
export default UseRef