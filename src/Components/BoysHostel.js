import { Link, useHistory } from "react-router-dom";


function BoysHostel(props) {
  const history = useHistory()

  const array = ["B1","B2","B3","B4","B5","B6"]
  const selectroom = (index)=>{
    history.push({
      pathname: '/selectroomandfloor',
      state: { detail:`B${index}`}
    })
  }

  return (
    <>
      <div className="BG">
        <h2>Choose a Hostel</h2>
        <div>
          {array.map((item,index)=>{
           return <button style={{ borderRadius: "20%" }} onClick={(e)=>{selectroom(index+1)}}>{item}</button>
          })}
         
        </div>
      </div>
    </>
  );
}

export default BoysHostel;
