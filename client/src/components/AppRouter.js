//page navigation logic
import React, {useContext} from 'react';

import {Routes, Route, Navigate} from "react-router-dom";
import {authRoutes} from "../routes";
import {publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/const";
import {Context} from "../index";

const AppRouter = () => {

    //hook 'useContext' will return the data passed in the value parameter of <Context.Provider>
    const {user, device} = useContext(Context)
    console.log(user, device)

    return (


        <Routes>
            {/*user is authorized,put 'isAuth' in the UserStore*/}
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path}
                       path={path}
                       element={<Component/>}
                       exact/>
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path}
                       path={path}
                       element={<Component/>}
                       exact/>
            )}

            <Route path='*' element={<Navigate to={SHOP_ROUTE}/>}/>


        </Routes>


    );
};

export default AppRouter;