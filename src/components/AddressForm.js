import React from 'react'
import "../css/AddressForm.css"

function AddressForm() {
  return (
    <form className='form-container'>
        <div className="form-container__label-input">
            <label htmlFor="">Name</label>
            <input type="text" />
        </div>

        <div className="form-container__label-input">
            <label htmlFor="">Mobile</label>
            <input type="number" name="" id="" />
        </div>
        
        <div className="form-container__label-input">
            <label htmlFor="">Address Line 1</label>
            <input type="text" />
        </div>
        
        <div className="form-container__label-input">
            <label htmlFor="">Address Line 2</label>
            <input type="text" />
        </div>
        <div className="form-container__label-input">
            <label htmlFor="">Address Line 2</label>
            <input type="text" />
        </div>
        <div className="form-container__label-input">
            <label htmlFor="">Address Line 3</label>
            <input type="text" />
        </div>
        <div className="form-container__label-input">
            <label htmlFor="">State</label>
            <input type="text" />
        </div>
        <div className="form-container__label-input">
            <label htmlFor="">Pincode</label>
            <input type="number" name="" id="" />
        </div>
    </form>
  )
}

export default AddressForm