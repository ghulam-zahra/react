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
        <table border="1">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {userData1.map((user) => {
              return (
                <tr key={user}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
}
export default Loop