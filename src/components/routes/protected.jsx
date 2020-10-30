import React from 'react'
import {Route,Redirect} from 'react-router-dom'

export const Protected = ({component:Component,...rest}) => {
  const userLoggued=!!localStorage.getItem('token')
  if(!userLoggued){
    return <Redirect to="/login" />
  }
  return (
    <Route {...rest} render={Component} />
  )
}
