import './App.css';
import Header from "./components/Header";
import AddressTile from "./components/AddressTile";
import AddressForm from "./components/AddressForm";

function App() {
  return (
    <div className="App">
        <h1>Address Management</h1>
        <Header/>
        <AddressTile/>
        <AddressForm/>
    </div>
  );
}

export default App;
