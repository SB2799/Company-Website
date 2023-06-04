import React from 'react';
import { useContext } from 'react';
import { contextImageProviders } from './App';

const ContextImage = () => {
  const getContextImage = useContext(contextImageProviders);

  return (
    <>
      <h1>ContextImage rendered through Context API</h1>
      <br />
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
      </div>
    </>
  );
};

export default ContextImage;
