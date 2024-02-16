import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container,Row, NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import { useNavigate } from 'react-router-dom';
import brandLogo from '../assets/ME-logo.png'

function Header() {
    // const userLogin = useSelector(state=> state.userLogin)
    const navigate = useNavigate()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
        navigate('/')
        console.log('logout');
    }

  return (
    <header>
        {/* <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand><strong style={{'fontFamily': 'oblique','fontSize':'25px'}}>©️ME</strong></Navbar.Brand>
                </LinkContainer>
            </Container>
        </Navbar> */}
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand><strong style={{'font-family': 'oblique','fontSize':'25px'}}><img src={brandLogo} alt='Mind Ease' height='50' width='200'/></strong></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <SearchBox /> */}
                        <Nav className="mr-auto">
                            {/* <LinkContainer to="/cart">
                                <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                            </LinkContainer> */}

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/records'>
                                        <NavDropdown.Item>Records</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link><i className='fas fa-user'></i>&nbsp; Login</Nav.Link>
                                </LinkContainer>
                            )}

                            {/* {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )} */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </header>
  )
}

export default Header