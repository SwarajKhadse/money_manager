import React from "react";

function In() {
  return (
    <div>
      <div
        className="card  "
        style={{
          width: "25rem",
          marginLeft: "20rem",
          marginTop: "10rem",
          backgroundColor: "rgb(165,201,202,100%)",
          borderRadius: "0px 45px 0px 45px",
        }}
      >
        <div className="card-body mb-3 mt-3">
            <div>

           
          {/* <div
            className="triangle-left "
            style={{
              width: "0px",
              height: "0px",
              borderTop: "20px solid transparent",
              borderRight: "50px solid red",
              borderBottom: "25px solid transparent",
              
            }}
          ></div> */}
          <h5
            className="card-title "
            style={{
              fontWeight: "bold",
              fontSize: "38px",
            }}
          >
            AMOUNT
          </h5>
          </div>
          <div
            className="container mt-3 mb-3"
            style={{
              width: "174px",
              height: "3vw",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
              className=""
            >
              ₹4000
            </h3>
          </div>

          <h5
            className="card-title mb-3"
            style={{
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            {" "}
            category
          </h5>

          <div
            className="container mt-3"
            style={{
              width: "90%",

              backgroundColor: "white",
              borderRadius: "12px",
            }}
          >
            <button
              type="button"
              className="btn btn-outline-primary mt-3 mb-3 me-1 ms-1"
            >
              Rent{" "}
            </button>
            <button
              type="button"
              className="btn btn-outline-primary mt-3 mb-3 me-1 ms-1"
            >
              Food
            </button>
            <button
              type="button"
              className="btn btn-outline-primary mt-3 mb-3 me-1 ms-1"
            >
              Bill
            </button>
            <button
              type="button"
              className="btn btn-outline-primary mt-3 mb-3 me-1 ms-1"
            >
              Recharge
            </button>
          </div>

          <h5
            className="card-title mt-3"
            style={{
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            {" "}
            Description
          </h5>
          <input
            type="text"
            name=""
            id=""
            className="mt-3"
            placeholder="Enter the details "
          />
        </div>
      </div>
    </div>
  );
}

export default In;
