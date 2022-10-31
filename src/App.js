import NavBar from "./Components/Layout/NavBar";
import NewClient from "./Pages/NewClient";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AllCars from "./Pages/AllCars";
import AllClients from "./Pages/AllClients";
import NewCar from "./Pages/NewCar";
import NotFound from "./Pages/NotFound";
import AllContracts from "./Pages/AllContracts";
import NewContract from "./Pages/NewContract";
import Footer from "./Components/Layout/Footer";
import FindClient from "./Pages/FindClient";
import FindCar from "./Pages/FindCar";
import FindContract from "./Components/Contracts/FindContractForm";


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cars' element={<AllCars/>}/>
        <Route path='/clients' element={<AllClients/>}/>
        <Route path='/contracts' element={<AllContracts/>}/>
        <Route path='/newcar' element={<NewCar/>}/>
        <Route path='/newclient' element={<NewClient/>}/>
        <Route path='/newcontract' element={<NewContract/>}/>
        <Route path='/findclient' element={<FindClient/>}/>
        <Route path='/findcar' element={<FindCar/>}/>
        <Route path='/findcontract' element={<FindContract/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
