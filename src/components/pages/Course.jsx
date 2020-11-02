import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getCourse } from '../../redux/actionsCreators'
import { Banner } from '../organisms/Banner'



const Course = ({ course, match }) => {
  useEffect(() => {
    store.dispatch(getCourse(1))
  }, [])
  return (
    <>
      {
        course &&
        <>
          <Banner
            color="dark-color"
            title={course.name}
            subtitle={course.subtitle}
            image={{
              src: "https://media.istockphoto.com/photos/businessman-looking-at-adhesive-note-on-board-picture-id1194075953",
              alt: course.name
            }}
            courseBanner
            poster={course.picture}
            especialidad={course.data.specialities[0]}
            info={course.information}
          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-fectures ed-grid lg-grid-3 l-block s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white k l-section s-shadow-bottom">
                <div>
                  <h3 className="t4">¿ Qué aprenderás ?</h3>
                  <ul dangerouslySetInnerHTML={{ __html: course.you_learn }} />
                </div>
                <div >
                  <h3 className="t4">Conocimientos Previos</h3>
                  <ul dangerouslySetInnerHTML={{ __html: course.requirements }} />
                </div>
                <div >
                  <h3 className="t4">Nivel</h3>
                  <p>{course.level}</p>
                </div>
              </div>
              <h2 className="center l-block">Temario del Curso</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {
                  course.data.classes.map(cl => (
                    <div className="course-class l-section" key={cl.class.id}>
                      <h3>{cl.class.title}</h3>
                      <p>{cl.class.description}</p>
                      <ul>{
                        cl.subjects.map(s => (
                          <li>{s.subject.title}</li>
                        ))
                      }</ul>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="lg-cols-3 l-section">
            </div>
          </main>
        </>
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  course: state.courseReducer.course
})

export default connect(mapStateToProps, {})(Course)
