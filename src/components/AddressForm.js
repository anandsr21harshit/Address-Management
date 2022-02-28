import React from 'react'
import "../css/AddressForm.css"

function AddressForm() {
  return (
    <form className='form-container'>
        <div className="form-container__label-input">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Name' name='name' />
        </div>

        <div className="form-container__label-input">
            <label htmlFor="">Mobile</label>
            <input type="number" placeholder='Mobile' name='mobile'/>
        </div>
        
        <div className="form-container__label-input">
            <label htmlFor="">Address Line 1</label>
            <input type="text" placeholder='Address Line 1' name='address1' />
        </div>
        
        <div className="form-container__label-input">
            <label htmlFor="">Address Line 2</label>
            <input type="text" placeholder='Address Line 2' name='address2' />
        </div>

        <div className="form-container__label-input">
            <label htmlFor="">City</label>
            <input type="text" placeholder='City' name='city' />
        </div>
        <div className="form-container__label-input">
            <label htmlFor="">State</label>
            <input type="text" placeholder='State'  name='state'/>
        </div>
        <div className="form-container__label-input">
            <label htmlFor="">Pincode</label>
            <input type="number" placeholder='Pincode'  name='pincode'/>
        </div>
        <button type="submit">Add Address</button>
    </form>
  )
}

export default AddressForm