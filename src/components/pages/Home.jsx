import React, { useEffect } from 'react'
import {Banner} from '../organisms/Banner'
import {connect} from 'react-redux'
import store from '../../redux/store'
import {getAllPosts} from '../../redux/actionsCreators'
import { Publication } from '../organisms/Publication'

 const Home = ({posts}) => {
  useEffect(()=>{
    store.dispatch(getAllPosts())
  },[])
  return (
    <>
      <Banner 
      color="dark-color"
      image={{
        src:"https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        alt:"Background image"
      }}
      title="Bienvenido a la experiencia mas increible de educacion online"
      subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti. Sabemos que estas buscando contenido de calidad. Llegaste al lugar correcto"
      home
      poster="https://edteam-media.s3.amazonaws.com/courses/small/5ffc4c77-cbc3-476d-9c18-e180882a52c9.jpg"
    />
    <main className="ed-grid m-grid-3">
      <div className="l-section m-cols-2">
        <h2>Ultimas publicaciones</h2>
        {
          posts ?
          <div>
            {
              posts.map(p=>(
                <Publication
                author={p.author}
                title={p.title}
                fecha={p.fecha}
                content={p.content}
                key={p.id}
                />
              ))
            }
          </div>
          :
          <p>No existen publicaciones</p>
        }
      </div>
      <div>
        <h3>Lista de categorias</h3>
        <ul className="data-list">
          <li><span>React.js</span></li>
          <li><span>React Native</span></li>
          <li><span>Angular</span></li>
          <li><span>Vue.js</span></li>
          <li><span>HTML</span></li>
        </ul>
      </div>
    </main>
    </>
  )
}

const mapStateToProps=(state)=>({
  posts:state.postsReducer.posts
})
export default connect(mapStateToProps,{})(Home)
