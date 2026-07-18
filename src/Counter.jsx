import { useEffect } from "react"

function Counter({counter}){
    const handleCounter=()=>{
        console.log("handleCounter called")
    }
    useEffect(()=>{
        handleCounter()
    },[])
    
    return(
        <div>
            <h1>Handle props side effects with useEffect in component</h1>
            <h3>Counter Value {counter}</h3>
        
        </div>
    )
}
export default Counter