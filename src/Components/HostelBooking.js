import { useEffect, useState } from "react";
import HostelSelection from "./HostelSelection";
import UserExist from "./UserExist";

function HostelBooking(props) {
  const { user } = props;
  const [userExist, setuserExist] = useState(false);
  const [value, setvalue] = useState({});
  useEffect(function () {
    //console.log(user);
    if (localStorage.getItem(user)) {
      console.log(localStorage.getItem(user));
      setvalue(localStorage.getItem(user));
      setuserExist(true);
    }
  }, []);
  return (
    <>
      {userExist ? (
        <UserExist user={user} value={value} />
      ) : (
        <HostelSelection user={user} />
      )}
    </>
  );
}

export default HostelBooking;
