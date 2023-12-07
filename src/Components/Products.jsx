import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Products() {
    return (
        <>
            <div>
                <input type="text" placeholder='Search the products..' />
            </div>
            <nav className='subNavbar'>
                <NavLink to="featured">Feature</NavLink>
                <NavLink to="new">New</NavLink>
                <NavLink to="custom">Custom</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default Products