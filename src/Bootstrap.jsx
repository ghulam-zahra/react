import Button from "react-bootstrap/Button";
import  Alert  from "react-bootstrap/Alert";

function Bootstrap() {
  return (
    <div>
      <Alert variant="danger" >This website is working</Alert>
      <Button onClick={()=>alert("Bootstrap button")} variant="success">Click Button</Button>
      <Button variant="primary" style={{margin:'10px'}}>OK</Button> 
      <Button variant="danger">OK</Button>
    </div>
  );
}

export default Bootstrap;