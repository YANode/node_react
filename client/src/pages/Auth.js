import React from 'react';
import {Button, Card, Container, Form, FormControl, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/const";
import {NavLink, useLocation} from "react-router-dom";

const Auth = () => {
    //get query parameters from the route string
    const location = useLocation()

    //page login
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto"> {isLogin ? "Log in" : "Sing in"} </h2>
                <Form className="d-flex flex-column">
                    {/*input*/}
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your password"
                    />

                    <Row>
                        <div className="d-flex justify-content-between mt-3 col-12">
                            {isLogin ?
                                <div>
                                    No account?{<NavLink to={REGISTRATION_ROUTE}> Sing up at!</NavLink>}
                                </div>
                                :
                                <div>
                                    Have an account?{<NavLink to={LOGIN_ROUTE}> Log in!</NavLink>}
                                </div>
                            }
                            <Button
                              variant={"outline-success"}
                            >

                                {isLogin ? 'Sing in' : 'Log in'}
                            </Button>
                        </div>
                    </Row>


                </Form>
            </Card>
        </ Container>
    );
};

export default Auth;