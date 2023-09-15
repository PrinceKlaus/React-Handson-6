import React from 'react';
import Home from './Home';
import Student from './Student';
import Contact from './Contact';
// import AddNewStudent from './AddNewStudent';
import EditStudent from './EditStudent';
import { useState } from 'react';
import Store from './Store';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import AddNewStudent from './AddNewStudent';
import './Style.css';


function RouteCompo(){
    const [stuData, setStuData] = useState([
       {id: 1, Name : "Prince", Age: 22, Course: "MERN", Batch: "Oct"},
       {id: 2, Name : "Preeti", Age: 22, Course: "MERN", Batch: "Nov"},
       {id: 3, Name : "Priya", Age: 22, Course: "MERN", Batch: "Dec"},
       {id: 4, Name : "Rhea", Age: 22, Course: "MERN", Batch: "Jan"},
       {id: 5, Name : "Uma", Age: 22, Course: "MERN", Batch: "July"},
       {id: 6, Name : "Lana", Age: 22, Course: "MERN", Batch: "Feb"}, 
    ])
    return(
        <>
        <BrowserRouter>
        <div className='NavBar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/student'>Student</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        </div>
        {/* <NavLink to='/addnewstudent'>AddNewStudent</NavLink> */}
        {/* <NavLink to='/editStudent'>EditStudent</NavLink> */}
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/student' element={
                <Store.Provider value={{data : stuData, dataFunc : setStuData}}>
                    <Student/>
                </Store.Provider>
            }></Route>
            <Route path='/addnewstudent' element={
                <Store.Provider value={{data : stuData, dataFunc : setStuData}}>
                    <AddNewStudent/>
                </Store.Provider>}></Route>
            <Route path='/editStudent' element={
                <Store.Provider value={{data : stuData, dataFunc : setStuData}}>
                    <EditStudent/>
                </Store.Provider>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RouteCompo;