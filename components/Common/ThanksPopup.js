import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const ThanksPopup = (props) => {
  return (
    <>
      <Offcanvas show={props.open} onHide={props.handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex justify-content-center flex-column text-center align-items-center">
            <h2>Thank You</h2>
            <img src="/images/tick.svg"alt="tick finfloh"  width="60" className="m-2" />
            <p>
              Thank you for showing interest in our solution. Please expect to
              hear back from one of our finance experts shortly. 
            </p>
            <p>If you have any urgent inquiries, please write to us at</p>
            <p> hello@finfloh.com.</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ThanksPopup;
