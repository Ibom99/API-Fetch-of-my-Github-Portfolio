import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/" className='pages' >Home Page</Link>
      <Link to="/repositoryList" className='pages'> Repository List</Link>
      {/* <Link to="/testError" className='pages'>Test Error</Link> */}
    </div>
  )
}

export default Navigation
