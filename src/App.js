import './App.css';
import Header from "./components/Header";
import AddressTile from "./components/AddressTile";
import AddressForm from "./components/AddressForm";
import { useState } from 'react';

function App() {

  const [visible, setVisible] = useState(true);

  function toggleAddressForm (){
    setVisible(()=>!visible);
  }

  return (
    <div className="App">
        <h1>Address Management</h1>
        <Header/>
        {visible && <AddressTile toggle={toggleAddressForm}/>}
        {!visible && <AddressForm/>}
    </div>
  );
}

export default App;
