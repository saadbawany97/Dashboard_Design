import React from 'react'
import dashboardicon from '../image/dashboard.svg'

function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-frstpart'>
                <a href='#' className='sidebar-icon' active><img className='side-icon-img' height='25px' width='25px' src={dashboardicon} /> </a>
            </div>
            <div className='sidebar-frstpart'>
                <a href='#' className='sidebar-icon'><img  className='side-icon-img'  height='25px' width='25px' src={dashboardicon} /> </a>
                <a href='#' className='sidebar-icon'><img  className='side-icon-img'  height='25px' width='25px' src={dashboardicon} /> </a>
            </div>

            <div className='sidebar-frstpart'>
                <a href='#' className='sidebar-icon'><img  className='side-icon-img'  height='25px' width='25px' src={dashboardicon} /> </a>
                <a href='#' className='sidebar-icon'><img  className='side-icon-img'  height='25px' width='25px' src={dashboardicon} /> </a>
                <a href='#' className='sidebar-icon'><img  className='side-icon-img'  height='25px' width='25px' src={dashboardicon} /> </a>
                <a href='#' className='sidebar-icon '><img  className='side-icon-img'  height='25px' width='25px' src={dashboardicon} /> </a>
                <a href='#' className='sidebar-icon'><img  className='side-icon-img'  height='25px' width='25px' src={dashboardicon} /> </a>
                <a href='#' className='sidebar-icon'><img  className='side-icon-img'  height='25px' width='25px' src={dashboardicon} /> </a>
                <a href='#' className='sidebar-icon'><img  className='side-icon-img'  height='25px' width='25px' src={dashboardicon} /> </a>
                <a href='#' className='sidebar-icon'><img  className='side-icon-img'  height='25px' width='25px' src={dashboardicon} /> </a>
                <a href='#' className='sidebar-icon'><img  className='side-icon-img'  height='25px' width='25px' src={dashboardicon} /> </a>
            </div>
        </div>
    )
}

export default Sidebar
