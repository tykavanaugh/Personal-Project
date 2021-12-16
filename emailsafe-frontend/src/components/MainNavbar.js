import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {Navbar,NavbarBrand,NavbarToggler,Collapse,NavItem,Nav,UncontrolledDropdown,DropdownItem,NavbarText,NavLink,DropdownToggle,DropdownMenu} from 'reactstrap'

const MainNavbar = () => {
  const [isAuth,setIsAuth] = useState(false)


  const navbarLinkStyle = {
    textDecoration: "none",
    color: 'white'
  };

  const navbarBrandStyle = {
    textDecoration: "none",
    color: 'white'
  };

  const navbarDropdownStyle = {
    textDecoration: "none",
    color: 'black'
  };

  useEffect(() => {
    if (localStorage.getItem('token') !== null){
      setIsAuth(true)
    }
  },[])

  return (
    <>
    <div>
      <Navbar
        color="dark"
        expand
        fixed="top"
        className='p-3'
      >
        <NavbarBrand style={navbarBrandStyle}>
          EmailSafe
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        {isAuth ? (
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <Link to='/userhome' style={navbarLinkStyle} >View Your Reports</Link>
              </NavItem>
            </Nav>
            <UncontrolledDropdown
                inNavbar
                nav
              >
                <DropdownToggle
                  caret
                  nav
                  style={navbarLinkStyle}
                >
                  Account
                </DropdownToggle>
                <DropdownMenu end >
                  <DropdownItem>
                    Account Info
                  </DropdownItem>
                  <DropdownItem>
                    Register Email
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to='/logout' style={navbarDropdownStyle} >Logout</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </Collapse>
        ) : (
          <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
          </Nav>
          <Nav>
            <NavItem className='mx-3'>
                <Link to='/login' style={navbarLinkStyle} >Login</Link>
            </NavItem>
            <NavItem className='mx-3'>
                <Link to='/signup' style={navbarLinkStyle} >Signup</Link>
            </NavItem>
          </Nav>
        </Collapse>
        )}
      </Navbar>
    </div>
    </>
  )
}

export default MainNavbar
