import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import styled from './App.module.css';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './views/About.jsx';
import Detail from './views/Detail.jsx';
import Form from './components/Form.jsx';
import Favorites from './components/Favorites.jsx';

function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
 
   const EMAIL = 'dannagonim@gmail.com';
   const PASSWORD = 'danna1';
 
   function login(userData) {
     if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
     }
   }
 
   useEffect(() => {
     !access && navigate('/');
   }, [access]);
 
   const onSearch = (id) => {
     axios(`https://rickandmortyapi.com/api/character/${id}`)
       .then(({ data }) => {
         if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
         } else {
           window.alert('¡No hay personajes con este ID!');
         }
       })
       .catch((error) => {
         window.alert('¡No hay personajes con este ID!');
       });
   };
 
   const onClose = (id) => {
     const charactersFiltered = characters.filter(
       (character) => character.id !== Number(id)
     );
     setCharacters(charactersFiltered);
   };
 
   return (
     <div className={styled.App} data-route={location.pathname}>
       <div className={styled['background-image']} />
       <div className={styled['content-wrapper']}></div>
       {location.pathname !== '/' ? <Nav onSearch={onSearch} /> : null}
 
       <Routes>
         <Route path="/" element={<Form login={login} />} />
         <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
         <Route path="/about" element={<About />} />
         <Route path="/detail/:id" element={<Detail />} />
         <Route path="/favorites" element={<Favorites />} />
       </Routes>
       
     </div>
   );
 }
 
 export default App;