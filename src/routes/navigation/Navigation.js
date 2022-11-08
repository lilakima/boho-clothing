import React, { Fragment } from 'react'
import { Link, Outlet } from "react-router-dom"

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo' to='/' >LOGO</Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>shop</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation