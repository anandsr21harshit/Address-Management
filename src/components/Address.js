import React from 'react'
import "../css/Address.css"

function Address({people,removeItem}) {
  return (
    <ul className='list-item'>
        <li><h3>{people.name}</h3></li>
        <li>{people.address1}</li>
        <li>{people.address2}</li>
        <li>City: {people.city}</li>
        <li>Mobile: {people.mobile}</li>
        <li>{people.state}</li>
        <li>ID: {people.id}</li>
        <div className="list-item__btn-container">
            <button onClick={()=>removeItem(people.id)}>Edit</button>
            <button>Remove</button>
        </div>
        {console.log(typeof(people.id))}
    </ul>
  )
}

export default Address