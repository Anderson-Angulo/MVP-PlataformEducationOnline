import axios from 'axios'
import { 
        GET_ALL_POSTS,
        GET_ALL_COURSES,
        GET_ALL_SPECIALITIES,
        GET_ALL_TEACHERS, 
        GET_COURSE, 
        GET_POST, 
        GET_SPECIALITY,
        GET_FRAGMENT} from './actions'

const API_URL=process.env.REACT_APP_API_URL


export const getAllPosts=()=>async dispatch=>{
  const posts=await axios.get(`${API_URL}/posts`)
  return dispatch({
    type:GET_ALL_POSTS,
    posts:posts.data
  })
}

export const getAllSpecialities=()=>async dispatch=>{
  const specialities=await axios.get(`${API_URL}/especialidades`)
  return dispatch({
    type:GET_ALL_SPECIALITIES,
    specialities:specialities.data
  })
}

export const getAllCourses=()=>async dispatch=>{
  const courses=await axios.get(`${API_URL}/cursos`)
  return dispatch({
    type:GET_ALL_COURSES,
    courses:courses.data
  })
}

export const getAllTeachers=()=>async dispatch=>{
  const teachers=await axios.get(`${API_URL}/profesores`)
  return dispatch({
    type:GET_ALL_TEACHERS,
    teachers:teachers.data
  })
}

// petitions of a only data


export const getPost=(id)=>async dispatch=>{
  const post=await axios.get(`${API_URL}/posts/${id}`)
  return dispatch({
    type:GET_POST,
    post:post.data
  })
}
export const getSpeciality=(id)=>async dispatch=>{
  const speciality=await axios.get(`${API_URL}/especialidad/${id}`)
  return dispatch({
    type:GET_SPECIALITY,
    speciality:speciality.data
  })
}
export const getCourse=(id)=>async dispatch=>{
  const course=await axios.get(`${API_URL}/curso/${id}`)
  return dispatch({
    type:GET_COURSE,
    course:course.data
  })
}
export const getFragment=(id)=>async dispatch=>{
  const fragment=await axios.get(`${API_URL}/clases/${id}`)
  return dispatch({
    type:GET_FRAGMENT,
    fragment:fragment.data
  })
}
