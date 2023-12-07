
import './App.css';
import {Routes, Route} from "react-router-dom";
import Footer from "./components/public/footer";
import Main from './components/public/main';
import Navbar from './components/public/navbar';
import Detail from './components/public/detail';
import { UserForm } from './components/public/userForm';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path={"/"} element={<Main/>}/>
        <Route path={"/details/:id"} element={<Detail/>}/>
        <Route path={"/user-form"} element={<UserForm/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
      

      
 
 

 

 

    
  
