import React,{useEffect} from 'react'
import { Banner } from '../organisms/Banner'
import { Card } from '../organisms/Card'
import store from '../../redux/store'
import { getAllSpecialities } from '../../redux/actionsCreators'
import {connect} from 'react-redux'
const Specialities = ({specialities}) => {
  useEffect(()=>{
    store.dispatch(getAllSpecialities())
  },[])
  return (
    <>
      <Banner 
         color='first-color'
         image={{
           src:"https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
           alt:"Banner Especialidades"
         }}
         title="Especialidades"
         subtitle="Domina una tecnologia con las rutas de aprendizaje" 
      />
      {
        specialities && 
        <main className="ed-grid m-grid-3"> 
          {
            specialities.map(s=>(
              <Card
              key={s.id}
              cardId={s.id}
              path="especialidades"
              picture={s.picture}
              name={s.name}
            />
            ))
          }
        </main>
      }
  
    </>
  )
}
const mapStateToProps=(state)=>({
  specialities:state.specialityReducer.specialities
})
export default connect(mapStateToProps,{})(Specialities) 
