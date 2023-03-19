import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Form} from "react-bootstrap";




const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Form className="d-flex justify-content-start flex-wrap" >
            <>
                {device.brands.map(brand =>

                    <Card className="p-2"
                        style = {{cursor:'pointer'}}
                        key={brand.id}
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                    >
                        {brand.name}
                    </Card>
                )}
            </>

        </Form>

    )});



export default BrandBar;