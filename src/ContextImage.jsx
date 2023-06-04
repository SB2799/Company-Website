import React,{useState, useEffect, useRef} from 'react';
import { useContext } from 'react';
import { contextImageProviders } from './App';

const ContextImage = () => {
  const getContextImage = useContext(contextImageProviders);

  const[name, setName] = useState("");
  const refCount  = useRef(0)

  useEffect(()=>{
    refCount.current = refCount.current + 1;
    previousCount.current = name;
  },[name])

  const previousCount  = useRef("")

  const changeInfo = (e) => {
    setName(e.target.value);
  }

  return (
    <>
      <h1>ContextImage rendered through Context API</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            {getContextImage.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <br/>
        <br/>
        <div className = "row"> 
        <br/>
        <h1>Use Ref Uses</h1>
          <div className = "col xl-3 m-3 p-3">
        <br />
      <input type = "text" placeholder value = {name} onChange = {(e) => changeInfo(e)}/>
      <br />
      <h2>{refCount.current}</h2>
      <br />
      <h2>The previous ref state is: {previousCount.current}</h2>
      <br />
        </div>
        </div>
      </div>
    </>
  );
};

export default ContextImage;
