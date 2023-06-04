import React,{useEffect, useState} from 'react'
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import ContextImage from '../../ContextImage';


const WebsiteParams = () => {
    const [IdNum, setIdNum] = useState([]);
    const[ParamNum, setParamNum] = useSearchParams([]);

    // console.log(ParamNum.get("price"));
    // console.log(ParamNum.get("description"));

    const paramsSetter = () => {
      setParamNum([]);
    }


    useEffect(() => {
      const fetchData = async () => {
        try {
          const dataApi = await fetch("https://fakestoreapi.com/products");
          const dataJson = await dataApi.json();
          setIdNum(dataJson);
          console.log(dataJson);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    
    const {id} = useParams();


    const LinkUnderlineRemover = ({isActive}) => {
        return {
            textDecoration : isActive ? 'underline' : "none",
            color : isActive ? "rgba(17,123,173,255)" : "rgba(229,136,74,255)",
        }
    }
  
    return (
      <>
        <h1>The Shopping Site</h1>
        <div className="container">
            {IdNum.map((element, index) => (
            <NavLink to = {`/Website/${element.id}`} className= {`m-3 p-3`} style = {LinkUnderlineRemover}>  <div key = {index}>
                  <div className = "row">
              <div className="m-3"> 

                <h1>{element.price}</h1>
                <h1>{element.description}</h1>
                
              </div>
              </div>
              </div>
              </NavLink>
            ))}
          </div>
           <h1>{id}</h1>
           <br/>
           <h2>ParamNum: {ParamNum.toString()}</h2>
           <div>
            <button className = "btn btn-primary m-4 p-2" onClick={paramsSetter}>Reset</button>
           </div>
            <Outlet/>
            <br/>
            <br/>
            <ContextImage />
      </>
    )
}

export default WebsiteParams