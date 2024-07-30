import Header from './components/Header';
import './App.css';
import {Route,Routes } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navv from './components/Navv';
import Pickup from './components/Pickup';
import Four from './components/Four';
import Tract from './components/Tract';
import Foter from './components/Foter';
import Admin from './components/Admin';
import Main_manage from './components/Main_manage';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <div style={{padding:"5px"}}>     
        <Header/>        
      </div>
        <div style={{paddingTop:"15px"}}>
        <Navv/>          
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Main_manage" element={<Main_manage/>}/>
          <Route path="/Pickup" element={<Pickup/>}/>
          <Route path="/Four" element={<Four/>}/>
          <Route path="/Tract" element={<Tract/>}/>
    		</Routes>

        <Foter/>
        </div>
    </div>
  );
}

export default App;
