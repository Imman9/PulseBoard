import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './auth/login';
import SignUp from './auth/signUp';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';

function App() {
  return ( 
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>

          {/* <Route path='/signUp' element={<SignUp/>}/> */}
        </Routes>
    </div>
 
  )
}

export default App
