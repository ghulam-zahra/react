import { useState} from "react"
function UseState(){
    const [fruit, setFruit]= useState("Apple")
    const handleFruit =()=>{
        setFruit("banana")
    }
    const [counter,setCounter]=useState(0)
    return(
        <div>
            <h1>Stae in react js</h1>
            <h3>Counter: {counter}</h3>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change the fruit name</button>
            <br></br>
            <button onClick={()=>setCounter(counter+2)}>Update Counter</button>
        </div>
    )
}
export default UseState