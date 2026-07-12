function Event(){
    function called(){
        alert("clicked")
    }
    const fruit = (name) =>{
        alert(name)
    }
    return(
        <div>
            <h1>Event and Function Call</h1>
            <button onClick={called}>Click</button>
            <br />
            <button onClick={() => fruit("Apple")}>Apple</button>
        </div>
    )
}
export default Event