import React, { Component } from 'react'
import {Redirect,Route} from 'react-router-dom'


const ProtectedRoutes=({component:Cmp,...rest})=>(
    <Route
    {...rest}
     render={(props)=>(localStorage.getItem('login')?(
        <Cmp {...props}/>):<Redirect to='/login'/>
     )}/>
)

export default ProtectedRoutes