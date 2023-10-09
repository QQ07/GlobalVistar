import React from "react";
import { PopupButton } from "react-calendly";
import "../Calendly.css";

const Calendly = () => {
  return (
    <div>
      <PopupButton
        className="calendly-button btn-calendly"
        url="https://calendly.com/d/z83-fx5-wdf/30min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Schedule A Call With Us"
      />
    </div>
  );
};

export default Calendly;