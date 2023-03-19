import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

//'observer' - mobx monitored the status
const TypeBar = observer(() => {
    //'useContext' - allows only to read the context and subscribe to its changes
    const {device} = useContext(Context)

    return (
        <ListGroup>
            {/*let's run through each type in our DeviceStore and draw a ListGroup item component for each type*/}
            {device.types.map(type =>

                // component
                <ListGroup.Item
                    style = {{cursor:'pointer'}}
                    //if the 'type id' of the iteration item is the same as the type we saved in DeviceStore
                    active = {type.id === device.selectedTypes.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                 {type.name}
                </ListGroup.Item>
     )}
        </ListGroup>
    );
});

export default TypeBar;