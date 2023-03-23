
import React, { useContext, useState} from "react";
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context);
    // for each device make a state 'info'- initially an empty array
    const [info, setInfo ] = useState([])

    //function which will add new properties to an array of characteristics that has already been created
    const addInfo = () => {
        setInfo ([...info, {title: '', description: '', number: Date.now()}])
    }

    //function which will delete properties
    const removeInfo = (number) => {

        //if the number of the item 'i.number' matches the number we passed in the parameter 'number'
        setInfo (info.filter(i=> i.number !== number))

    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new device
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Form className="d-flex  flex-column">
                    <div className="d-flex justify-content-start">

                        <Dropdown>
                            <DropdownToggle>Select type</DropdownToggle>
                            <DropdownMenu>
                                {device.types.map(type =>
                                    <DropdownItem key={type.id}> {type.name}</DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown className="ms-5">
                            <DropdownToggle>Select brand</DropdownToggle>
                            <DropdownMenu>
                                {device.brands.map(brand =>
                                    <DropdownItem key={brand.id}> {brand.name}</DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>
                    </div>


                    <FormControl className="mt-4"
                                 placeholder="Enter a device name"
                    />

                    <FormControl className="mt-4"
                                 placeholder="Enter a device price"
                    />

                    <FormControl className="mt-4"
                                 type="file"
                    />
                    <hr/>

                    {/*when the button is clicked, call 'info.map'*/}
                    <Button variant={"outline-dark"} onClick={addInfo}>Add a new property</Button>

                    {/*adds inputs: property name and property description*/}
                    { info.map (i  =>

                            <Row key={i.number}>
                                <Col md={4} className="mt-4">
                                    <Form.Control
                                        placeholder= 'Enter property name'
                                />
                                </Col>


                               <Col md={4} className="mt-4">
                                        <Form.Control
                                            placeholder= 'Enter property description'
                               />
                               </Col>

                                <Col md={4} className="mt-4">
                                    <Button
                                        variant={"outline-danger"}
                                        onClick={()=>removeInfo(i.number)}
                                    >
                                        Delete
                                    </Button>

                                </Col>

                            </Row>


                        )}

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={onHide}>Add</Button>
            </Modal.Footer>

        </Modal>
    );
};

export default CreateDevice;