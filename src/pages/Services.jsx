// import React from 'react'
// import "../Style/style.css";
// import { Link } from 'react-router-dom';
// import Aos from "aos";
// import 'aos/dist/aos.css';
// import imager from "../assets/Images/heroimg.jpg";
// import brand from "../assets/Images/branding.png";
// import Graphics from "../assets/Images/graphics.png";
// import ui from "../assets/Images/ui.png";
// import img1 from "../assets/Images/one.png";
// import img2 from "../assets/Images/flow-chart.png";
// import img3 from "../assets/Images/collapse-diagonal-line.png";
// import img4 from "../assets/Images/swap-3-line.png";
// import arrowright from "../assets/Images/arrow-right.png";

// function Services() {
//    Aos.init();
//   return (
//     <div className="container">

//       {/*------------------ Hero Section ------------------*/}
//       <div className="herosection container" data-aos="fade-up" data-aos-delay="150">
//         <span>Services</span>
//         <h1>BUILD SMARTER</h1>
//         <p>
//           Whether you’re a startup, a small business, or a brand ready to scale - We design and build digital solutions
//           that help you connect, grow, and lead in your space. With every project, our goal is to bring clarity,
//           efficiency, and long-term functionality to your digital presence.
//         </p>
//       </div>










//       {/*------------------ Hero Image ------------------*/}
//       <div className="hero-img" data-aos="zoom-in"></div>

//       {/*------------------  Creative Design Solutions ------------------*/}
//       <div className="Headingtxt container">
//         <span>What We Offers</span>
//         <h2>Creative design solutions</h2>
//         <p>
//           Our Creative Design Solutions encompass branding, UI/UX, and graphic design, ensuring a cohesive visual identity
//           across all platforms. We craft engaging and intuitive designs that not only captivate users but also drive conversions.
//         </p>
//       </div>

//       {/*------------------ Services Block ------------------*/}
//       <div className="servicebox">
//         <div className="courses-container conatiner">
//           <div className="courses container">
//             <div className="active-box">
//               <div className="heading">
//                 <img src={brand} alt="brand" />
//                 <h3 className='service-title'>Branding</h3>
//               </div>
//               <li>Brand Strategy And Positioning</li>
//               <li>Logo And Visual Identity Creation</li>
//             </div>

//             <div>
//               <div className="heading">
//                 <img src={Graphics} alt="Graphics" />
//                 <h3 className='service-title'>Graphic Design</h3>
//               </div>
//               <li>Marketing Collateral (Brochures, Flyers)</li>
//               <li>Social Media & Advertising Graphics</li>
//             </div>

//             <div className="ux-ui">
//               <div className="heading">
//                 <img src={ui} alt="ui" />
//                 <h3 className='service-title'>UX/UI Design</h3>
//               </div>
//               <li>User Research</li>
//               <li>Wireframing & Prototyping</li>
//               <li>Usability Testing</li>
//             </div>

//           </div>

//           {/* Right side image */}
//           <div className="course-img">
//             <img src={imager} alt="course" />
//           </div>
//         </div>
//       </div>

//       {/*------------------ Web Development ------------------*/}
//       <div className="Headingtxt container">
//         <span>What We Offers</span>
//         <h2>Web development solutions</h2>
//         <p>
//           We build modern and scalable websites with a focus on functionality, performance, and seamless user experience.
//           From landing pages to full-stack systems, we create digital products that solve real problems.
//         </p>
//       </div>

//       {/*  services layout */}
//       <div className="servicebox">
//         <div className="courses-container conatiner">
//           <div className="courses">

//             <div className="active-box">
//               <div className="heading">
//                 <img src={brand} alt="brand" />
//                 <h3 className='service-title'>Branding</h3>
//               </div>
//               <li>Brand Strategy And Positioning</li>
//               <li>Logo And Visual Identity Creation</li>
//             </div>

//             <div>
//               <div className="heading">
//                 <img src={Graphics} alt="Graphics" />
//                 <h3 className='service-title'>Graphic Design</h3>
//               </div>
//               <li>Marketing Collateral (Brochures, Flyers)</li>
//               <li>Social Media & Advertising Graphics</li>
//             </div>

//             <div className="ux-ui">
//               <div className="heading">
//                 <img src={ui} alt="ui" />
//                 <h3 className='service-title'>UX/UI Design</h3>
//               </div>
//               <li>User Research</li>
//               <li>Wireframing & Prototyping</li>
//               <li>Usability Testing</li>
//             </div>

//           </div>

//           <div className="course-img">
//             <img src={imager} alt="course" />
//           </div>
//         </div>
//       </div>

//       {/*------------------ Section: Creative Design Repeated Section ------------------*/}
//       <div className="Headingtxt container">
//         <span>What We Offers</span>
//         <h2>Creative design solutions</h2>
//         <p>
//           Our Creative Design Solutions encompass branding, UI/UX, and graphic design, ensuring consistency and clarity
//           across digital platforms.
//         </p>
//       </div>
//       {/* -------------------- */}
//       <div className="servicebox">
//         <div className="courses-container conatiner">
//           <div className="courses">

//             <div className="active-box">
//               <div className="heading">
//                 <img src={brand} alt="brand" />
//                 <h3 className='service-title'>Branding</h3>
//               </div>
//               <li>Brand Strategy And Positioning</li>
//               <li>Logo And Visual Identity Creation</li>
//             </div>

//             <div>
//               <div className="heading">
//                 <img src={Graphics} alt="Graphics" />
//                 <h3 className='service-title'>Graphic Design</h3>
//               </div>
//               <li>Marketing Collateral (Brochures, Flyers)</li>
//               <li>Social Media & Advertising Graphics</li>
//             </div>

//             <div className="ux-ui">
//               <div className="heading">
//                 <img src={ui} alt="ui" />
//                 <h3 className='service-title'>UX/UI Design</h3>
//               </div>
//               <li>User Research</li>
//               <li>Wireframing & Prototyping</li>
//               <li>Usability Testing</li>
//             </div>

//           </div>

//           <div className="course-img">
//             <img src={imager} alt="course" />
//           </div>
//         </div>
//       </div>
//       {/* ---------------------- IDENTITY SECTION-------------------- */}
//       <div className="identity container" data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-out-cubic" data-aos-delay="150">
//         <div className="Headingtxt container">
//           <span>Let’s Build Together</span>
//           <h2>let’s build your digital identity together</h2>
//           <p>Every business is unique, and its digital presence should be too. BY blending innovation with strategy, We create customised solutions that connect you with your audience and drive meaningful result. Let’s partner to turn you ideas into impactful digital experiences.</p>
//           <Link to='/'><button className='cta-btn black-bg-button'>Start Your Project</button></Link>
//         </div>
//       </div>
//       {/* ---------------------- PORTFOLIO COMPONENT ---------------------- */}
//       <div className="ideas-showcase container" data-aos="fade-up">
//         <div className="Headingtxt container">
//           <span>Case Studies</span>
//           <h2>Concepts brought to life</h2>
//         </div>
//         <div className="ideas-card-wrapper">
//           <div className="idea-card" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="200">
//             <h3>Mudroots Pottery Studio</h3>
//             <p>
//               We designed a responsive minimal website and branding kit for a
//               pottery studio.
//             </p>
//             <div className="Blogbtn">
//               <Link to='/Blogs'><button>View Full Case Study</button></Link>
//               <Link to='/Blogs'><img src={arrowright} alt="arrowright" /></Link>
//             </div>
//           </div>

//           <div className="idea-card"  data-aos="fade-left"  data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="200">
//             <h3>Mudroots Pottery Studio</h3>
//             <p>
//               We designed a responsive minimal website and branding kit for a
//               pottery studio.
//             </p>
//             <div className="Blogbtn">
//               <Link to='/Blogs'><button>View Full Case Study</button></Link>
//               <Link to='/Blogs'><img src={arrowright} alt="arrowright" /></Link>
//             </div>
//           </div>
//         </div>
//         <div className="btn-cont">
//           <Link to="/"><button className="portfoliobtn black-bg-button">View Our Portfolio</button></Link>
//         </div>
//       </div>

//       {/*-------------------- WHY US CONTAINER--------------------------------- */}
//       <div className="whyus container" data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-out-cubic" data-aos-delay="100">
//         <div className="Headingtxt container">
//           <span>Why Netcoder</span>
//           <h2>What Make us the right tech partner for you?</h2>
//         </div>
//         <div className="whyus-grid" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
//           <div class="whyus-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
//             <img src={img1} alt="Design" />
//             <h5>Design-Driven Thinking</h5>
//             <p>Every project begins with a strong design foundation that ensures clarity, usability, and visual impact</p>
//           </div>

//           <div class="whyus-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
//             <img src={img2} alt="solution" />
//             <h5>Custom Solutions, No Templates</h5>
//             <p>Our focus is always on creating thoughtful, tailored solutions that reflects who you are and where you’re headed</p>
//           </div>

//           <div class="whyus-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
//             <img src={img3} alt="workflow" />
//             <h5>Collaborative Workflow</h5>
//             <p>We believe best work comes from open communication and continuous client involvement</p>
//           </div>
//           <div class="whyus-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
//             <img src={img4} alt="Integrated services" />
//             <h5>Integrated  Services Offering</h5>
//             <p>From design to deployment, We bring all your digital needs under one roof</p>
//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default Services
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Aos from "aos";
import 'aos/dist/aos.css';

// Import All Sections from components/sections folder
import ServicesHero from "../components/Services/ServicesHero";
import CreativeService from "../components/Services/CreativeService";
import WebService from "../components/Services/Webdevelopment";
import DigitalIdentityCard from "../components/Services/Build";
import PortfolioSection from "../components/Services/PortfolioSection";
import WhyChooseUs from "../components/Services/WhyChooseUs";



function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <Box sx={{
      overflow: 'hidden',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>

      {/* Hero Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <ServicesHero />
      </Box>

      {/* hero Section image*/}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        {/* < /> */}
      </Box>

{/* creative solutions */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
         <CreativeService /> 
      </Box>

{/* web development solutions */}
 <Box sx={{ width: '85%', maxWidth: '1400px' }}>
         <WebService /> 
      </Box>

{/* creative solutions */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
         <CreativeService /> 
      </Box>

      {/* IDENTITY */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
         <DigitalIdentityCard /> 
      </Box>



      {/* Portfolio Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <PortfolioSection />
      </Box>

        {/* why us Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <WhyChooseUs />
      </Box>

    </Box>
  );
}

export default Home;