import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { isLoggedIn, logOutUser } from "../../FirebaseDB";

const Navbar = () => {
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);

  useEffect(() => {
    const getAuthStatus = async () => {
      setisUserLoggedIn(await isLoggedIn());
    };

    getAuthStatus();
  }, []);

  console.log(isUserLoggedIn);

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Twitter Clone
          </NavLink>
          {!isUserLoggedIn && (
            <NavLink to="/SignUp" activeStyle>
              Sign Up
            </NavLink>
          )}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          {!isUserLoggedIn && <NavBtnLink to="/LogIn">Sign In</NavBtnLink>}
          {isUserLoggedIn && (
            <NavBtnLink onClick={logOutUser}>Log Out</NavBtnLink>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;