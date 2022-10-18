import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { isLoggedIn } from "../../FirebaseDB";



const Navbar = () => {

  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);

  function changeLoginBtn() {
    if (isLoggedIn()) {
      isUserLoggedIn(true);
    } else {
      setisUserLoggedIn(false);
    }
  }

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Twitter Clone
          </NavLink>
          <NavLink to="/SignUp" activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/LogIn">Sign In</NavBtnLink>
          {isUserLoggedIn && <NavBtnLink to="/LogIn">Log Out</NavBtnLink>}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
