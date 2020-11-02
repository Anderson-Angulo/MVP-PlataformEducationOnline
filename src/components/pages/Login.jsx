import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const authentication = e => {
  e.preventDefault()
  const form=e.target
  const data={
    "email":form.email.value,
    "password":form.password.value
  }
  axios.post(`${process.env.REACT_APP_API_USER}/login`,data,{
    headers:{
      "Content-Type":"application/json"
    }
  })
  .then(res=>{
    localStorage.setItem('token',res.data.token)
    window.location="/"
  })
  .catch(err=>{
    alert('Error al iniciar sesion')
  })
  
}

 const Login = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Iniciar Sesión</h1>
        <form onSubmit={authentication}>
          <div className="form___item l-block" >
            <label style={{
              color:'#2883E0',
              fontSize:'.96rem',
            }} htmlFor="email">
              Correo Electrónico
              <input required type="email" name="email" id="email" placeholder="Ingrese su email"/>
            </label>
          </div>
          <div className="form___item l-block">
            <label style={{
              color:'#2883E0',
              fontSize:'.96rem',
            }} htmlFor="password">
              Contraseña
              <input required type="password" name="password" id="password" placeholder="Ingrese su contraseña"/>
            </label>
          </div>
          <div className="form__item">
            <input type="submit" className="button full" value="Iniciar Sesión"/>
          </div>
        </form>
        <div className="center">
          <p>¿ No tienes cuenta de usuario ? <Link to="/register">Crear cuenta</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
