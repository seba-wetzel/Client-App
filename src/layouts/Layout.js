import React from 'react'
import Navbar from '../components/Navbar.js'

let Layout = (props)=> {
  return (

      <div>
        <div className="page-header center-block">
          <h1 className="container-fluid">Client App
            <small> {'\u00A0'}   for Adelpho's</small>
          </h1>
        </div>
        <div className="container-fluid" >
          <div className="row">
          <Navbar estado={'buscador'}></Navbar>
          {props.children}
        </div>
       </div>
      </div>
      
  )
}

export default Layout
