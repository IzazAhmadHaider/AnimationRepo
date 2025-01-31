// import React from 'react';
// import ReactAnimation from './React_Animations';
// import BankingExperience from "./Home_Page_Text";

// function Home() {
//   return (
//     <div
//       style={{
//         height: "100vh",
//         width: "85vw",
//         backgroundImage: "url('https://assets.website-files.com/643f03b9f767055f60e2cdc8/643f0f099e03640fa5b6063e_BG%20Gradient.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div>
//         <BankingExperience/>
//       </div>
//       <ReactAnimation />
//     </div>
//   );
// }

// export default Home;

import React from "react";
import ReactAnimation from "./React_Animations";
import BankingExperience from "./Home_Page_Text";
import ScrollingLogos from "./ScrollingLogos";
import Rotate from "./motion";

function Home() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          height: "100vh",
          width: "85vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centers everything horizontally
          backgroundImage:
            "url('https://assets.website-files.com/643f03b9f767055f60e2cdc8/643f0f099e03640fa5b6063e_BG%20Gradient.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "30px",
        }}
      >
        <BankingExperience />
        {/* Center ReactAnimation Horizontally */}
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <ReactAnimation />
          {/* <marquee direction="right" scrollamount="5">
          🎉 Welcome! &nbsp; 🚀 React Rocks! &nbsp; 💡 Stay Creative! &nbsp; 📱
          Mobile Dev! &nbsp; 🏆 Keep Learning! &nbsp; 🔥 Code & Innovate!
        </marquee> */}
        </div>

        <Rotate />
      </div>
      <div
        style={{
          height: "100vh",
          width: "85vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ScrollingLogos />
      </div>
    </div>
  );
}

export default Home;
