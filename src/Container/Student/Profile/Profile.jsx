// import { useState } from "react";
// import ProgressChart from "./Progress/ProgressChart";
// import './profile.css'
// export default (props) => {
//   const profilePic = props.profilePic;
//   const name = props.name || "Riya";
//   const designation = props.designation || "Student";
//   const age = props.age || "22";
//   const description =
//     props.description ||
//     `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
//             urna eu turpis viverra posuere nec at libero.`;
//   const progressItems = ["Address", "Payment", "Shipping", "Summary"];
//   return (
//     <div className="d-flex justify-content-center m-5">
//       <div className="card shadow-sm" style={{ width: "350px" }}>
//         <div>
//           <div className="text-center justify-content-center">
//             <img
//               className="bd-placeholder-img rounded-circle m-4 mb-3"
//               width="70"
//               height="70"
//               src={profilePic}
//               role="img"
//               aria-label="Placeholder"
//               preserveAspectRatio="xMidYMid slice"
//               focusable="false"
//             ></img>
//             <h5 className="fw-bolder p-0">{name}</h5>
//             <p className="m-0">{designation}</p>

//             <p>{age}</p>
//           </div>
//         </div>

//         <hr className="p-0 m-0" />
//         <div className="card-body">
//           <h6>Description</h6>
//           <p className="card-text">{description}</p>
//         </div>
//         <hr className="p-0 m-0" />
//         <div className="card-body p-0">
//           {/* <ProgressBar progressItems={progressItems} currTask={2} />
//           <p
//             className="d-flex justify-content-between p-0 m-0"
//             style={{ color: "#5e0989" }}
//           >
//             {progressItems.map((item, index) => {
//               return <span>{item}</span>;
//             })}
//           </p> */}
//           <ProgressChart />
//           <button
//             type="button"
//             className="btn btn-primary p-1 px-3 mb-2"
//             style={{ position: "relative", left: "250px" }}
//             onClick={{}}
//           >
//             Report
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import ProgressChart from "./Progress/ProgressChart";
import "./profile.css";
import { collapseclassNamees } from "@mui/material";
import Modal from "react-modal";
export default (props) => {
  const [showModal, setShowmodal] = useState(false);
  const profilePic = props.profilePic;
  const name = props.name || "medha";
  const designation = props.designation || "Student";
  const age = props.age || "22";
  const description =
    props.description ||
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            urna eu turpis viverra posuere nec at libero.`;
  const progressItems = ["Address", "Payment", "Shipping", "Summary"];
  const expandEmail = () => {
    // This function adds the 'expand' className to the email div
    document.querySelector(".email").classNameList.add("expand");
  };

  const collapseEmail = () => {
    setShowmodal(true);
  };
  const collapseModal2 = () => {
    setShowmodal(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div>
      <section>
        <div className="box1 box">
          <div className="content">
            <div className="image">
              <img
                src="https://i.postimg.cc/bryMmCQB/profile-image.jpg"
                alt="Profile Image"
              />
            </div>
            <div className="text1">
              <p className="job_title">Ishan</p>
              <p className="job_title">Age</p>
            </div>
            {/* <div className="level">
       
        <p>Name</p>
        <p>Age</p>
      </div> */}
            <div className="text">
              <p>className:</p>
              <p>Institute:</p>
              <p>Parent name:</p>
              <p>Teacher assigned:</p>
              <p className="job_title">Organization</p>
              <p className="job_discription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                atque, ipsam a amet laboriosam eligendi.
              </p>
            </div>
            <div className="icons">
              <button>
                <ion-icon name="logo-dribbble"></ion-icon>
              </button>
              <button>
                <ion-icon name="logo-instagram"></ion-icon>
              </button>
              <button>
                <ion-icon name="logo-twitter"></ion-icon>
              </button>
              <button>
                <ion-icon name="logo-linkedin"></ion-icon>
              </button>
              <button>
                <ion-icon name="logo-facebook"></ion-icon>
              </button>
              <button>
                <ion-icon name="logo-behance"></ion-icon>
              </button>
            </div>
            <div className="button">
              <div>
                <a href={"/student/report"}>
                  <button className="message" type="button">
                    View Report
                  </button>
                </a>
              </div>
              {/* <div>
                <button
                  className="connect"
                  onClick={collapseEmail}
                  type="button"
                >
                  View Progress
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <Modal
          isOpen={showModal}
          onRequestClose={collapseModal2}
          contentLabel="Username Modal"
        >
          <div className="bg-white rounded-lg shadow-md p-4">
            <ProgressChart />
            <br />

            <button onClick={collapseModal2}>Close</button>
          </div>
        </Modal>
      </section>

      {/* <ProgressChart /> */}
      <button
        type="button"
        className="btn btn-primary p-1 px-3 mb-2"
        style={{ position: "relative", left: "250px" }}
        onClick={{}}
      >
        Report
      </button>
      <button
        type="button"
        className="btn btn-primary p-1 px-3 mb-2"
        style={{ position: "relative", left: "250px" }}
        onClick={{}}
      >
        Progress
      </button>
    </div>
    
  );
};
