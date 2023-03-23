import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";



const Admin = () => {


    /**
     * 'brandVisible' - states whether the modal window is visible
     *  useState is a React Hook that lets you add a state variable to your component.
     */

    const [typeVisible, setTypeVisible ] = useState(false);
    const [brandVisible, setBrandVisible ] = useState(false);
    const [deviceVisible, setDeviceVisible ] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={()=>setTypeVisible(true)}
            >
                Add new type
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={()=>setBrandVisible(true)}
            >
                Add new brand
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={()=>setDeviceVisible(true)}
            >
                Add new device
            </Button>


            {/* modals window; onHide - function which closes the modal window*/}
            <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}> </CreateType>
            <CreateBrand show={brandVisible} onHide={()=>setBrandVisible(false)}> </CreateBrand>
            <CreateDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}> </CreateDevice>

        </Container>
            )};

            export default Admin;