function Propss({user,city}){
    console.log(user)
    return(
        <div>
            <hr />
            <h1>Props in React JS</h1>
            <h4>{city}</h4>
            <h2>Name:{user.name}</h2>
            <h3>Age:{user.age}</h3>
            <h4>Email:{user.email}</h4>

            {/* <h2>Name: {user2.name}</h2>
            <h5>Age: {user2.age}</h5> */}
        </div>
    )
}
export default Propss