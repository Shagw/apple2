function SuccessfulBooking(props) {
    console.log(props)
    return (
      <>
        <div className="popup">
          <div style={{ display: "flex" }}>
            <button id="cross">X</button>
          </div>
          <h2 style={{ textAlign: "center" }}>Success</h2>
  
          <div>Your room has been booked successfully.</div>
  
          <div>Your room details are as follows:</div>
  
          <div>Hostel No. {props.hostelNo}</div>
          <div>Room No. {props.roomno}</div>
        </div>
      </>
    );
  }
  
  export default SuccessfulBooking;