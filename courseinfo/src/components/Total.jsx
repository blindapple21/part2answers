const Total = ({parts})=>{
  
  return(
    <>
      <p style={{ fontWeight: 'bold' }}>
        total of {parts.reduce((s, p) => s + p.exercises, 0)} exercises
      </p>
    </>
  )
}
  
export default Total