import React, {useState} from "react";

function Enablebutton()
{
const[formValue, setFormValue]= useState({username:'', email:'', phone:'', address:'', status:''});
const[disable, setDisable]=useState('typing');

const handleInput=(e)=>{
    const {name, value}= e.target;
    setFormValue({...formValue, [name]:value});
}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formValue);   
    setDisable('submitted');

}
return(
<React.Fragment>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <h5 className="mt-2">New Form</h5>
            <p className="text-success"> {  } </p>
            <form onSubmit={  handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-lable">Username</label>
                            <input type="text" name="username" className="form-control" value={formValue.username} onChange={ handleInput} />
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
                            <input type="text" name="address" className="form-control" value={formValue.address} onChange={ handleInput} />
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
                            <button className="btn btn-success btn-lg"
                            disabled={formValue.username.length===0 || 
                                    formValue.email.length===0 || 
                                    formValue.phone.length===0 ||
                                    formValue.address.length===0 ||
                                    formValue.status.length===0 ||
                                    disable==='submitted'
                            
                            }
                            
                            >Submit</button>
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

export default Enablebutton;