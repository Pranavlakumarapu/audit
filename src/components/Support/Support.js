
// import React, { useState } from 'react';
// import './Support.css';

// export default function Support() {
//   const [videoSrc, setVideoSrc] = useState('');

//   const stopVideo = () => {
//     const videoPlayer = document.getElementById('videoPlayer');
//     videoPlayer.style.display = 'none';
//     const myVideo = document.getElementById('myVideo');
//     myVideo.pause();
//   };

//   const playVideo = (file) => {
//     const videoPlayer = document.getElementById('videoPlayer');
//     videoPlayer.style.display = 'block';
//     const myVideo = document.getElementById('myVideo');
//     myVideo.src = file;
//   };
//   var support = [
//     {
//       img: "images/Support-1.png",
//       desc: " Auditus-IERP Software Download And Installation",
//       video: "/support-videoes/Auditus-iERP Download & Installation.mp4"
//     },
//     {
//       img: "images/support-2.png",
//       desc: "Auditusierp Accounting software | Inventory Management | Billing Software",
//       video: "/support-videoes/supportvid-2.mp4"
//     }
//     ,  {
//       img: "/images/supportvid-3.png",
//       desc: "How to create Product Master in Auditusierp Accounting Software",
//       video: "/support-videoes/supportvid-3.mp4"
//     },
//     {
//       img: "/images/supportvid-3.png",
//       desc: "How to create a Company",
//       video: "/support-videoes/supportvid-4.mp4"
//     },
//     {
//       img: "/images/supportvid-3.png",
//       desc: "How to create Account Master | ledger",
//       video: "/support-videoes/suppourtvid-5.mp4"
//     },
//     {
//       img: "/images/supportvid-3.png",
//       desc: "Auditus ierp Basic Demo",
//       video: "/support-videoes/suppourtvid-6.mp4"
//     }
//   ]
  

//   return (
//     <div  className="Support-container">
//       <div>
//         <h1>Auditus-IERP Support</h1>
//         <div className="row">
//         <center>      <div className="video-player" id="videoPlayer" style={{ display: 'none' }}>
//         <video width="100%" controls autoPlay id="myVideo">
//           <source src={videoSrc} type="video/mp4" />
//         </video>
//         <img
//           src="images/close.png"
//           className="close-btn"
//           onClick={() => stopVideo()}
//         />
//       </div></center>

//           {
//             support.map((support,index)=>{
//               return<div key={index}>

//                 <div className="col">
                  
//             <div className="small-img-row">
//             <center>      <div className="video-player" id="videoPlayer" style={{ display: 'none' }}>
//         <video width="100%" controls autoPlay id="myVideo">
//           <source src={videoSrc} type="video/mp4" />
//         </video>
//         <img
//           src="images/close.png"
//           className="close-btn"
//           onClick={() => stopVideo()}
//         />
//       </div></center>
//               <div className="small-img">
//                 <img className='supportimage' src={support.img} />
                
//                 <img
//                   src="images/play.png"
//                   className="play-btns"
//                   onClick={() =>
//                     playVideo(support.video)
//                   }
//                 />
                
//               </div>
//               <p className='support-desc'>
//                  {support.desc}

//               </p>
//             </div>

//           </div>                 
//               </div>
//             })
//           }
//         </div>
//       </div>

//     </div>
//   );
// }


import React, { useState } from 'react';
import './Support.css';

export default function Support() {
  const [videoSrc, setVideoSrc] = useState('');

  const stopVideo = (index) => {
    const videoPlayer = document.getElementById(`videoPlayer-${index}`);
    videoPlayer.style.display = 'none';
    const myVideo = document.getElementById(`myVideo-${index}`);
    myVideo.pause();
  };

  const playVideo = (file, index) => {
    const videoPlayer = document.getElementById(`videoPlayer-${index}`);
    videoPlayer.style.display = 'block';
    const myVideo = document.getElementById(`myVideo-${index}`);
    myVideo.src = file;
  };

  var support = [
    {
      img: "images/Support-1.png",
      desc: " Auditus-IERP Software Download And Installation",
      video: "/support-videoes/Auditus-iERP Download & Installation.mp4"
    },
    {
      img: "images/support-2.png",
      desc: "Auditusierp Accounting software | Inventory Management | Billing Software",
      video: "/support-videoes/supportvid-2.mp4"
    },
    {
      img: "/images/supportvid-3.png",
      desc: "How to create Product Master in Auditusierp Accounting Software",
      video: "/support-videoes/supportvid-3.mp4"
    },
    {
      img: "/images/pranav1.png",
      desc: "How to create a Company",
      video: "/support-videoes/supportvid-4.mp4"
    },
    {
      img: "/images/pranav2.png",
      desc: "How to create Account Master | ledger",
      video: "/support-videoes/suppourtvid-5.mp4"
    },
    {
      img: "/images/pranav3.png",
      desc: "Auditus ierp Basic Demo",
      video: "/support-videoes/suppourtvid-6.mp4"
    }
  ];

  return (
    <div className="Support-container">
      <h1>Auditus-IERP Support</h1>
      <div className="row">
        {support.map((item, index) => (
          <div key={index} className="col">
            <div className="small-img-row">
            <div className="video-player" id={`videoPlayer-${index}`} style={{ display: 'none' }}>
                <video width="100%"  controls    id={`myVideo-${index}`}
                >
                  <source  src={item.video}  type="video/mp4" />
                </video>
                <img
                  src="images/close.png"
                  className="close-btn"
                  onClick={() => stopVideo(index)}
                />
              </div>



              <div className="small-img">
                <img className="supportimage" src={item.img} alt="" />
                <img
                  src="images/play.png"
                  className="play-btns"
                  onClick={() => playVideo(item.video, index)}
                />
              </div>
              <p className="support-desc">{item.desc}</p>

              
              </div>
              
          </div>
        ))}
      </div>
    </div>
  );
} 