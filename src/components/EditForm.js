import React, { useEffect, useState } from 'react'
import "../css/AddressForm.css"
import axios from "axios";

const url = "https://621c6704768a4e1020a909e2.mockapi.io/users"

function EditForm({setEditForm,setServerData,serverData}) {

    const formDataObj = {};

    const [formData, setFormData] = useState(formDataObj);

    //handler for input tags
    function dataChangeHandler(e){
        setFormData((formData)=> ({...formData,[e.target.name]:e.target.value}));
    }


    //updating data to server
    async function formSubmitHandler(e){
        e.preventDefault();
        console.log("update clicked");
        const response = await axios.put(url.concat(`/${localStorage.getItem('id')}`),formData); //updating

        if(response.status === 200){
            setServerData(serverData =>{
                serverData[response.data.id-1] = response.data;
                return serverData;
            });
        }
        setEditForm(false);
    }

    //closing form
    function cancelHandler(){
        setEditForm(false);
    }


    useEffect(()=>{
        setFormData(()=>{
            return ({...formData,
            name:localStorage.getItem('name'),
            address1:localStorage.getItem('address1'),
            address2: localStorage.getItem('address2'),
            pincode: localStorage.getItem("pincode"),
            city: localStorage.getItem('city'),
            mobile: localStorage.getItem('mobile'),
            state: localStorage.getItem('state')
        })
        });  
    },[]);

  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
        <div className="form-container__label-input">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Name' name='name' value={formData.name} onChange={dataChangeHandler} />
        </div>

        <div className="form-container__label-input">
            <label htmlFor="">Mobile</label>
            <input type="number" placeholder='Mobile' name='mobile' value={formData.mobile} onChange={dataChangeHandler}/>
        </div>
        
        <div className="form-container__label-input">
            <label htmlFor="">Address Line 1</label>
            <input type="text" placeholder='Address Line 1' name='address1' value={formData.address1} onChange={dataChangeHandler} />
        </div>
        
        <div className="form-container__label-input">
            <label htmlFor="">Address Line 2</label>
            <input type="text" placeholder='Address Line 2' name='address2' value={formData.address2} onChange={dataChangeHandler} />
        </div>

        <div className="form-container__label-input">
            <label htmlFor="">City</label>
            <input type="text" placeholder='City' name='city' value={formData.city} onChange={dataChangeHandler} />
        </div>
        <div className="form-container__label-input">
            <label htmlFor="">State</label>
            <input type="text" placeholder='State'  name='state' value={formData.state} onChange={dataChangeHandler}/>
        </div>
        <div className="form-container__label-input">
            <label htmlFor="">Pincode</label>
            <input type="number" placeholder='Pincode'  name='pincode' value={formData.pincode} onChange={dataChangeHandler}/>
        </div>
        <button type="submit">Update</button>
        <button onClick={cancelHandler}>Cancel</button>
    </form>
  )
}

export default EditForm