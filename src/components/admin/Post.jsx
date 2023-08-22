import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Post = () => {
    const [currentPage] = useOutletContext();
  return (
    <div>Post</div>
  )
}

export default Post