import React,{useEffect, useState} from 'react'
import { useParams, NavLink, Outlet } from 'react-router-dom';


const WebsiteParams = () => {
    const [IdNum, setIdNum] = useState([]);

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

    // .LinkUnderlineRemover{
    //     text-decoration: none;
    //   }
    const LinkUnderlineRemover = ({isActive}) => {
        return {
            textDecoration : isActive ? 'underline' : "none"
        }
    }
  
    return (
      <>
        <h1>The Shopping Site</h1>
        <div className="container">
            {IdNum.map((element, index) => (
            <NavLink to = {`/Website/:${element.id}`} className= {`m-3 p-3`} style = {LinkUnderlineRemover}>  <div key = {index}>
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
          <h1>id {id}</h1>
            <Outlet/>
      </>
    )
}

export default WebsiteParams