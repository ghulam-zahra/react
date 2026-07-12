function Intro(){
    // const name = "JSX"
    let x = 10
    let y= 3
    let path = "https://www.google.com/search?sca_esv=72e2ea30c0472291&sxsrf=APpeQnsAkEnxHkd2pDLzl-J6_JzdfJW5BQ:1783830701753&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832VTJOOCxW_fyN-Q_ezyf8gKjm3rhh_G8jdZ2Q6tji4z8Mva6cfvBj5rpPch2IC955HC4dEhTD85WaiWkSD5EjFnrnkXf8uSwU1OjdTZmfoiWVgODsrQlv49kLZ63PjUD4Ylh3ioGlhPObtZQ3tSCsBQwnjKN&q=img&sa=X&ved=2ahUKEwip3MSap8yVAxV7UqQEHVRGI8cQtKgLegQIExAB&biw=1280&bih=551&dpr=1.5#sv=CAMSURoyKhBlLXgzZFo1Vy1qeUVJNGNNMg54M2RaNVctanlFSTRjTToOZjNyaUxBLTQtMXBvdE0gBCoXCgFzEhBlLXgzZFo1Vy1qeUVJNGNNGAEwARgHIOy4rYMGSggQARgBIAEoAQ"
    function fruit(){
        return "Apple"
    }
    function clicked(){
        alert ("Button clicked")
    }
    function operation(a,b,op){
        if (op=="+"){
            return a+b;
        }else if(op=="-"){
            return a-b
        }
    }
    return(
        <div>
             <h1>{name?name:"user not found"}</h1>
             <h3>{x*y+45}</h3>
             {fruit()}
             <div>{operation(20,67,"+")}</div>
             <button onClick={clicked}>Click me</button>
             <img src="https://www.google.com/search?sca_esv=72e2ea30c0472291&sxsrf=APpeQnsAkEnxHkd2pDLzl-J6_JzdfJW5BQ:1783830701753&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832VTJOOCxW_fyN-Q_ezyf8gKjm3rhh_G8jdZ2Q6tji4z8Mva6cfvBj5rpPch2IC955HC4dEhTD85WaiWkSD5EjFnrnkXf8uSwU1OjdTZmfoiWVgODsrQlv49kLZ63PjUD4Ylh3ioGlhPObtZQ3tSCsBQwnjKN&q=img&sa=X&ved=2ahUKEwip3MSap8yVAxV7UqQEHVRGI8cQtKgLegQIExAB&biw=1280&bih=551&dpr=1.5#sv=CAMSURoyKhBlLXgzZFo1Vy1qeUVJNGNNMg54M2RaNVctanlFSTRjTToOZjNyaUxBLTQtMXBvdE0gBCoXCgFzEhBlLXgzZFo1Vy1qeUVJNGNNGAEwARgHIOy4rYMGSggQARgBIAEoAQ" alt="" />
        </div>
       
    )
}
export default Intro