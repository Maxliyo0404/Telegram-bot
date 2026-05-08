import "./Cards.css";
import React from 'react'

function Cards() {
     const sendMessage = (event) =>{
       event.defaultPrevented();
       const token = "8660203377:AAHVRsKxi5fV8wIOJrFyr66R1tL-jj_LNmw"
       const chat_id = 647264939
       const url = `htpps://api.telegram.org/bot${token}/sendMessage`;
       const name = document.getElementById("username");
       const phone = document.getElementById("name");
       
     }
    
  return (
    <div className="boxs">
         <h1 className="title">Registration</h1>
    <div className="box">
        <form className="form">
            <label className=" label"> 
                Full Name
                <input id="username" className="input" type="text" required placeholder="Enter your name ..."/>
            </label>
            <label className=" label">
                Phone Number
                <input className="input" type="number" required placeholder="+ 998 90 123 45 67"/>
            </label>
            <button className="btn" type="Submit">Submit</button>
            
        </form>
    </div>
    </div>
  )
}

export default Cards