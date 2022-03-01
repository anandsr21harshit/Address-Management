import './App.css';
import Header from "./components/Header";
import AddressTile from "./components/AddressTile";
import AddressForm from "./components/AddressForm";
import Address from "./components/Address";
import { useState,useEffect } from 'react';
import axios from "axios";

const url = "https://621c6704768a4e1020a909e2.mockapi.io/users";

function App() {

  const [visible, setVisible] = useState(true);
  const [serverData, setServerData] = useState([]);
  
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
  function removeItem(id){
    setServerData(serverData.filter(item => item.id !== id));  // id is string
  }
  

  return (
    <div className="App">
        <h1>Address Management</h1>
        <Header/>
        {visible && <AddressTile toggle={toggleAddressForm}/>}
        {!visible && <AddressForm visible={visible} setVisible={setVisible} />}
        {serverData.map(item =>{
          return (
            <Address people={item} removeItem={removeItem}/>
          )
        })}
    </div>
  );
}

export default App;
