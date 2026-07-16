import { useEffect, useState } from "react"

const Clock= ({color})=>{
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);

      return () => clearInterval(timer);
    }, []);
    return(
        <div>
            {/* <h1 style={{color:"red"}}>Clock</h1> */}
            <h1 style={{color:color,backgroundColor:"lavender",padding:"20px",width:"200px" , border:"2px solid #561391",borderRadius:"10px"}}
            >{time}</h1>
        </div>
    )
}
export default Clock