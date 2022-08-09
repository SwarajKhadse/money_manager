import React from 'react'

function Transaction_green() {
  return (
    <>
    <div
    className="container mt-3"
    style={{
      width: "95%",
      height: "6vw",
      backgroundColor: "rgba(166, 202, 165, 1)",
      borderRadius: "20px",
    }}
  >
    <div className="row">
      <div
        className="col-2 mt-2"
        style={{
          borderRight: "1px solid black",
        }}
      >
        <h1 className="fw-bold mt-1">+</h1>
      </div>

      <div
        className="col-3 mt-2"
        style={{
          borderRight: "1px solid black",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid black",
          }}
        >
          <h5>08/08/2022 </h5>
        </div>
        <div className="mt-1">
          <h5>10:52:AM </h5>
        </div>
      </div>
      <div
        className="col-3 mt-2 ms-1"
        style={{
          borderRight: "1px solid black",
        }}
      >
        <h1 className="fw-bold mt-2">₹4000</h1>
      </div>
      <div className="col-3 mt-2 ms-2">
        <h5 className="mt-2">BILL PAYMENTS</h5>
      </div>
    </div>
   
  </div>
  <br />
  
</>        
  )
}

export default Transaction_green