import React, { useState, useEffect } from 'react';

const Website = () => {
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

  return (
    <>
      <h1>The Movie Site</h1>
      <div className="container">
          {IdNum.map((element, index) => (
            <div key = {index}>
                <div className = "row">
            <div className="col-xl-3 m-3">
              <img style= {{height: "4rem ", width: "4rem"}} src = {element.image} alt="re"/>
            </div>
            <div className="col-xl-3 m-3">
              {element.price}
            </div>
            <div className="col-xl-3 m-3">
              {element.description}
            </div>
            </div>
            </div>
          ))}
        </div>
    </>
  );
}

export default Website;
