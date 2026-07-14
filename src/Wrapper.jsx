function Wrapper({children,color}){
    return(
        <div style={{color:color, backgroundColor:"lavender",width:"400px",padding:"40px",margin:"10px"}}>
            {children}
        </div>
    )
}
export default Wrapper