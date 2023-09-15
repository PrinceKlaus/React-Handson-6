import React, { useContext } from "react";
import Store from "./Store";
import { useNavigate } from "react-router-dom";
import './Style.css';
function AddNewStudent(){
    const stuData = useContext(Store);
    const Navi = useNavigate();
    const Navii = useNavigate();
    console.log(stuData);

    const newStu = {
      Name : '',
      Age : '',
      Course : '',
      Batch : ''
    }
    const changeHandle = (e) =>{
        newStu[e.target.name] = [e.target.value]
    }

    function handleClick(){
        stuData.data.push(newStu)
        Navi('/student')
    }

    return(
        <>
        <h1>Add New Student</h1>
        <label className="Name">Name</label>
        <input className="Name-input" type="text" name="Name" placeholder="Enter Name" onChange={changeHandle} /> <br/>

        <label className="Age">Age</label>
        <input className="Age-input" type="number" name="Age" placeholder="Enter Age" onChange={changeHandle} /> <br/>

        <label className="Course">Course</label>
        <input className="Course-input" type="text" name="Course" placeholder="Enter Course" onChange={changeHandle} /> <br/>

        <label className="Batch">Batch</label>
        <input className="Batch-input" type="text" name="Batch" placeholder="Enter Batch" onChange={changeHandle} /> <br/>
        <button className="btn2" onClick={handleClick}>Add New Student</button>
        <button className="btn3" onClick={() =>Navii('/student')}>Go Back</button>
        </>
    )
}

export default AddNewStudent;