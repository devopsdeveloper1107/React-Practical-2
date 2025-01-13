import React, { useCallback, useEffect, useState } from "react";

function Addmoreinput() {
 const[formvalue,setFormValue]=useState([{id:0,name:'',email:'',address:''}]);
 const [msg,setMsg]=useState('');
 const[isSubmitDisabled, setIsSubmitDisabled]= useState(true);

 const addFields=()=>{
  const newId=formvalue.length;
  setFormValue([...formvalue,{id:newId,name:'',email:'',address:''}]);
 }

 const handleInput=(index,event)=>{
  const data= [...formvalue];
  data[index][event.target.name]= event.target.value;
  setFormValue(data);
 }
 const removeFields=(index)=>{
 const removedata=formvalue.filter((_, i)=>i!==index);
 setFormValue(removedata);
 }

 const checkifanyvalue =useCallback(()=>{
 return formvalue.some((row)=>row.name.trim()!=='' || row.email.trim()!=='' || row.address.trim()!=='')
 },[formvalue]);

 useEffect(()=>{
  setIsSubmitDisabled(!checkifanyvalue())
 },[checkifanyvalue])

 const handelSubmit=(e)=>{
  e.preventDefault();
  console.log("submit data", formvalue)
  setMsg("Data saved successfully");
 }
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="mt-3 mb-3">
              {" "}
              Add Remove Multiple User Input fields{" "}
            </h5>
            <button className="btn btn-success btn-lg mb-3" onClick={addFields}>Add More</button>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody> 
                {formvalue?.map((udata,index)=>(

                                       
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter Username" 
                      value={udata.name} 
                     onChange={(event)=>handleInput(index,event)}  
                                     
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Enter Email"  
                      value={udata.email} 
                     onChange={(event)=>handleInput(index,event)}                      
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Enter Address"
                      value={udata.address} 
                     onChange={(event)=>handleInput(index,event)}                        
                    />
                  </td>
                  <td>  
                    {index!==0 &&(
                   <button className="btn btn-danger mx-2" onClick={()=>removeFields(index)}>Remove</button>  
                    )}                 
                                  
                  </td>
                </tr>
             ))}  
              </tbody>
            </table>
            <button className="btn btn-success btn-lg"
            disabled={isSubmitDisabled}
            onClick={handelSubmit}
            >Submit</button>
            {msg && (
              <p className="mt-3 text-success">{msg}</p>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Addmoreinput;
