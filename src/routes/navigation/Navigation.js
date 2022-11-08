import React, { Fragment } from 'react'
import { Link, Outlet } from "react-router-dom"
import './Navigation.style.scss'
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        shop
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation