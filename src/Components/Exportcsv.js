import React,{ useState, useEffect} from "react";

// npm install --save react-csv-downloader (please install )
import CsvDownloader from 'react-csv-downloader';

function ExportCsv()
{
    const[userData, setUserdata]= useState([]);

    useEffect( ()=>{
        const getUserdata= async()=>{
            const requestData= await fetch("http://localhost:5000/api/user");
            const responceData= await requestData.json();
            //console.log(responceData);
            setUserdata(responceData);

        }
        getUserdata();
    },[]);
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="mt-3">Export Data in Csv</h5>
                         <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone No</th>
                                    <th>Address</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData.map((uData, index)=>(
                                        <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{uData.username}</td>
                                        <td>{uData.email}</td>
                                        <td>{uData.phone}</td>
                                        <td>{uData.address}</td>
                                        <td>{uData.status===1?"Active":"Inactive"}</td>
    
                                    </tr>
                                    ))
                                }
                               
                            </tbody>

                         </table>                      
                     <CsvDownloader 
                     datas={userData}
                     text="Export CSV"
                     filename={`userdata_`+new Date().toLocaleString()}
                     extension=".csv"
                     className="btn btn-success"
                     />

                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
export default ExportCsv;