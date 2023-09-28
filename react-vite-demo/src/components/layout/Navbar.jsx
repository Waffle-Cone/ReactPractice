import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import "./Navbar.scss";

function Navbar(options) {
  //Initialisation ------------------------------------------------------
  const {loggedInUser, logout} = useAuth();
  //state  --------------------------------------------------------------
  //Handlers ------------------------------------------------------------
  //View ----------------------------------------------------------------

    return(
        <nav>
        <div className="navItem">
          <NavLink to = "/"> Home</NavLink>
        </div>
        {
          loggedInUser && (
            <>
            <div className="navItem">
              <NavLink to = "/modules"> Modules</NavLink>
            </div>

            <div className="navItem">
              <NavLink to = "/students"> Students</NavLink>
            </div>
            </>
          )
        }

        {
          !loggedInUser 
          ?(
            <div className="navItem">
              <NavLink to = "/login"> Login</NavLink>
            </div>)
          :(
            <div className="navItem">
            <NavLink to = "/" onClick={logout}> Logout</NavLink>
            </div>)
        }
        
      </nav>

    );
}

export default Navbar;