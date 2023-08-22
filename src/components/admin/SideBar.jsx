import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <ul>
        <li>
            <Link to="/admin/posts">Post</Link>
        </li>
        <li>
            <Link to="/admin/update">Update</Link>
        </li>
    </ul>
  )
}

export default SideBar