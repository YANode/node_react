import React from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigstar.png'


const DevicePage = () => {
    const device = {
        id: 2,
        name: "samsung galaxy",
        price: 500,
        rating: 5,
        img: "https://images.prom.ua/4138628744_w640_h640_samsung-galaxy-s7.jpg"
    }

    const description = [
        {id:1, title:'Main memory', description: '5 Gb'},
        {id:1, title:'Camera', description: '12 mpx'},
        {id:1, title:'Processor', description: 'Intel'},
        {id:1, title:'Number of cores', description: '2'},
        {id:1, title:'Battery', description: '4800'}
    ]


    return (
        <Container className={'mt-3'}>
            <Form className="d-flex justify-content-around align-items-center">


                <Col md={'4'} className="d-flex">
                    <Image width={300} height={300} src={device.img} style={{border:"5px solid grey"}} />
                </Col>


                <Col md={'4'}>
                    <Form className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{
                                background: (`url(${bigStar}) no-repeat center center`), width: 270, height: 270,
                                backgroundSize: "cover", fontSize: 64
                            }}
                        >
                            <div>{device.rating}</div>
                        </div>
                    </Form>
                </Col>


                <Col md={'4'} className="d-flex justify-content-end ">
                    <Card className="d-flex flex-column justify-content-around align-items-center"
                            style={{width:300, height:300, fontSize: 32, border:"5px solid grey"}}
                    >
                        <h2>From {device.price}$</h2>
                        <Button variant="outline-dark">Add in cart</Button>
                    </Card>
                </Col>
            </Form>


            <h1>Specifications: </h1>
            <Row className="d-flex flex-column mt-3">
                <>
                    {description.map((info, index) =>

                        <div  key={info.id} style={{background: index % 2 === 0 ? 'lightgrey' : 'transparent', padding: 10}}
                        >
                            {info.title}: {info.description}
                        </div>
                    )}
                </>
            </Row>

        </Container>
    );
};

export default DevicePage;