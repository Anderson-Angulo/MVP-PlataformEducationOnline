import React, { useEffect } from 'react'
import { Banner } from '../organisms/Banner'
import store from '../../redux/store'
import { getAllTeachers } from '../../redux/actionsCreators'
import { connect } from 'react-redux'
import { Teacher } from '../organisms/Teacher'


const Teachers = ({ match, teachers }) => {
  useEffect(() => {
    store.dispatch(getAllTeachers())
  }, [match])

  return (
    <>
      <Banner
        color="third-color"
        image={{
          src: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          alt: "Banner Profesor"
        }}
        title="Nuestros Profesores"
        subtitle="Este plantel docente esta altamente calificado para guiarte en tu aprendizaje"
      />
      {
        teachers && 
        <main className="ed-grid m.grid-3 lg-grid-4 row-gap">
        {
          teachers.map(t => (
           <Teacher
            key={t.id}
            picture={t.picture}
            name={t.name}
            country={t.country}
           />
          ))
        }
      </main>
      }
    </>
  )
}
const mapStateToProps = (state) => ({
  teachers: state.teacherReducer.teachers
})

export default connect(mapStateToProps, {})(Teachers)
