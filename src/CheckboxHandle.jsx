import { useState } from "react"

function CheckboxHandle(){
    function handle(event){
        console.log(event.target.value , event.target.checked)
        if(event.target.checked){
            setSkills([...skill,event.target.value])
        }else{
            setSkills([...skill.filter((item)=>item!==event.target.value)])
        }
    }
    const[skill,setSkills]=useState([])
    return(
        <div>
            <h1>How to handle Checkbox</h1>
            <form action="" method="get">
                <label htmlFor="">Skills</label><br />
                <input type="checkbox" onChange={handle} name="" id="java" value="java" />
                <label htmlFor="java">Java</label>
                <br />
                 <input type="checkbox" onChange={handle} name="" id="py" value="python" />
                <label htmlFor="py">Python</label>
                <br />
                 <input type="checkbox" onChange={handle} name="" id="react"  value="react"/>
                <label htmlFor="react">React</label>
                <br />
                 <input type="checkbox" onChange={handle} name="" id="php" value="php"/>
                <label htmlFor="php">PHP</label>

                <h3>{skill.join(", ")}</h3>
                
            
            
            </form>
        </div>
    )
}
export default CheckboxHandle