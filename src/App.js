import React from "react";
import { useState } from "react";
import Applayout from "./Components/Applayout";
import QRscanner from "./Components/QRscanner";
import './App.css';
import Search from "./Components/search";
import ShowBook from "./Components/book";
import Admin from "./Components/Admin";
import Onebook from "./Components/onebook";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Test from "./Components/QRscanner";

function App() {
  const [bookname, setBookname] = useState('');
  const [bookisbn, setBookISBN] = useState();
  const [bookcategory, setBookcategory] = useState();
  const [rownumber, setrownumber] = useState();
  const [bookcount, setcount] = useState();
  const [cost, setcost] = useState();
  const [QRcode,setQRcode] = useState();
  const [data,setData] = useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    setBookname('')
    setBookISBN('')
    setBookcategory('')
    setrownumber('')
    setcount('')
    setcost('')
    setQRcode(null);
    setData((prev)=>[...prev,{bookname,bookisbn,bookcategory,rownumber,bookcount,cost,QRcode}])
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route path="Admin" element={<Admin handleSubmit={handleSubmit} data={data} bookname={bookname} bookisbn={bookisbn} bookcategory={bookcategory} rownumber={rownumber} bookcount={bookcount} cost={cost} setBookname={setBookname} setBookISBN={setBookISBN} setBookcategory={setBookcategory} setrownumber={setrownumber} setcount={setcount} setcost={setcost} setData={setData} />} />
          <Route path="showAdmin" element={<Search data={data} setData={setData}/>} />
          <Route path="showBook" element={<ShowBook data={data} />}/>
          <Route path="/books/:id" element={<Onebook data={data}/>} />
          <Route path="QRscanner" element={<Test />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
