import React,{useEffect} from 'react'
import {Banner} from '../../components/organisms/Banner'
import {connect} from 'react-redux'
import store from '../../redux/store'
import {getAllCourses} from '../../redux/actionsCreators'
import { Card } from '../organisms/Card'

const Courses = ({courses}) => {
  useEffect(()=>{
    store.dispatch(getAllCourses())
  },[])
  return (
    <>
    <Banner 
       color='dark-color'
       image={{
         src:"https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
         alt:"Banner Cursos"
       }}
       title="Nuestros Cursos"
       subtitle="Comienza desde cero hoy mismo en tu camino a dominar la tecnologia" 
    />
    {
      courses && 
      <main className="ed-grid m-grid-5">
        {
          courses.map(c => (
            <Card
              key={c.id}
              cardId={c.id}
              path="cursos"
              picture={c.picture}
              name={c.name}
            />
          ))
        }
      </main>
    }
  </>
  )
}

const mapStateToProps=(state)=>({
  courses:state.courseReducer.courses
})

export default connect(mapStateToProps,{})(Courses)
