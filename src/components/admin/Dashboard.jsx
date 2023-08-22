import React, { useState } from 'react'
import SideBar from './SideBar'
import { Outlet, Route, Routes } from 'react-router-dom'
import Post from './Post'
import Update from './Update'

const Dashboard = () => {
    // Nested Routes
    const [currentPage, setCurrentPage] = useState([]);
    return (
        <div>
            <h2>Admin</h2>
            <Outlet context={[currentPage]} />
            
        </div>
    )
}

export default Dashboard