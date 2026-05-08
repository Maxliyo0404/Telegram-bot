import "./Cards.css";
import React from 'react'

function Cards() {
  return (
    <div className="cards">
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
  )
}

export default Cards