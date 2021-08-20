import { Link, useHistory } from "react-router-dom";
import {useEffect, useState} from 'react'


function HostelSelection({user}) {
  const [hostel,setHostel] = useState("");

  const history = useHistory()
  useEffect(() => {
    if(user){
      history.push({
        pathname: '/hostelbooking',
        state: { detail:user }
      })
    }
  }, [user])

  const girlsHostel= ()=>{
    history.push({
      pathname: '/girlshostelselection',
      state: { detail: "girls" }
    })
  }
  const boyshostel= ()=>{
    history.push({
      pathname: '/boyshostelselection',
      state: { detail: "boys" }
    })
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <b>Choose your Hostel</b>
      </h1>
      <button style={{ color: "pink" }} onClick={girlsHostel}>Girls Hostel</button>
      <button style={{ color: "blue" }} onClick={boyshostel}>Boys Hostel</button>
    </>
  );
}

export default HostelSelection;
