import './App.css';
import Header from "./components/Header";
import AddressTile from "./components/AddressTile";
import AddressForm from "./components/AddressForm";
import Address from "./components/Address";
import EditForm from './components/EditForm';
import { useState,useEffect } from 'react';
import axios from "axios";
import { Co2Sharp } from '@mui/icons-material';

const url = "https://621c6704768a4e1020a909e2.mockapi.io/users";

function App() {

  const [visible, setVisible] = useState(true);
  const [editForm, setEditForm] = useState(false);
  const [serverData, setServerData] = useState([]);  // storing data from server in state variables

  
  useEffect(()=>{
    (async ()=>{
      const response = await axios.get(url);
      setServerData(response.data);
    })()
  },[])



  // function to toggle addressFillUpForm
  function toggleAddressForm (){
    setVisible(()=>!visible);
  }

  

  //function to remove item
  async function removeItem(id){
   const response = await axios.delete(url.concat(`/${id}`));  // deleting data from server
   setServerData(serverData.filter(person => person.id !== id)); // filtering out from server data and rendering again
  }
  

  return (
    <div className="App">
        <h1>Address Management</h1>
        <Header/>
        {visible && <AddressTile toggle={toggleAddressForm}/>}
        {!visible && <AddressForm visible={visible} setVisible={setVisible} setServerData={setServerData} serverData={serverData} />}
        {editForm && <EditForm setEditForm={setEditForm} setVisible={setVisible} setServerData={setServerData} serverData={serverData}/>}
        {serverData.map(item =>{
          return (
            <Address people={item} removeItem={removeItem} setEditForm={setEditForm}/>
          )
        })}
        
    </div>
  );
}

export default App;
