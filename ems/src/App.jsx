import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user,setUser]=useState(null)


  const handleLogin = (email,password)=>{
    if(email== 'admin@me.com' && password=='123'){
      setUser('admin');
    }else if(email== 'user@me.com' && password=='123'){
      setUser('employee');
    }
    else{
      alert("invalid credentials")
    }
  }


  const data =useContext(AuthContext);


  return (
    <div className='bg-stone-600 '>
    
      {!user? <Login handleLogin={handleLogin} /> : ''}
      {user =='admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}

    </div>
  )
}

export default App
//1:51:37

