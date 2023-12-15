// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
// import "./box.css";
// const Box = (props) => {
//   const navigate = useNavigate();
//   const url = props.url || "/";
//   const title = props.title || "General Aptitude";
//   const backgroundImg =
//     props.bgImg ||
//     "data:image/png;base64,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";
//   return (
//     <div
//       onClick={() => navigate(url)}
//       class="box g-0 border rounded overflow-hidden shadow-sm  position-relative p-3 px-4 col-2 "
//       style={{
//         backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(${backgroundImg})`,
//       }}
//     >
//       <h5>{title}</h5>
//       <div
//         onClick={url}
//         className="btn btn-primary"
//         style={{ position: "absolute", bottom: "10px" }}
//       >
//         Continue Reading
//       </div>
//     </div>
//   );
// };

// export default Box;
