import { useState,useEffect } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import SuccessfulBooking from "./SuccessfulBooking";
function FloorRoomSelection(props) {
  const {user} = props;
  const location = useLocation();
  const [selectedfloor, setselectedfloor] = useState("1st Floor");
  const [successfulBooking, setsuccessfulBooking] = useState(false);

  const [roomNo, setroomno] = useState("");
  const [showbookroom,setshowbookroom] = useState(false)
  const array = ["1","2","3","4","5","6","7","8","9","10"];
  const bookroom=()=>{
    localStorage.setItem(user, {"hostelname":location.state.detail,"roomno":roomNo});
    setsuccessfulBooking(true)
  }
  console.log(location)
  return (
    <>
    {successfulBooking ?<SuccessfulBooking roomno={roomNo} hostelNo={location.state.detail}/>: <div className="floorRoom">
      <b>Choose a Floor</b>
      <Dropdown >
        <Dropdown.Toggle>
          {selectedfloor}
        </Dropdown.Toggle>

        <Dropdown.Menu >
          <Dropdown.Item onClick={()=>setselectedfloor("1st Floor")}>1st Floor</Dropdown.Item>
          <Dropdown.Item onClick={()=>setselectedfloor("2nd Floor")}>2nd Floor</Dropdown.Item>
          <Dropdown.Item onClick={()=>setselectedfloor("3rd Floor")}>3rd Floor</Dropdown.Item>
          <Dropdown.Item onClick={()=>setselectedfloor("4th Floor")}>4th Floor</Dropdown.Item>
          <Dropdown.Item onClick={()=>setselectedfloor("5ths Floor")}>5th Floor</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="btnbox">
        {array.map((item,index)=>{
          return <button onClick={()=>{setroomno(item);setshowbookroom(true)}}>{item}</button>
        })}
      
      </div>
     {showbookroom && <button
     onClick={bookroom}
        style={{
          backgroundColor: "blue",
          color: "white",
          width: "150px",
          height: "40px",
          borderRadius: "30px",
        }}
      >
        Book Room
      </button>}

    </div>}
    </>
  );
}

export default FloorRoomSelection;
