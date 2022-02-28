import React, { useState } from 'react'
import "../css/AddressForm.css"
import axios from "axios";

const url = "https://621c6704768a4e1020a909e2.mockapi.io/users"

function AddressForm() {

    const formDataObj = {};

    const [formData, setFormData] = useState(formDataObj);

    function dataChangeHandler(e){
        setFormData((formData)=> ({...formData,[e.target.name]:e.target.value}));
    }
    console.log(formData);

    function formSubmitHandler(e){
        const response = axios.post(url,formData);
        console.log(response);
    }

  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
        <div className="form-container__label-input">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Name' name='name' onChange={dataChangeHandler} />
        </div>

        <div className="form-container__label-input">
            <label htmlFor="">Mobile</label>
            <input type="number" placeholder='Mobile' name='mobile' onChange={dataChangeHandler}/>
        </div>
        
        <div className="form-container__label-input">
            <label htmlFor="">Address Line 1</label>
            <input type="text" placeholder='Address Line 1' name='address1' onChange={dataChangeHandler} />
        </div>
        
        <div className="form-container__label-input">
            <label htmlFor="">Address Line 2</label>
            <input type="text" placeholder='Address Line 2' name='address2' onChange={dataChangeHandler} />
        </div>

        <div className="form-container__label-input">
            <label htmlFor="">City</label>
            <input type="text" placeholder='City' name='city' onChange={dataChangeHandler} />
        </div>
        <div className="form-container__label-input">
            <label htmlFor="">State</label>
            <input type="text" placeholder='State'  name='state' onChange={dataChangeHandler}/>
        </div>
        <div className="form-container__label-input">
            <label htmlFor="">Pincode</label>
            <input type="number" placeholder='Pincode'  name='pincode' onChange={dataChangeHandler}/>
        </div>
        <button type="submit">Add Address</button>
    </form>
  )
}

export default AddressForm