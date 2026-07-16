import User from "./ReuseComp";
function Loop(){
    const name=["Ali","Zeeshan","Zahra","Danish","Salman"]
    const userData1=[
        {
            name:"Ali",
            age: "30",
            email:"abc@gmail.com"
        },
        {
            name:"Zeeshan",
         age: "28",
         email:"xee@gmail.com"
        }
        ,{
             name:"Zahra",
              age: "21",
              email:"zahryy@gmail.com"
        }
        ,{
             name:"Danial",
        age: "45",
        email:"dani@gmail.com"
        }
        ,{
            name:"Salman",
        age: "70",
        email:"sabc@gmail.com"
        }
    ]
    return (
      <div>
        <h1>Loops in JSX</h1>
        {
          userData1.map((user) =>{
            return(
              <div key = {user.id}>

                <ReuseComp data = {user}/>
              </div>
              
            )
          })
           
        }
      </div>
    );
}
export default Loop