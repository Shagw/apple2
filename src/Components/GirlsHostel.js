
import { Link, useHistory } from "react-router-dom";

function GirlsHostel(props) {
  const history = useHistory()

  const selectroom = (index)=>{
    history.push({
      pathname: '/selectroomandfloor',
      state: { detail:`G${index}`}
    })
  }
  const array = ["G1","G2","G3","G4","G5","G6"]
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

export default GirlsHostel;
