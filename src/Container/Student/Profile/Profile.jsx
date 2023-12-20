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
          `http://172.172.170.251:5000/api/v1/user/user-details/${id}`
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
                src="https://i.postimg.cc/bryMmCQB/profile-image.jpg"
                alt="Profile Image"
              />
            </div>
            <div className="text1">
              <p className="job_title">{user.username}</p>
              <p className="job_title">{user.email}</p>
              <p className="job_title">{user.email}</p>
              <p className="job_title">Organization</p>
            </div>
            {/* <div className="level">
       
        <p>Name</p>
        <p>Age</p>
      </div> */}
            <div className="text">
              <p>Teacher assigned:</p>
              <p className="job_title">{final}</p>
              {/* <p className="job_discription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                atque, ipsam a amet laboriosam eligendi.
              </p> */}
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
