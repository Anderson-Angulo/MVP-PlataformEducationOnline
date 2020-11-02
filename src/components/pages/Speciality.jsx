import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import store from '../../redux/store'
import {getSpeciality} from '../../redux/actionsCreators'
import {Banner} from '../organisms/Banner'

 const Speciality = ({speciality}) => {
   useEffect(()=>{
    store.dispatch(getSpeciality(1))
   },[])
  return (
    <>
    {
      speciality &&
      <>
          <Banner
          color="dark-color"
          title={speciality.data.name}
          subtitle={speciality.data.subtitle}
          image={{
            src: "https://media.istockphoto.com/photos/businessman-looking-at-adhesive-note-on-board-picture-id1194075953",
            alt: speciality.data.name
          }}
          courseBanner
          poster={speciality.data.picture}
          info={speciality.data.information}
          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
                <div className="course-fectures ed-grid lg-grid-3 l-block s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white k l-section s-shadow-bottom">
                  <div>
                    <h3 className="t4">¿ Qué aprenderás ?</h3>
                    <ul>
                      {speciality.data.abilities.map(a=>(
                        <li key={a.id}>{a.description}</li>
                      ))}
                    </ul>
                  </div>
                  <div >
                    <h3 className="t4">Conocimientos Previos</h3>
                    <ul>
                      {speciality.data.knowledge.map(a=>(
                          <li key={a.id}>{a.description}</li>
                        ))}
                    </ul>
                  </div>
                  <div >
                    <h3 className="t4">Nivel</h3>
                    <p>{speciality.data.level}</p>
                  </div>
                </div>
                <h2 className="center l-block">Temario de la Especialidad</h2>
                <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {
                  speciality.data.courses.map(c => (
                    <div className="course-class l-section" key={c.id}>
                      <div className="ed-grid m-grid-3">
                        <img src={c.picture} alt={c.name}/>
                        <div className="ml-cols-2">
                          <h3>{c.name}</h3>
                          <p>{c.information}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </main>
      </>
    }
  </>
  )
}

const mapStateToProps=(state)=>({
  speciality:state.specialityReducer.speciality
})
export default connect(mapStateToProps,{})(Speciality)
