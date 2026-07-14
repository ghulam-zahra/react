import { useState } from "react"
function Toggles(){
    const [display, setDisplay]=useState(false)
    return(
        <div>
            <h1>Toggle in React JS</h1>
            {
                display?  <h3>Zahra</h3>:null
            }
           <button onClick={() => setDisplay(!display)}>Toggle</button>
        </div>
    )
}
export default Toggles