import React from "react";
import Logo from "../../../Assets/imgs/logo.png";
import PngItem_2211425 from "../../../Assets/imgs/PngItem_2211425.png";
import "./landing.css";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const navigateto = (nav) => {
    navigate(nav);
  };
  return (
    <>
      <div className="landing_container">
        <div className="landing">
          <div className="content">
            <div className="up">
              <div className="left">
                <img className="logo" src={Logo} alt="logo" />
                <span>M</span>edha
              </div>

              <div className="mid">
                {/* <nav>
                  <ul>
                    <li>
                      <a>About</a>
                    </li>
                    <li>
                      <a>Service</a>
                    </li>
                    <li>
                      <a>Blog</a>
                    </li>
                    <li>
                      <a>Contact</a>
                    </li>
                  </ul>
                </nav> */}
              </div>
              <div className="right">
                <button
                  onClick={() => navigateto("login")}
                  className="tbtn nocolor"
                >
                  Login
                </button>
                <button className="tbtn" onClick={() => navigateto("register")}>SignUp</button>
              </div>
            </div>

            <div className="down">
              <div className="intro_main intro_main_left">
                <div className="intro_left">
                  <h1 className="intro_heading">
                    <span>M</span>edha
                    <br />
                    (by <span>R</span>emedy<span>M</span>asters)
                  </h1>
                  <div className="intro_summary">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Est nesciunt unde eligendi, voluptatum culpa quia rem, sit
                    dicta alias modi labore accusantium itaque voluptas aut,
                    accusamus fugiat
                  </div>
                  <button
                    onClick={() => navigateto("login")}
                    className="tbtn">Get Started</button>
                </div>
              </div>

              <div className="intro_main intro_main_right">
                <div className="intro_right">
                  <img
                    className="intro_image"
                    src={PngItem_2211425}
                    alt="test image"
                  />
                </div>
              </div>
            </div>

            {/* content ends */}
          </div>

          {/* landing ends */}
        </div>
      </div>
    </>
  );
}
