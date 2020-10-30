import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './pages/Home';
import Specialities from './pages/Specialities';
import Speciality from './pages/Speciality';
import Courses from './pages/Courses';
import Course from './pages/Course';
import Teachers from './pages/Teachers';
import Fragment from './pages/Fragment';
import Page404 from './pages/Page404'
import  {Protected}  from './routes/protected';
import Public from './routes/public'
import Login from './pages/Login';
import Register from './pages/Register';
import {Header} from './organisms/Header'

const App=()=>(
  
  <Router>
      <Header/>
      <Switch>
          <Protected path="/" exact component={Home} />      
          <Protected path="/especialidades/:id" component={Speciality}/>
          <Protected path="/cursos/:id" component={Course}/>
          <Protected path="/profesores" component={Teachers}/>
          <Protected path="/clase/:id" component={Fragment}/>
          <Protected path="/especialidades" component={Specialities}/>
          <Protected path="/cursos" component={Courses}/>
          <Public path="/login" component={Login} />
          <Public path="/register" component={Register} />
          <Route component={Page404}/>
        </Switch>
  </Router>

)

export default App;
