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
  const [serverData, setServerData] = useState([]);  // storing data from server in state variables
  
  useEffect(()=>{
    (async ()=>{
      const response = await axios.get(url);
      setServerData(response.data);
    })()
    console.log("use effect ran");
  },[])

  // function to toggle addressFillUpForm
  function toggleAddressForm (){
    setVisible(()=>!visible);
  }

  //function to remove item
  function removeItem(id){
    setServerData(serverData => serverData.filter(item => item.id !== id));  // id is string
    console.log("remove item");
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
