import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import "../App.css";
import "../css/AddressTile.css"

function AddressTile({toggle}) {
  return (
    <div className='address-tile' onClick={toggle}>
        <div className="address-tile__icon">
          <h3>Add Address</h3>
          <AddIcon sx={{color:"#B0B0B0",width:"3rem", height:"3rem"}}/>
        </div>
    </div>
  )
}

export default AddressTile;