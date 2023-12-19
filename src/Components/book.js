import React, { useState } from "react";
import utilities from "../utilites/util";
import { Link, Navigate } from "react-router-dom";
import ROUTES from "../routes";
import { QRCodeSVG } from "qrcode.react";

export default function ShowBook({data}){
    const [searchdata,setsearch] = useState();
    const [result,setResult] = useState();

    const handleSearch=(e)=>{
        e.preventDefault();
        let res = utilities.result(data,searchdata);
        setResult(res);
        setsearch('');
      }
    return (<>
        <div className="searchbar">
            <form onSubmit={handleSearch}>
                <div className="input-group input-group-lg">
                    <input type="text" className="form-control" value={searchdata} placeholder='Enter Book-Name or Book-ISBN'
                        onChange={(e) => setsearch(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    <button type="submit" className="btn btn-outline-info">Search</button>
                </div>
            </form>
            {(data.length === 0) ? <div className="nobook">No books available</div> : null}
            <div className="searchbook">
            {result && result.map((ele) => (<>
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{ele.bookname}</h5>
                        <QRCodeSVG value={ROUTES.Books(ele.bookisbn)} />
                        <h6 className="card-subtitle mb-2 text-body-secondary">{ele.bookisbn}</h6>
                        <p className="card-text"> Book-ISBN:{ele.bookisbn}<br />
                            Book-category:{ele.bookcategory}<br />
                            Row-number:{ele.rownumber}<br />
                            Book-cost:{ele.cost}<br /></p>
                            <Link key={ele.bookisbn} to={ROUTES.Books(ele.bookisbn)}>Book link</Link>
                        {/* <a href="#" className="card-link">Book link</a> */}
                        {/* <a href="#" className="card-link">Another link</a> */}
                    </div>
                </div>
            </>))}
            </div>
         </div>   
        </>)
}