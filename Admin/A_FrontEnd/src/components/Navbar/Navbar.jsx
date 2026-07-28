// import React from 'react';
// import person from "../../assets/images/myPic.jpg"
// import logo from "../../assets/images/black.png"
// import { Link } from 'react-router-dom';
// // import { ProfilePage } from '../profile/userProfile';

// export const  Navbar = () => {

//   return (
//     <nav className="  fixed top-0 left-16 right-0   flex items-center justify-between px-6 py-4 bg-white shadow-md ">

//       <Link href='' className='' >
       
//         <div className="flex ml-15">
//                 <img
//                   src={logo}
//                   alt="logo"
                
//                   className="w-full dark:hidden w-50 h-14"
//                 />
//               {/* <h1 class="text-3xl font-semibold">PLM</h1> */}
//         </div>
//       </Link>
         
//       <div className="flex items-center px-7 ">
//         {/* <ul className="block lg:flex lg:space-x-12">
          
//           <li>
//             <button className="hover:text-custom-blue focus:outline-none" onClick={() => window.location.href = "/dashboard"}>
//               Dashboard
//             </button>
//           </li>
//           <li>
//             <button className="hover:text-custom-blue focus:outline-none" onClick={() => window.location.href = "/projects"}>
//               Projects
//             </button>
//           </li>
//           <li>
//             <button className="hover:text-custom-blue focus:outline-none">Documentation</button>
//           </li>
//           <li>
//             <Link to="/" className="hover:text-custom-blue">
//               Tasks
//             </Link>
//           </li>
//           <li>
//             <Link to="#" className="mr-10  hover:text-custom-blue">Team</Link>
//           </li>
//         </ul> */}
//         <img src={person} alt="User Profile" className="w-12 h-12 ml-4 text-center rounded-full" />
//         <div className='flex flex-col'>
//          <Link to="/userProfile">
//          <span className="ml-2 font-semibold text-gray-600">Wajid Hussain</span>
//          </Link>
      
//         { <span className="ml-2 text-gray-500 from-neutral-100 to-slate-400 h-5 text-sm">(Admin)</span> }
//         </div>  
//       </div>
//     </nav>
//   );
// };

import React from 'react';
import person from "../../assets/images/wajid.jpg";
import logo from "../../assets/images/black.png";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-16 right-0 flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <Link to="/" className="">
        <div className="flex ml-15">
          <img
            src={logo}
            alt="logo"
            className="w-full dark:hidden w-50 h-14"
          />
        </div>
      </Link>

      <div className="flex items-center px-7">
        <img src={person} alt="User Profile" className="w-12 h-12 ml-4 text-center rounded-full" />
        <div className='flex flex-col'>
          <Link to="/userProfile">
            <span className="ml-2 font-semibold text-gray-600">Wajid Hussain</span>
          </Link>
          <span className="ml-2 text-gray-500 from-neutral-100 to-slate-400 h-5 text-sm">(Admin)</span>
        </div>
      </div>
    </nav>
  );
};

