function UserExist(props) {
  const { user, value } = props;
  //const { HN, RN } = value;
  //console.log(value, value["HN"]);
  return (
    <>
      <h2>
        <b>Welcome {user}</b>
      </h2>
      <h5>
        <b>You have already booked a room.</b>
      </h5>
      <h3>
        <b>Your room details are as follows:</b>
      </h3>
      <h5>
        <b>Hostel No. 6</b>
      </h5>
      <h5>
        <b>Room No. 9</b>
      </h5>
    </>
  );
}

export default UserExist;
