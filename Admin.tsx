import './admin.css';
import React from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const AdminDashboard = () => {

    function addItem(){

    }

    return (
        <div id='mainAdmin'>
            <div id='headerAdmin'>
                <input type='text' id='adminHSearch' placeholder='Search For Item'/>
                <button id='hAdminBtn1' className='aHbtns'>Update News</button>
                <button id='hAdminBtn2' className='aHbtns'>Members</button>
            </div>
            <div id='centerAdmin'>
                <div id='leftPanelAdmin'>
                    <Link to='add' className='lPAbtn'>Add Item</Link>
                    <Link to='sales' className='lPAbtn'>Sales</Link>
                    <button className='lPAbtn'></button>
                    <button className='lPAbtn'></button>
                    <button className='lPAbtn'></button>
                    <button className='lPAbtn'></button>
                    <button className='lPAbtn'></button>
                    <button className='lPAbtn'></button>
                    <button className='lPAbtn'></button>
                    <button className='lPAbtn'></button>
                    <button className='lPAbtn'></button>
                    <button className='lPAbtn'></button>
                    <button className='lPAbtn'></button>
                    <button className='lPAbtn'>Log Out</button>
                </div>
                <div id='rightPanelAdmin'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    )
}

export default AdminDashboard;