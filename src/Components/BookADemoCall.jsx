import React from "react";
import "../style.css";
import "../BookADemo.css"
import { PopupButton } from "react-calendly";


function BookADemoCall() {
  return (
    <div>
      <div className="book-a-demo-section">
        <h1>Not sure? Book a demo call.</h1>
        <div>
          <PopupButton
            className="call-btn"
            url="https://calendly.com/d/z83-fx5-wdf/30min"
            /*
             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
             */
            rootElement={document.getElementById("root")}
            text="Schedule a Call With Us"
          />
        </div>
      </div>
    </div>
  );
}

export default BookADemoCall;
