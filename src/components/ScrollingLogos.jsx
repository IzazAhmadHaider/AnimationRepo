// // ScrollingLogos.jsx
// import React from "react";
// // import "./ScrollingLogos.css";

// const logos = [
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff8459a31c02e407b9ab9_Logo%207.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff8459cb7251ee8e52d0a_Logo%201.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff846553bab8265a9cc4d_Logo%206.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff8469a31c01f8a7b9aba_Logo%204.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff846628e36fbf068554e_Logo%203.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff846f9c370d8d62d345a_Logo%205.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff84662b7787fed8c70b2_Logo%202.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff8469a31c045737b9abb_Logo%208.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff846acb1b73c339a3cb4_Logo%209.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff8459a31c02e407b9ab9_Logo%207.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff8459cb7251ee8e52d0a_Logo%201.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff846553bab8265a9cc4d_Logo%206.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff8469a31c01f8a7b9aba_Logo%204.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff846628e36fbf068554e_Logo%203.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff846f9c370d8d62d345a_Logo%205.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff84662b7787fed8c70b2_Logo%202.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff8469a31c045737b9abb_Logo%208.svg",
//   "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff846acb1b73c339a3cb4_Logo%209.svg",
// ];

// const ScrollingLogos = () => {
//   return (
//     // <div className="reviews-logos-holder">
//     <div className="reviews-logos-wrapper">
//       <div className="reviews-logos-container">
//         {[...logos, ...logos].map((logo, index) => (
//           <div className="reviews-logos" key={index}>
//             <img
//               src={logo}
//               loading="lazy"
//               alt="logo"
//               className="reviews-logo-image"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default ScrollingLogos;

// ScrollingLogos.jsx
import React from "react";
// import "./ScrollingLogos.css";

const logos = [
  "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff8459a31c02e407b9ab9_Logo%207.svg",
  "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff8459cb7251ee8e52d0a_Logo%201.svg",
  "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff846553bab8265a9cc4d_Logo%206.svg",
  "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff8469a31c01f8a7b9aba_Logo%204.svg",
  "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff846628e36fbf068554e_Logo%203.svg",
  "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff846f9c370d8d62d345a_Logo%205.svg",
  "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff84662b7787fed8c70b2_Logo%202.svg",
  "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff8469a31c045737b9abb_Logo%208.svg",
  "https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643ff846acb1b73c339a3cb4_Logo%209.svg",
];

const ScrollingLogos = () => {
  return (
    <div className="reviews-logos-wrapper">
      <div className="title-holder">
        <div className="fade-in-on-scroll">
          <h2 className="h3-title">+600 reviews</h2>
        </div>
        <div className="fade-in-on-scroll">
          <div className="reviews-paragraph-holder">
            <p>
              Companies building custom tools
              <br /> with Confetti.
            </p>
          </div>
        </div>
      </div>
      <div className="reviews-logos-container">
        {[...logos, ...logos].map((logo, index) => (
          <div className="reviews-logos" key={index}>
            <img
              src={logo}
              loading="lazy"
              alt="logo"
              className="reviews-logo-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
