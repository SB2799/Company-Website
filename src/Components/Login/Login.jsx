import React from "react";
import { useState } from "react";
import styles from "./Login.css"

const Login = ()=> {

    const[Form, setForm] = useState({Name: "",Email: "",Address: "",City: "",State: ""});
    const[DataAdder, setDataAdder] = useState([]);


    const DataRecieve = ()=> {
        if(Form.Name !== "" && Form.Email !== "" && Form.Address !== "" && Form.City !== "" && Form.State !== ""){
        setDataAdder([...DataAdder,Form]);
        setForm({Name: "",Email: "",Address: "",City: "",State: ""});
        }
    }

    const removeData = (e)=> {
        const remove = [...DataAdder];
        remove.splice(e,1);
        setDataAdder(remove);
        const decision = prompt("Are you sure you want to remove - Yes or No");
        if(decision === "Yes" || decision === "yes" || decision === "Y" || decision === "y"){
            setDataAdder(remove);
        }
        else{
            setDataAdder(DataAdder);
        }
    }

    const EnterData = (e)=> {
        if(e.key === "Enter"  && Form.Name !== "" && Form.Email !== "" && Form.Address !== "" && Form.City !== "" && Form.State !== ""){
            DataRecieve();
        }
    }

    return (<>
    <div className = "container">
    <div className = "row ">
            <div className="col-xl-3 m-2">
                <input placeholder="Name" type = 'text' value={Form.Name} onChange={(e)=>setForm({...Form, Name : e.target.value})} onKeyPress={(e)=> EnterData(e)}></input>
            </div>

            <div className="col-xl-3 m-2">
            <input placeholder="Email" type = 'text' value={Form.Email} onChange={(e)=>setForm({...Form, Email : e.target.value})} onKeyPress={(e)=> EnterData(e)}></input>
            </div>

            <div className="col-xl-3 m-2">
            <input placeholder="Address" type = 'text' value={Form.Address} onChange={(e)=>setForm({...Form, Address : e.target.value})} onKeyPress={(e)=> EnterData(e)}></input>
            </div>

            <div className="col-xl-3 m-2">
            <input placeholder="City" type = 'text' value={Form.City} onChange={(e)=>setForm({...Form, City : e.target.value})} onKeyPress={(e)=> EnterData(e)}/>
            </div>

            <div className="col-xl-3 m-2">
            <input placeholder="State" type = 'text' value={Form.State} onChange={(e)=>setForm({...Form, State : e.target.value})} onKeyPress={(e)=> EnterData(e)}></input>
            </div>
            
            <div className = "offset-xl-3 m-2"></div>
            <div className="col-xl-6">
                <button style={{padding:"1rem 4rem"}} className = 'btn btn-success' onClick={DataRecieve} draggable>+</button>
            </div>

        </div>
        <br/>
        <div className="row ">
  <div className="d-flex justify-content-between formBox">
    <h1>Name</h1>
    <h1>Email</h1>
    <h1>Address</h1>
    <h1>City</h1>
    <h1>State</h1>
    <h1>{}</h1>
  </div>
</div>
        <br/>
        <div className = "row shadow-lg">
            {
                DataAdder.map((e,i)=>{
                    return (<>
                        <div className = " d-flex justify-content-between m-3 " key={i}>
                            <p>{e.Name}</p>
                            <p>{e.Email}</p>
                            <p>{e.Address}</p>
                            <p>{e.City}</p>
                            <p>{e.State}</p>
                            <button draggable onClick = {() => removeData(i)} className = "btn btn-danger">Delete</button>
                        </div>
                        </> )
                })
            }
            </div>
        </div>
        <div className = {`${styles.Setter}`}></div>
    </>)
}

export default Login;