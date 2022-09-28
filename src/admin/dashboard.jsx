import React from 'react'
import './dashboard.css'
import DataGridDemo from './Account/Account'
import ManageList from './ManageList/ManageList'
import NavbarAdmin from './NavbarAdmin/NavbarAdmin'

const Dashboard = () => {
  return (
    <div>
      <NavbarAdmin />
      <div className='maincore'>
        <ManageList />
        <DataGridDemo className="userad"/>
      </div>
    </div>
  )
}

export default Dashboard
