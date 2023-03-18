import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/const";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {
    const {user} = useContext(Context);
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>BuyDevice</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"}>Admin panel</Button>
                        <Button variant={"outline-light"} className='ms-2'>Log in</Button>
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