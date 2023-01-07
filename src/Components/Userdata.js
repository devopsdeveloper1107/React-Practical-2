import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Userdata()
{
    const [userData, setUserdata]= useState([]);

    useEffect( ()=>{
        const getUserdata= async()=>{
            const reqData= await fetch("http://localhost:5000/api/user");
            const resData= await reqData.json();
            setUserdata(resData);
            console.log(resData);
        }
        getUserdata();
    },[]);
 
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">User Data</h5>
                    
                        <table className="table table-bordered table-stripe">
                        <thead>
                        <tr>
                        <th>Sr. No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                         { userData.map( (userData, index)=>(                           
                        <tr key={index}>
                        <td>{index+1} </td>
                        <td>{ userData.username } </td>
                        <td>{ userData.email } </td>
                        <td>{ userData.phone } </td>
                        <td>{ userData.address } </td>
                        <td>{ userData.status===1?"Active":"Inactive" } </td>
                        <td>
                         <Link to="/editUser" className="btn btn-success mx-2">Edit</Link>
                         <Link to="/deleteUser" className="btn btn-danger">Delete</Link>
                        </td>
                        </tr>
                        )) 
                           }
                        
                        </tbody>
                        </table>
                            
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Userdata;