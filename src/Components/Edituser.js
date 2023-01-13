import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";

function Edituser()
{
    const {id}= useParams();
    const navigate= useNavigate();
    const [editUser, setEditUser]= useState({username:'', email:'',phone:'',address:'',status:''});
    const [message, setMessage]= useState('');

        useEffect(()=>{
        const getUser= async()=>{
            const reqData= await fetch(`http://localhost:5000/api/edituser/${id}`);
            const resData= await reqData.json();
            setEditUser(resData);
        }
        getUser();
    },[id]);

    const handleInput= (e)=>{
        setEditUser({...editUser, [e.target.name]:e.target.value});
    }
    const handleUpdate= async(e)=>{
        e.preventDefault();
        const editInputvalue= {username:editUser.username, email:editUser.email, phone:editUser.phone, address:editUser.address, status:editUser.status };
        console.log(editInputvalue);  
        let res=  await fetch("http://localhost:5000/api/updateuser/"+id,{
            method:"PUT",
            headers:{'content-type':'application/json'},
            body: JSON.stringify(editInputvalue)
        });  

        let resjson = await res.json();
        if(res.status===200)
        {
            setMessage(resjson.success);
          setTimeout(() => {
            navigate('/userdata'); 
          }, 2000);        

        } else {
            setMessage("Some error Occured");
        }

    }
    
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">Edit User { id }</h5>
              <p className="text-success"> { message} </p>
                    <form onSubmit={ handleUpdate}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                   <label className="form-lable">Username</label>
                                   <input type="text" name="username" className="form-control" value={ editUser.username} onChange={ handleInput } />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                   <label className="form-lable">Email</label>
                                   <input type="text" name="email" className="form-control" value={ editUser.email} onChange={ handleInput }/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                   <label className="form-lable">Phone No</label>
                                   <input type="text" name="phone" className="form-control" value={ editUser.phone} onChange={ handleInput }/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                   <label className="form-lable">Address</label>
                                   <input type="text" name="address" className="form-control" value={ editUser.address} onChange={ handleInput }/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                   <label className="form-lable">Status</label>
                                  <select name="status" className="form-control" value={ editUser.status} onChange={ handleInput }>
                                    <option value="">--Please Select--</option>
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="mb-3">
                                   <label className="form-lable"></label>
                                  <button name="submit" className="btn btn-success btn-lg">Update</button>
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

export default Edituser;
