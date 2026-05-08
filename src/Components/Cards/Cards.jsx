import "./Cards.css";
import React from 'react'

function Cards() {
  return (
    <div className="cards">
        <form className="form">
            <label className=" label"> 
                To'liq ism
                <input className="input" type="text" required placeholder="Ismingizni kiriting"/>
            </label>
            <label className=" label">
                Telefon raqam
                <input className="input" type="number" required placeholder="+998979609291"/>
            </label>
            
        </form>
    </div>
  )
}

export default Cards