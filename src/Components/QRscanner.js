import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';

const Test = () => {
  const [delay, setDelay] = useState(100);
  const [scanner,setScanner] = useState(false);
  const [result, setResult] = useState('No result');

  const handleScan = (data) => {
    setResult(data);
  };

  const handlescanbut= ()=>{
    setScanner(!scanner);
  }

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 700,
    width: 600,
    marginLeft: 500
  };

  return (
    <div>
      <h1 className='heading'>QR-SCANNER</h1>  
      <button type="button" className ="btn btn-success" onClick={handlescanbut}>Scan</button>
      {scanner&&<QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />}
      <h1>{JSON.stringify(result)}</h1>
    </div>
  );
};

export default Test;

