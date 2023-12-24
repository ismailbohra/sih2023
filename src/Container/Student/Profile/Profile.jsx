import { useEffect, useState } from "react";
import Modal from "react-modal";
import ProgressChart from "./Progress/ProgressChart";
import "./profile.css";
import axios from "axios";
export default (props) => {
  let id = localStorage.getItem("userId") || "656c99945f8f9d21d69c548c";
  const [showModal, setShowmodal] = useState(false);

  const [user, setuser] = useState({});
  const [final, setfinal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/user/user-details/${id}`
        );
        setuser(response.data.userdata);
        if (response.data.finalvalue) {
          
        }
        setfinal(response.data.finalvalue);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(user);
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
                src="data:image/jpeg;base64,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"
                alt="Profile Image"
              />
            </div>
            <div className="text1">
              <h3 className="job_title">Hello,{user.username}</h3>
              {/* <h3 className="job_title">Hello Ishan</h3> */}
          
            </div>
            {/* <div className="level">
       
        <p>Name</p>
        <p>Age</p>
      </div> */}
            <div className="text">
              
              <p className="job_title result">Slow Learner Probability: {Math.floor(final)}%</p>
              {/* <p className="job_discription">
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
