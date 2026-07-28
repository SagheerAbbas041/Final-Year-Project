// import React from 'react'
// import { Link } from "react-router-dom"; 
// import wajid from '../assets/images/waji.png';
// import sagheer from '../assets/images/sagheer.png';
// import hassan from '../assets/images/hassani.png';

// export const Developer = () => {
//   return (
//     <div>
//         { <div className="container bg-gray-100 w-full pt-10 m-auto">
//             <div className="-mx-5 flex flex-wrap" style={{marginLeft:'320px'}}>
              
//               <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12 m-10">
//                 <div className="mb-12 lg:mb-16">
//                 <img src={wajid} alt='wajid'style={{width: 150, height: 150, borderRadius: 300/ 2}} />
//                   <h2 className="mb-10 text-xl font-bold text-black dark:text-white text-center">
//                     Wajid Hussain
//                   </h2>             
//                 </div>
//               </div>
  
//                <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12 m-10">
//                 <div className="mb-12 lg:mb-16">
//                 <img src={sagheer} alt='sagheer'style={{width: 150, height: 150, borderRadius: 300/ 2}} />
//                   <h2 className="mb-10 text-xl font-bold text-black dark:text-white text-center">
//                     Sagheer Abbas
//                   </h2>         
//                 </div>
//               </div>
  
//               <div className="w-full px-4 md:w-1/2 lg:w-2/12 xl:w-2/12 m-10">
//                 <div className="mb-12 lg:mb-16">
//                 <img src={hassan} alt='hassan'style={{width: 150, height: 150, borderRadius: 300/ 2}} />
//                   <h2 className="mb-10 text-xl font-bold text-black dark:text-white text-center">
//                    Hassan    Ali
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </div> }

          

//     {/* <section class="services">
//     <div class="container">
//       <div class="row">
//         <div class="col-lg-12">
//           <div class="owl-service-item owl-carousel">
          
//             <div class="item">
//               <div class="icon">
//                 <img src={wajid} alt="" className="w-15 h-15"/>
//               </div>
//               <div class="down-content">
//                 <h4>Muhammad Wajid Hussain</h4>
//                 <p>Frontend Developer.</p>
//               </div>
//             </div>
            
//             <div class="item">
//               <div class="icon">
//                 <img src={sagheer} alt="" className="w-15 h-15"/>
//               </div>
//               <div class="down-content">
//                 <h4>Sagheer Abbas</h4>
//                 <p>Backend Developer.</p>
//               </div>
//             </div>
            
//             <div class="item">
//               <div class="icon">
//                 <img src={hassan} alt="" className="w-15 h-15"/>
//               </div>
//               <div class="down-content">
//                 <h4>Hassan Ali</h4>
//                 <p>Documentation.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>  */}
//     </div>
//   );
// };

// //export default developer
import React, { useState, useEffect } from 'react';

import wajid from '../assets/images/wajid.jpg';
import sagheer from '../assets/images/sagheer.png';
import hassan from '../assets/images/hassan.jpg';

const slides = [
  {
    leftContent: <img src={wajid} alt="Wajid Hussain" style={{ width: '300px', height: '300px', borderRadius: '20%' }} />, 
    rightContent: (
      <div>
        <b>Wajid Hussain</b>
        <p>A passionate full-stack developer with expertise in the MERN stack. Skilled in developing scalable applications with a focus on performance and security.</p>
      </div>
    )
  },
  {
    leftContent: <img src={sagheer} alt="Sagheer Abbas" style={{ width: '300px', height: '300px', borderRadius: '20%' }} />, 
    rightContent: (
      <div>
        <b>Sagheer Abbas</b>
        <p>Software engineer specializing in backend development and database management. Passionate about writing optimized and maintainable code.</p>
      </div>
    )
  },
  {
    leftContent: <img src={hassan} alt="Hassan Ali" style={{ width: '300px', height: '300px', borderRadius: '20%' }} />, 
    rightContent: (
      <div>
        <b>Hassan Ali</b>
        <p>Frontend designer with a strong focus on UI/UX and animations. Expert in crafting visually appealing and user-friendly interfaces.</p>
      </div>
    )
  }
];

export default function Developer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const togglePause = () => setIsPaused((prev) => !prev);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div className={`slide ${index === currentSlide ? 'active' : ''}`} key={index}>
          <div className="content">
            <div className="content-left">{slide.leftContent}</div>
            <div className="content-right">{slide.rightContent}</div>
          </div>
        </div>
      ))}

      <div className="slider-controls">
        <button className="slider-control prev" onClick={prevSlide}>←</button>
        <button className="slider-control next" onClick={nextSlide}>→</button>
      </div>

      <button className="pause-button" onClick={togglePause}>{isPaused ? 'Resume' : 'Pause'}</button>

      <style jsx>{`
        .slider {
          position: relative;
          overflow: hidden;
          height: 70vh;
          padding: 150px 0;
        }

        .slide {
          opacity: 0;
          transition: opacity 1s ease-in-out;
          position: absolute;
          width: 100%;
          height: calc(100% - 300px);
        }

        .slide.active {
          opacity: 1;
        }

        .content {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80%;
          height: 100%;
          margin: auto;
        }

        .content-left, .content-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .slider-controls {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .slider-control {
          background: lightblue;
          color: black;
          font-size: 40px;
          font-weight: bold;
          padding: 8px 14px;
          border-radius: 50%;
          cursor: pointer;
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .slider-control:hover {
          opacity: 1;
        }

        .pause-button {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: lightcoral;
          color: white;
          font-size: 18px;
          padding: 10px 20px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .pause-button:hover {
          background: lightblue;
        }
      `}</style>
    </div>
  );
}
