import React from 'react';

const Custom = () => {
    const CustomStyle = {
        color: "teal",
        backgroundColor: "lightgray",
        padding : "2rem",
        width: "70%",
        margin: "0 auto",
    }

    const userStyle = {
        color : "wheat",
    }

    var messageOutput = "";

    var date = new Date();
    var hour = date.getHours();
    
    // var second = new Date().getSeconds;
    if(hour>=6 && hour<12){
        messageOutput = "Good Morning";
        // messageOutput = messageOutput + " " + hour + ":" + minute + ":" + second;
        CustomStyle.color = "blue";
        CustomStyle.backgroundColor = "lightblue";
    }
    else if(hour>=12 && hour<18)
    {
        messageOutput = "Good Afternoon";
        // messageOutput = messageOutput + " " + hour + ":" + minute + ":" + second;
        CustomStyle.color = "orange";
        CustomStyle.backgroundColor = "lightblue";
    }
    else if(hour>=18 && hour<23)
    {
        messageOutput = "Good Evening";
        // messageOutput = messageOutput + " " + hour + ":" + minute + ":" + second;
        CustomStyle.color = "wheat";
        CustomStyle.backgroundColor = "lightblue";
    }
    else{
        messageOutput = "Good Night";
        CustomStyle.color = "rgba(41, 29, 29, 0.256)";
        CustomStyle.backgroundColor = "lightblue";
    }
    
    return (<>
    <h1 style = {userStyle}>hello user</h1>
    <p style = {userStyle}>The message generated as per Actual Time</p>
    <br/>
    <br/>
    <h1 style = {CustomStyle}>{messageOutput}</h1>
    </>)
}

export default Custom