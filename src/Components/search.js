import React, { useState } from "react";
import utilities from "../utilites/util";
import { QRCodeSVG } from "qrcode.react";
import ROUTES from "../routes";
export default function Search({data,setData}){
    const [searchdata,setsearch]= useState();
    const [result,setResult] = useState();
    const falseArray = new Array(data.length).fill(false);
    const [edit,setEdit] = useState(falseArray);
    const [bookisbn,setBookISBN] = useState();
    const [bookcategory,setBookcategory] = useState();
    const [rownumber,setBooknumber] = useState();
    const [cost,setCost] = useState();
    const [count,setBookcount] = useState();
    const handleSearch=(e)=>{
      e.preventDefault();
      let res = utilities.result(data,searchdata);
      setResult(res);
      setsearch('');
    }
    const handlesubmit=(e,bookname,id)=>{
        e.preventDefault();
        setData((prev)=>[...prev,{bookname,bookisbn,bookcategory,rownumber,count,cost}]);
        setEdit((prev)=>[...prev,edit[id]=!edit[id]]);
        setBookISBN('');
        setBookcategory('');
        setBookcount('');
        setBooknumber('');
        setCost('');
    }
    const handleedit = (e, ele, id) => {
        e.preventDefault(); 
        const updatedData = data.filter(item => item !== ele);
        setData(updatedData);
        setEdit(prev =>[...prev,edit[id]=!edit[id]] );
    };
    
    
    return (
        <>
            <div className="searchbar">
                <form onSubmit={handleSearch}>
                    <div className="input-group input-group-lg">
                        <input type="text" className="form-control" value={searchdata} placeholder='Enter Book-Name or Book-ISBN'
                            onChange={(e) => setsearch(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                        <button type="submit" className="btn btn-outline-info">Search</button>
                    </div>
                </form>
            </div>
            {(data.length === 0) ? <div className="nobook">No books available</div> : null}
            <div className="searchresult">
                {result && result.map((ele,id) => (
                    <div className="card" style={{ width: "18rem" }}>
                        <QRCodeSVG value={ROUTES.Books(ele.bookisbn)} />
                        <div className="card-body">
                            {!edit[id] && (<><h5 className="card-title">{ele.bookname}</h5>
                                <p className="card-text">
                                    Book-ISBN:{ele.bookisbn}<br />
                                    Book-category:{ele.bookcategory}<br />
                                    Row-number:{ele.rownumber}<br />
                                    Book-cost:{ele.cost}<br />
                                </p>
                                <a href="#" className="btn btn-primary" onClick={(e)=>handleedit(e,ele,id)}>Remove & Edit</a></>)}
                            {edit[id] && (<><h5 className="card-title">{ele.bookname}</h5>
                                <p className="card-text">
                                    <form onSubmit={(e)=>handlesubmit(e,ele.bookname,id)}>
                                        Book-ISBN:<input type="number" value={bookisbn} onChange={(e) => setBookISBN(e.target.value)} required /><br />
                                        Book-category:<input type="text" value={bookcategory} onChange={(e) => setBookcategory(e.target.value)} required /><br />
                                        Row-number:<input type="number" value={rownumber} onChange={(e) => setBooknumber(e.target.value)} required /><br />
                                        Book-cost:<input type="number" value={cost} onChange={(e) => setCost(e.target.value)} required /><br />
                                        Book-count:<input type="number" value={count} onChange={(e) => setBookcount(e.target.value)} required /><br />
                                        <button type="submit" class="btn btn-dark">Save & Add</button>
                                    </form>
                                </p>
                            </>)}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}