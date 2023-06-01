import React from "react";
import { Link,useNavigate, Outlet } from "react-router-dom";

const HomePage = ()=> {

    const usenav =  useNavigate();

    return (<>
    <div className = "container">
        <div className="row">
            <div className="col-xl-6">
                <img src= "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </div>
            <div className = "col-xl-6 fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod eos, accusamus perferendis, soluta esse rerum iusto natus impedit doloribus tempore dolorem, optio consectetur vel tempora commodi aperiam voluptatibus sequi.
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ex non eum, similique suscipit dolor maiores quos voluptas ea fugit commodi, harum numquam earum soluta vitae unde cumque accusamus dicta!
            </div>
            <br/>
            <br/>
            <div className = "d-flex align-items-center justify-content-center">
                <div className = {`d-flex mx-3`}>
            <Link  className = {`m-3`}  to={`/`}>Home</Link>
            <Link className = {`m-3`} to = "Custom">Message</Link>
            <button onClick={() => usenav(-1)} className = "btn btn-primary m-3">Go</button>
            <Outlet />
            </div>
            </div>
        </div>
    </div>
    </>)
}

export default HomePage;