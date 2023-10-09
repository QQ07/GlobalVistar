import { React, useState } from "react";
import Header from "../Header";
import "../expandProduct.css";
import Enquiry from "./Enquiry";
import Footer from "../Footer";

function ExpandProduct(props) {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [readMore, setReadMore] = useState(false); // State for controlling read more/less
  window.scrollTo(0, 0);

  const toggleReadMore = (e) => {
    setReadMore(!readMore);
    e.preventDefault();
  };

  return (
    <div>
      <Header></Header>
      <div className="expandproduct-container">
        <div className="product-images">
          <img src="https://picsum.photos/300/200" alt="" />
          <img src="https://picsum.photos/300/200" alt="" />
          <img src="https://picsum.photos/300/200" alt="" />
        </div>
        <div className="product-figures">
          <div className="section">
            <h1>Margin</h1>
            <h4>20%-30%</h4>
          </div>
          <hr />
          <div className="section">
            <h1>MOQ</h1>
            <h4>100 Units</h4>
          </div>
          <hr />
          <div className="section">
            <h1>Location</h1>
            <h4>Pune, Mumbai, Nashik, Nagpur</h4>
          </div>
        </div>
        <div className="product-info">
          <div className="product-about-us">
            <h2>ABOUT US</h2>
            <hr />
            <p>
              {readMore
                ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                quibusdam nisi rerum ex vitae quisquam molestias neque officia
                assumenda, cum, rem blanditiis inventore optio animi! Perferendis
                ipsam tempora expedita totam dolor, et libero saepe iure eius
                accusamus non, vitae fugit aut voluptate at voluptates autem?
                Officia harum quos nobis obcaecati. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Esse quos earum suscipit molestias, iure ipsa dolor
                quas perferendis, dignissimos illum, repellendus eligendi repudiandae minus!
                Numquam delectus consequatur expedita, nobis fugiat a praesentium
                exercitationem tenetur veniam impedit deserunt aliquam explicabo?
                Voluptates tempora, blanditiis minus vitae dicta reprehenderit debitis
                cumque sequi ea?`
                : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                quibusdam nisi rerum ex vitae quisquam molestias neque officia
                assumenda, cum, rem blanditiis inventore optio animi! Perferendis
                ipsam tempora expedita totam dolor, et libero saepe iure eius
                accusamus non, vitae fugit aut voluptate at voluptates autem?
                Officia harum quos nobis obcaecati.`}
            </p>
            <button className="read-more-less" onClick={toggleReadMore}>
            {readMore ? "Read Less" : "Read More"}
          </button>
          </div>
          <div className="location-info ">
            <h2>Looking For Locations</h2>
            <hr />
            <div className="location-info-list">
              <ul>
                <li className="list-item-location">Pune</li>
                <li className="list-item-location">Mumbai</li>
                <li className="list-item-location">Nashik</li>
                <li className="list-item-location">Nagpur</li>
              </ul>
            </div>
          </div>
          <div>
            <button
              className=" send-enquiry-btn-product send-enquiry-product"
              onClick={() => {
                setShowEnquiry(!showEnquiry);
                console.log(showEnquiry);
              }}
              // style={{ width: "7.5rem", padding: "2px" }}
            >
              <span>Send</span> <span>Enquiry</span>
            </button>
          </div>
          {showEnquiry ? (
            <Enquiry
              showEnquiry={showEnquiry}
              setShowEnquiry={setShowEnquiry}
              Bname={props.Bname}
            ></Enquiry>
          ) : null}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ExpandProduct;


// import { React, useState } from "react";
// import Header from "../Header";
// import "../expandProduct.css";
// import Enquiry from "./Enquiry";
// import Footer from "../Footer";

// function ExpandProduct(props) {
//   const [showEnquiry, setShowEnquiry] = useState(false);
  // const [readMore, setReadMore] = useState(false); // State for controlling read more/less

//   window.scrollTo(0, 0);

//   // Function to toggle read more/less
  // const toggleReadMore = () => {
  //   setReadMore(!readMore);
  // };

//   return (
//     <div>
//       <Header></Header>
//       <div className="expandproduct-container">
//         {/* Existing code */}
//         <div className="product-images">
//           <img src="https://picsum.photos/300/200" alt="" />
//           <img src="https://picsum.photos/300/200" alt="" />
//           <img src="https://picsum.photos/300/200" alt="" />
//         </div>
//         <div className="product-figures">
//           <div className="section">
//             <h1>Margin</h1>
//             <h4>20%-30%</h4>
//           </div>
//           <hr />
//           <div className="section">
//             <h1>MOQ</h1>
//             <h4>100 Units</h4>
//           </div>
//           <hr />
//           <div className="section">
//             <h1>Location</h1>
//             <h4>Pune, Mumbai, Nashik, Nagpur</h4>
//           </div>
//         </div>
//         <div className="product-about-us">
//           <h2>ABOUT US</h2>
//           <hr />
//           {/* Display a limited portion of the content based on readMore state */}
          // <p>
          //   {readMore
          //     ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          //       quibusdam nisi rerum ex vitae quisquam molestias neque officia
          //       assumenda, cum, rem blanditiis inventore optio animi! Perferendis
          //       ipsam tempora expedita totam dolor, et libero saepe iure eius
          //       accusamus non, vitae fugit aut voluptate at voluptates autem?
          //       Officia harum quos nobis obcaecati. Lorem ipsum dolor sit amet consectetur,
          //       adipisicing elit. Esse quos earum suscipit molestias, iure ipsa dolor
          //       quas perferendis, dignissimos illum, repellendus eligendi repudiandae minus!
          //       Numquam delectus consequatur expedita, nobis fugiat a praesentium
          //       exercitationem tenetur veniam impedit deserunt aliquam explicabo?
          //       Voluptates tempora, blanditiis minus vitae dicta reprehenderit debitis
          //       cumque sequi ea?`
          //     : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          //       quibusdam nisi rerum ex vitae quisquam molestias neque officia
          //       assumenda, cum, rem blanditiis inventore optio animi! Perferendis
          //       ipsam tempora expedita totam dolor, et libero saepe iure eius
          //       accusamus non, vitae fugit aut voluptate at voluptates autem?
          //       Officia harum quos nobis obcaecati.`}
          // </p>

//           {/* Toggle read more/less button */}
          // <button className="read-more-less" onClick={toggleReadMore}>
          //   {readMore ? "Read Less" : "Read More"}
          // </button>
//         </div>
//         {/* Remaining code */}
//         {/* ... */}
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default ExpandProduct;
