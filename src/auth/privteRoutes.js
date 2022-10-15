import React from "react";
import { isAuthenticated } from "./index";
import { Navigate } from 'react-router-dom';


export { PrivateRoute };

function PrivateRoute({ children }) {
    if (!isAuthenticated()) {
        return <Navigate to="/signin"/>
    }
    return children;
}