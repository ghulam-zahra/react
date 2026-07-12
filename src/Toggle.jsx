import { useState } from "react"
function Toggles(){
    const [display, setDisplay]=useState(true)
    return(
        <div>
            <h1>Toggle in React JS</h1>
            {
                display?  <h3>Zahra</h3>:null
            }
           
        </div>
    )
}
export default Toggles