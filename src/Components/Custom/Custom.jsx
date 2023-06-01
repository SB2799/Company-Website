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

    var hour = new Date().getHours();
    
    // var second = new Date().getSeconds;
    if(hour<12){
        messageOutput = "Good Morning";
        // messageOutput = messageOutput + " " + hour + ":" + minute + ":" + second;
        CustomStyle.color = "blue";
        CustomStyle.backgroundColor = "lightblue";
    }
    else if(hour>12 && hour<18)
    {
        messageOutput = "Good Afternoon";
        // messageOutput = messageOutput + " " + hour + ":" + minute + ":" + second;
        CustomStyle.color = "orange";
        CustomStyle.backgroundColor = "lightblue";
    }
    else{
        messageOutput = "Good Evening";
        CustomStyle.color = "red";
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