import React, { useContext } from 'react';
import Store from './Store';
import { NavLink, useNavigate } from 'react-router-dom';
import './Style.css';

function Student(){
   const ContextData = useContext(Store)
   console.log(ContextData.data)
   const Navi = useNavigate();
    return(
        <>
        <h1>Student Details</h1>
        <button id="btn" onClick={()=>Navi('/addnewstudent')}>Add New Student</button>
        <table border='1px' className='Table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                {ContextData.data.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td>{item.Course}</td>
                            <td>{item.Batch}</td>
                            <td><NavLink to='/editstudent' state={{index}}>Edit</NavLink></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default Student;