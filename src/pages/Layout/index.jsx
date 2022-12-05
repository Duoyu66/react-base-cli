import React, {Component} from 'react';
import Lay from "@/pages/Layout/lay";
import {Outlet} from "react-router-dom";

class Layout extends Component {
    render() {
        return (
            <div>
                <Lay>

                    <Outlet />

                </Lay>
            </div>
        );
    }
}

export default Layout;