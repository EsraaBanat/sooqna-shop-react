import React from 'react';
import {
    Nav,
    NavDropdown
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../auth';
import { isAuthenticated } from '../../auth';

export default function UserDropdownList() {
    const { user } = isAuthenticated()
    const navigate = useNavigate();

    function handleLogOut() {
        logOut();
        navigate('/');
    }
    return (
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{
                maxHeight: '100px',
            }}
            navbarScroll>
            <NavDropdown
                title={`Hi , ${user.username}`}
                id="navbarScrollingDropdown"
                // style={{
                //     marginLeft: '6rem',
                // }}
            >
                <NavDropdown.Item onClick={() => { navigate('/userinfo'); }}>User Info</NavDropdown.Item>
                <NavDropdown.Item onClick={() => { navigate('/setting'); }}>Setting</NavDropdown.Item>
                <NavDropdown.Item
                onClick={handleLogOut}> Log Out
                </NavDropdown.Item>

            </NavDropdown>
        </Nav >
    )
}

