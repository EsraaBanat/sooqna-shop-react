import React, { useContext, useEffect} from "react";
import { useNavigate} from "react-router-dom";
import { Form, Button, Container,Navbar } from "react-bootstrap";
import {  BsFillCartFill } from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";
import {  AiFillHome } from "react-icons/ai";
import { isAuthenticated } from '../../auth';
import Logo from '../../Assests/SooqnaLogo.png'
import UserDropdownList from '../UserProfile/Dropdown';
import { Context } from '../../context/context';
import './Navbar.css';

function NavBar() {

    const states = useContext(Context);
    const { user} = states
    const products = states.cartProducts;
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Navbar expand="sm" style={{
            height: '60px',  background: "linear-gradient(59deg, #3A6073, #16222A)", position: 'fixed',
            zIndex: '2', width: '100%', top: '0'
        }}>
            <Container fluid>
                <img
                    src={Logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="Sooqna logo"
                    style={{
                        width: '60px',
                        height: '60px',
                        marginRight: '4rem'
                    }} />
                <Navbar.Brand href="/"><AiFillHome id='nav-icon' style={{
                                height: '1.8rem',
                                width: '2.5rem',
                                margin: '0 -10px 8px',
                                }}/> Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{ marginLeft: '-10rem'}}>
                    <Form className="d-flex" style={{ marginLeft: '13rem'}}>
                        {!isAuthenticated() ?
                            <React.Fragment>
                                <Button
                                    variant="outline-warning"
                                    style={{
                                        margin: '0 1rem 0 4rem',
                                        whiteSpace: 'nowrap'
                                    }}
                                    onClick={() => navigate('/signin')}>Sign In</Button>
                                <Button variant="outline-warning" style={{ whiteSpace: 'nowrap' }}
                                    onClick={() => navigate('/signup')}>Sign Up</Button>
                            </React.Fragment>
                            :
                            user.role !== 'admin' ?
                                <React.Fragment>
                            <BsFillCartFill id='nav-icon' onClick={() => { navigate('/mycart')}} style={{
                                height: 'auto',
                                    width: '2.5rem',
                                    margin: '0 5px',
                                }}
                                
                                />
                                    {products.length ?
                                    <i style={{
                                    marginLeft: '-4px', color: 'white', fontWeight: 'bolder',
                                    backgroundColor: 'red', width: '9%',height: '10%',borderRadius: '100%'
                                    }}>{products.length}</i>
                                    
                                    : null}
                                <MdOutlineFavorite id='nav-icon' onClick={() => navigate('/Wishlist')} style={{
                                    height: 'auto',
                                    width: '2.5rem',
                                    margin: '0 5px'}} />
                                    <Button
                                        variant="light"
                                         onClick={() => { navigate('/user') }} style={{
                                             margin: '1px 1rem',
                                             width: '49%',
                                             height: '2.5rem',
                                        }}>User Dashboard</Button>
                                <UserDropdownList />
                                </React.Fragment> :
                                <React.Fragment >
                                    <UserDropdownList style={{ margin: '0 0rem 0 15rem' }} />
                                </React.Fragment>}
                    </Form>
                </Navbar.Collapse> 
            </Container>
        </Navbar>
    );
}

export default NavBar;
