import { Navigate, Route ,Routes } from 'react-router-dom';
import './App.css';
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';
import { EditTeacherUser } from './Components/EditTeacherUser';
import { Nopage } from './Components/NoPage';
import UserComponents from './Components/UserComponents';
import TeacherComponents from './Components/TeacherComponents';
import TeacherUser from './Components/TeacherUser';
import { UserDetails } from './Components/UserDetails';
import { TeacherDetails } from './Components/TeacherDetails';




function App() {

  return (
    <div className="App">
      <Routes>
         <Route exact path="/" element={ <UserComponents 
        
        />}>
        
         </Route>
         <Route exact path="/teacher" element={ <TeacherComponents 
       />}>
        
         </Route>

         <Route exact path="/add/user" element={ <AddUser
          />}>
         
         </Route>

         <Route exact path="/teacher/user" element={<TeacherUser
         />}>
         </Route>

         <Route exact path="/edit/:id" element={<EditUser
          />}>
         </Route>

         <Route exact path="/teacherEdit/:id" element={<EditTeacherUser
          />}>
         </Route>

         <Route exact path="/user/:id" element={<UserDetails/>}>
            
          </Route>

        
          <Route exact path="/teacher/:id" element={<TeacherDetails />}>
            
          </Route>

          <Route exact path="/user" element={  <Navigate exact path='/'/>}>
            
          </Route>

          <Route exact path="/teacher" element={<Navigate exact path='/teacher'/>}>
          </Route>

          <Route exact path="*" element={<Nopage/>}>
              
          </Route>

      </Routes>
   
    </div>
  );
}

export default App;
