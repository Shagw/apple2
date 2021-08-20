import { Dropdown } from "react-bootstrap";
import {useEffect} from 'react'
import { Link, useHistory } from "react-router-dom";

function Header(props) {
  const { user, signout } = props;
  const history = useHistory()

  useEffect(() => {
    if(user){
      
    }else{
     
        history.push({
          pathname: '/',
         
        })
      
    }
  }, [user])
  return (
    <>
      <div id="head" className="header">
        <b>Newton School</b>
        {user ? (
          <span id="username">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {user}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={signout}>
                  Sign Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        ) : (
          <div></div>
        )}
      </div>

      <hr />
    </>
  );
}

export default Header;
