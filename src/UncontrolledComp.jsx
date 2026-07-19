function UnconrolledComp (){
    const handleForm = (event) =>{
        event.preventDefault();
        const user = document.querySelector('#user').value
        const password = document.querySelector('#password').value
        console.log(user,password)
    }   
    return(
        <div>
            <h1>Uncontrolled Component</h1>
            <form action="" method="post" onSubmit={handleForm}>
                <input type="text" id="user" placeholder="Enter user name" style={{margin:'10px'}}/>
                <br />
                <input type="text" id="password" placeholder="Enter password" /> <br />
                <button  style={{margin:'10px'}}>Submit</button>
            </form>
        </div>
    )
}
export default UnconrolledComp