import React from "react";
import {QRCodeSVG} from 'qrcode.react';

export default function Admin(props){
    // const [bookname,setBookname] = useState('');
    // const [bookisbn,setBookISBN] = useState();
    // const [bookcategory,setBookcategory] = useState();
    // const [rownumber,setrownumber] = useState();
    // const [bookcount,setcount] = useState();
    // const [cost,setcost] = useState();
    const {handleSubmit,bookname,setBookname,bookisbn,setBookISBN,bookcategory,setBookcategory,rownumber,setrownumber,bookcount,setcount,cost,setcost} = props;
    return (
        <div className="formblock">
            <h1 className="addbookheading">//ADD-BOOKS</h1>
            <form className="addcontact" onSubmit={handleSubmit}>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Book-Name:</span>
                        <input type="text" className="form-control" value={bookname} onChange={(e)=> setBookname(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Book-ISBN: </span>
                        <input type="number" className="form-control" value={bookisbn} onChange={(e)=> setBookISBN(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Book-category:</span>
                        <input type="text" className="form-control" value={bookcategory} onChange={(e)=>setBookcategory(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Row-Number:</span>
                        <input type="number" className="form-control"  value={rownumber} onChange={(e)=>setrownumber(e.target.value)}  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Book count:</span>
                        <input type="number" className="form-control"  value={bookcount} onChange={(e)=>setcount(e.target.value)}  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Cost:</span>
                        <input type="number" className="form-control"  value={cost} onChange={(e)=>setcost(e.target.value)}  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required/>
                    </div>
                <button type="submit" className="btn btn-outline-info">Submit</button>
            </form>
        </div>
    )
}