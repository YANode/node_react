import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../assets/star1 .jpeg"
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/const";

const DeviceItem = ({device}) => {

    const navigate = useNavigate() //allows you to move dynamically through pages

    return (
        <Col md={'3'} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>

            <Card style={{width: 150, cursor: 'pointer'}} border={"light"} className="mt-2" >
                <Image width={150} height={150} src={device.img}/>
                <div className="d-flex justify-content-between align-items-center text-black-50 mt-2">
                    <div>Samsung...</div>

                <div className="d-flex align-items-center">
                    <div>{device.rating}</div>
                    <Image width={18} height={18} src={star}/>
                </div>
                </div>
                <div style={{fontSize: 13}}>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;