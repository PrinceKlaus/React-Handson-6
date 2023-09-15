import React, { useContext } from "react";
import Store from "./Store";
import { useLocation, useNavigate } from "react-router-dom";
import './Style.css';
function EditStudent(){
    const Navigate = useNavigate();
    const indexData = useLocation().state.index;
    const ContextData = useContext(Store)
    console.log(indexData)

    const updateData = {
        Name : ContextData.data[indexData].Name,
        Age : ContextData.data[indexData].Age,
        Course : ContextData.data[indexData].Course,
        Batch : ContextData.data[indexData].Batch
    }

    function handleChange(e){
        updateData[e.target.name] = e.target.value;
    }

    function handleUpdate(){
        ContextData.data[indexData] = updateData;
        Navigate('/student')
    }
    
        return(
        <>
        <div className="Table2">
        <label className="Name">Name :</label>
        <input className="Name-input" type="text" name="Name" placeholder={ContextData.data[indexData].Name}  onChange={handleChange}/> <br/>

        <label className="Age">Age :</label>
        <input className="Age-input" type="number" name="Age" placeholder={ContextData.data[indexData].Age}  onChange={handleChange}/> <br/>

        <label className="Course">Course :</label>
        <input className="Course-input" type="text" name="Course" placeholder={ContextData.data[indexData].Course}  onChange={handleChange}/> <br/>

        <label className="Batch">Batch :</label>
        <input className="Batch-input" type="text" name="Batch" placeholder={ContextData.data[indexData].Batch} onChange={handleChange}/> <br/>

        <button className="btn2" onClick={handleUpdate}>Update Student</button>
        <button className="btn3" onClick={() =>Navigate('/student')}>Go Back</button>
        </div>
        </>
    )
}

export default EditStudent;