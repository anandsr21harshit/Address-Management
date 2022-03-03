import React from 'react'
import "../css/Address.css"

function Address({people,removeItem, setEditForm}) {

  // setting data to local storage
  const setData = (people)=>{
    const {name,address1,address2,mobile,city,state,pincode,id} = people;
    localStorage.setItem('name',name);
    localStorage.setItem('address1',address1);
    localStorage.setItem('address2',address2);
    localStorage.setItem('mobile',mobile);
    localStorage.setItem('city',city);
    localStorage.setItem('state',state);
    localStorage.setItem('pincode',pincode);
    localStorage.setItem('id',id)
  }
  return (
    <ul className='list-item'>
        <li><h3>{people.name}</h3></li>
        <li>{people.address1}</li>
        <li>{people.address2}</li>
        <li>Mobile: {people.mobile}</li>
        <li>{people.city}</li>
        <li>{people.state}</li>
        <li>{people.pincode}</li>
        <div className="list-item__btn-container">
            <button onClick={()=>{
              setEditForm(true);
              setData(people);
              }}>Edit</button>
            <button onClick={()=>removeItem(people.id)}>Remove</button>
        </div>
    </ul>
  )
}

export default Address