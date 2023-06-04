import React from 'react';
import styles from "./Home.module.css"

const Home = ()=> {
    return (<>
    <div className = "container">
    <div className='row'>
        <div className = "col-xl-5 p-2 m-2">
        <img className={`${styles.imgHome}`} src = "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "re"/>
        <br/>
        <img className={`${styles.imgHome}`} src = "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "re"/>
        <br/>
        <img className={`${styles.imgHome}`} src = "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "re"/>
        </div>
        
        <div className = {`col-xl-5 p-2 m-2 ${styles.textSizer}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, labore autem. Laudantium atque, dolorem voluptas harum aperiam maxime nihil fuga facere accusantium, debitis ea eum vel fugiat labore suscipit error.
            <br/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, labore autem. Laudantium atque, dolorem voluptas harum aperiam maxime nihil fuga facere accusantium, debitis ea eum vel fugiat labore suscipit error.
            <br/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, labore autem. Laudantium atque, dolorem voluptas harum aperiam maxime nihil fuga facere accusantium, debitis ea eum vel fugiat labore suscipit error.
            <br/>
        </div>
    </div>
    </div>
    </>)
}

export default Home;