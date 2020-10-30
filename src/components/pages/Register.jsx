import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const register=async (e)=>{
  e.preventDefault()
  const form=e.target;
  const data={
    "name":form.name.value,
    "email":form.email.value,
    "password":form.password.value
  }
  await axios.post("https://api-edteam.alejogs4.now.sh/signup",data,{
    headers:{
      "Content-type":"application/json"
    }
  })
  alert('Usuario Creado')
  window.location="/login"
  
}


const Register = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Regístrate</h1>
        <form onSubmit={register}>
          <div className="form___item">
            <label htmlFor="name">
              Nombre de Usuario
              <input required type="text" name="name" id="name" placeholder="Ingrese su nombre"/>
            </label>
          </div>
          <div className="form___item">
            <label htmlFor="email">
              Correo Electrónico
              <input required type="email" name="email" id="email" placeholder="Ingrese su email"/>
            </label>
          </div>
          <div className="form___item">
            <label htmlFor="password">
              Contraseña
              <input required type="password" name="password" id="password" placeholder="Ingrese su contraseña"/>
            </label>
          </div>
          <div className="form__item">
            <input type="submit" className="button full" value="Iniciar Sesión"/>
          </div>
        </form>
        <div className="center">
          <p>¿ Ya tienes cuenta de usuario ? <Link to="/login">Iniciar Sesión</Link></p>
        </div>
      </div>
    </div>
  )
}
export default Register
