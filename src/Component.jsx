function Comp(){
    return(
        <h1>First Component</h1>
    )
}
export default Comp

export function UserProfile(){
    return(
        <div>
            <h1>Zahra</h1>
            <h3>BS Software Engineering</h3>
            <p>I hope i will learn react and become react engineer</p>
        </div>
    )
}

export function Setting(){
    return(
        <div>
            <input type="email" name="" id="" placeholder="Email"/>
            <br></br>
            <input type="password" placeholder="password" />
        </div>
    )
}