import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/const";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate()
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>BuyDevice</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Admin panel</Button>
                        <Button variant={"outline-light"} className='ms-2' onClick={() => navigate(LOGIN_ROUTE)}>Log out</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Sing in</Button>
                    </Nav>
                }
        </Container>
        </Navbar>
</>
)});

export default NavBar;