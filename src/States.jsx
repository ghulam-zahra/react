import { useState} from "react"
function UseState(){
    const [fruit, setFruit]= useState("Apple")
    const handleFruit =()=>{
        setFruit("banana")
    }
    return(
        <div>
            <h1>Stae in react js</h1>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change the fruit name</button>
        </div>
    )
}
export default UseState