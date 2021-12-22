import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {Navbar,NavbarBrand,NavbarToggler,Collapse,NavItem,Nav,UncontrolledDropdown,DropdownItem,NavbarText,NavLink,DropdownToggle,DropdownMenu,Button} from 'reactstrap'

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
    color: 'black',
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
        className='p-3 bg-gradient'
      >
        <NavbarBrand style={navbarBrandStyle}>
          <h2 className="text-warning">EmailSafe</h2>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        {isAuth ? (
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <Link to='/userhome' style={navbarLinkStyle} ><Button color="warning" outline >View Your Reports</Button></Link>
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
                  <Button color="warning" outline size="lg">Account</Button>
                </DropdownToggle>
                <DropdownMenu end className="bg-warning">
                  <DropdownItem>
                    <Link to='/logout' style={navbarDropdownStyle} >
                      <center><Button color="warning" >Logout</Button></center>
                    </Link>
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
                <Link to='/login' style={navbarLinkStyle} >
                  <Button color="warning" outline size="lg">Log In</Button>
                </Link>
            </NavItem>
            <NavItem className='mx-3'>
                <Link to='/signup' style={navbarLinkStyle} >
                <Button color="warning" outline size="lg">Sign Up</Button>
                </Link>
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
