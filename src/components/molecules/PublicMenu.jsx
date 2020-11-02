import React from 'react'
import {NavLink} from 'react-router-dom'

export const PublicMenu = () => {
  return (
    <ul>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/register">Registro</NavLink></li>
    </ul>
  )
}
