import "./Cards.css";
import React from 'react'

function Cards() {
  return (
    <div className="boxs">
         <h1 className="title">Registration</h1>
    <div className="box">
        <form className="form">
            <label className=" label"> 
                Full Name
                <input className="input" type="text" required placeholder="Enter your name ..."/>
            </label>
            <label className=" label">
                Phone Number
                <input className="input" type="number" required placeholder="+ 998 90 123 45 67"/>
            </label>
            <button className="btn">Submit</button>
            
        </form>
    </div>
    </div>
  )
}

export default Cards