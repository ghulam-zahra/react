// import Header from "./Header"
// function App (){
//   return(
//     <div>
//    <Header />
//     <h1>
//       Hello React
//     </h1>
//     </div>

// import { useState } from "react"

   
//   )
// }

// export default App

// import { useState } from "react";
// import User from "./User";

// function App() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <>
//       <h1>Counter val: {counter}</h1>
//       <h1>Hello my red flag cuties</h1>

//       <User />

//       <button onClick={() => setCounter(counter + 1)}>
//         Increase counter val
//       </button>
//     </>
//   );
// }

// export default App;

 


// import Comp, {UserProfile, Setting} from "./Component";
// function App(){
//   return(
//     <div>
//     <p>Component is the small part of any website </p>
//     <h1>{UserProfile}</h1>
//     <Comp />
//     <Fruit />
//     <UserProfile />
//     <Setting/>
//     </div>
//   )
// }

// function Fruit(){
//   return(
//     <h1>Apple</h1>
//   )
// }
// export default App

// import Intro from "./JsxCurly"
// function App(){
//   return(
//     <Intro/>
//   )
// }
// export default App
// import Event from "./Event&FunctionCall.jsx"
// function App(){
//   return(
//     <Event/>
//   )
// }
// export default App
// import UseState from "./States";
// function App(){
//   return(
//     <UseState/>
//   )
// }
// export default App
// import Toggles from "./Toggle";
// function App(){
//   return(
//   <>
//   <Toggles/>
//   </>
//   )
  
// }
// export default App

// import Condition from "./Contidional";
// function App(){
//   return(
//   <>
//   <Condition/>
//   </>
//   )
  
// }
// export default App

// import Propss from "./PropsReact";

// function App() {
 
//   let user = {
//     name:"Zee Shan",
//     age:"28",
//     email:"xeexial@gmail.com"
//   }

//   let user2 = {
//     name:"Shanu",
//     age:"20",
//     email:"xial@gmail.com"
//   }
//    let cities = ["Fsd","Layyah","Multan","Karachi"]

//   return (
//     <div>
//       {/* <Propss name="Anil" age={29} /> */}
//       <Propss user = {user} city ={cities[0]}/>
//       <Propss user = {user2} city ={cities[1]}/>
       
//     </div>
//   );
// }

// export default App;

// import Wrapper from "./Wrapper.jsx"
// function App(){
//   return(
//     <div>
//       <Wrapper color="orange">
//         <h2>Hi Can you listen </h2>
//       </Wrapper>

//       <Wrapper >
//         <h2>Oh! you can't </h2>
//       </Wrapper>

//       <Wrapper >
//         <h2 style ={{color:"brown"}}>But why </h2>
//       </Wrapper>
//     </div>
//   )
// }
// export default App

// import { useState } from "react"
// function App(){
//   const[val,setVal]=useState("")
//   return(
//     <div>
//       <h1>Get input field value</h1>
//       <input type="text" value={val} onChange={(event)=>{setVal(event.target.value)}} placeholder="Enter value"/>
//       <br />
//       <h1>{val}</h1>
//       <button onClick={()=>{setVal("")}}>Clear val</button>
//     </div>
//   )
// }
// export default App;

// import { useState } from "react";
// import ControlledComp from "./ControlledComp";
// function App(){
//   return(
//     <div>
//       <ControlledComp/>
//     </div>
//   )
// }
// export default App
// import { useState } from "react";
// import CheckboxHandle from "./CheckboxHandle";
// function App(){
//   return(
//     <div>
//       <CheckboxHandle/>
//     </div>
//   )
// }
// export default App

// import { useState } from "react";
// import RadioOrDropDown from "./RadioOrDropDown";
// function App(){
//   return(
//     <div>
//       <RadioOrDropDown/>
//     </div>
//   )
// }
// export default App

// import Loop from "./Loop";
// function App(){
//   return(
//     <div>
//       <Loop/>
//       <ReuseComp/>
//     </div>
//   )
// }
// export default App

// import { useState } from "react";
// import Clock from "./Clock";
// function App(){
//   const[color,setColor]=useState("orange")
//   return(
//     <div>
//       <select onChange={(event) =>setColor(event.target.value)}>
//         <option value={"orange"}>Orange</option>
//         <option value={"green"}>Green</option>
//         <option value={"black"}>Black</option>
//         <option value={"blue"}>Blue</option>
//       </select>
//       <Clock color={color} />
//     </div>
//   )
// }
// export default App

import { useState } from "react";
import Counter from "./Counter";
function App(){
  const[counter,setCounter]=useState(0)
  return(
    <div>
      <Counter counter={counter} />
      <button onClick={()=>setCounter(counter+1)}>Counter</button>
    </div>
  )
}
export default App