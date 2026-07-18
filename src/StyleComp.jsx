import styled from "styled-components"
function StyleComp(){
    const Heading = styled.h2`
    color:red;
    padding:20px;
    border:3px solid blue;
    border-radius:5px;
    font-size:40px
    `

    const Heading2 = styled.h2({
      color: "blue",
      padding: "20px",
      border: "3px solid red",
      borderRadius: "5px",
      fontSize: "40px",
    });
    return(
        <div>
            <h1>Styled Component with React</h1>
            <Heading>Hello</Heading>
            <Heading2>Hy</Heading2>
        </div>
    )
}
export default StyleComp