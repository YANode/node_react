//this file performs the deployment of the React application

import React, {createContext} from "react";//if you plan to use JSX in your .js file
import ReactDOM from "react-dom/client";//import a separate part of the 'react' library to work with DOM

import App from "./App";
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

//transmits data using the component tree without passing props at intermediate levels
export const Context = createContext(null)

//create a root in which to draw our application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //provider component is used to transfer data down the tree,
    // all nested components will be able to access the value:{}
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore()
    }}>
        <React.StrictMode>
            {/*component that contains our application*/}
            <App/>
        </React.StrictMode>


    </Context.Provider>
);
