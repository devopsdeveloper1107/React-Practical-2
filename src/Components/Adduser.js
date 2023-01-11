import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Adduser()
{
    const [formValue, setFormValue]= useState({username:'', email:'',phone:'',address:'',status:''});
    const [message, setMessage]= useState();
    const navigate= useNavigate();
    const handleInput=(e)=>{
     const {name, value}= e.target;
     setFormValue({...formValue, [name]:value});
    }
    const handleSubmit= async(e)=>{
       e.preventDefault();
       const allInputvalue= { username: formValue.username, email:formValue.email, phone:formValue.phone, address:formValue.address, status:formValue.status}; 

      let res= await fetch("http://localhost:5000/api/adduser",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(allInputvalue)
      });
      let resjson= await res.json();
      if(res.status===200)
      {
        setMessage(resjson.success);
        setTimeout(()=>{
            navigate('/userdata');
        }, 2000);

      } else{
        setMessage("Some Error Occured");
      }

       //console.log(allInputvalue);
    }
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">Add New User</h5>
                    <p className="text-success"> { message } </p>
                    <form onSubmit={ handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Username</label>
                                    <input type="text" name="username" className="form-control" value={formValue.username} onChange={ handleInput}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Email</label>
                                    <input type="text" name="email" className="form-control" value={formValue.email} onChange={ handleInput}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Phone No</label>
                                    <input type="text" name="phone" className="form-control" value={formValue.phone} onChange={ handleInput}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Address</label>
                                    <input type="text" name="address" className="form-control" value={formValue.address} onChange={ handleInput}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Status</label>
                                    <select className="form-control" name="status" value={formValue.status} onChange={ handleInput}>
                                        <option value="">--Please Select--</option>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-lable"></label>
                                    <button type="submit" className="btn btn-success btn-lg">Submit</button>
                                     </div>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Adduser;
