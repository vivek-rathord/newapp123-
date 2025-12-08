// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import Aos from "aos";
// import 'aos/dist/aos.css';
// import img1 from "../assets/Images/one.png";
// import img2 from "../assets/Images/flow-chart.png";
// import img3 from "../assets/Images/collapse-diagonal-line.png";
// import img4 from "../assets/Images/swap-3-line.png";

// function Education() {
//   Aos.init();
//   useEffect(() => {
//     // Simple script for beginners — works for all sliders
//     const carousels = document.querySelectorAll(".courses");

//     carousels.forEach((carousel) => {
//       const cards = carousel.querySelector(".coursecards");
//       const leftBtn = carousel.querySelector(".leftBtn");
//       const rightBtn = carousel.querySelector(".rightBtn");

//       // Scroll left
//       leftBtn.onclick = function () {
//         cards.scrollBy({
//           left: -400,
//           behavior: "smooth",
//         });
//       };

//       // Scroll right
//       rightBtn.onclick = function () {
//         cards.scrollBy({
//           left: 400,
//           behavior: "smooth",
//         });
//       };
//     });
//   }, []);

//   return (
//     <div className="container">
//       {/* ------------ HERO SECTION ------------ */}
//       <div className="herosection container" data-aos="fade-up" data-aos-delay="150">
//         <span>Education</span>
//         <h1>START LEARNING</h1>
//         <p>
//           Whether you’re just beginning or looking to upgrade your skills, our
//           courses are designed to help you grow confidently. With hands-on
//           training, real-world projects, and a focus on industry-relevant tools,
//           we ensure you not only learn but apply.
//         </p>
//       </div>

//       <div className="hero-img" data-aos="zoom-in"></div>

//       <div className="coursesbtns">
//         <Link to="/education"><button>Regular Courses</button></Link>
//         <Link to="/"><button>Industrial Training</button></Link>
//       </div>

//       {/* ------------ Carousel 1 ------------ */}
//       <div className="courses container">
//         <div className="course-info">
//           <span>Regular Courses</span>
//           <h2>Design & Multimedia Courses</h2>
//         </div>

//           <div className="coursecards">
//           <div className="course-box"><h4>Graphic Design</h4>
//           <p>Foundation in graphic design entails learning the core principles and techniques essential for creating visually appealing and effective designs. This includes understanding concepts like typography, color theory, layout composition, and visual hierarchy, which serve as the building blocks for creating impactful graphic designs across various mediums.</p>
//           </div>
//           <div className="course-box"><h4>UX/UI Design</h4>
//           <p>UI (User Interface) refers to the visual elements and layout of a digital product, focusing on how users interact with it. UX (User Experience) encompasses the overall feel of the product, including ease of use, accessibility, and satisfaction. In short, UI is about design, while UX is about the overall user journey and satisfaction.</p>
//           </div>
//           <div className="course-box">
//             <h4>Web Development</h4>
//             <p>The foundations of web development, such as HTML, CSS, and JavaScript, as well as more complex subjects like front-end frameworks and back-end development, are covered in this syllabus. Through projects and portfolio creation, students receive practical experience that equips them for careers in web development.</p></div>
//           <div className="course-box">
//             <h4>WordPress</h4>
//             <p>Over 40% of all websites on the internet are powered by WordPress, a free and open-source content management system (CMS) that makes it simple for users to create and manage blogs and websites. Based on PHP and MySQL, WordPress provides a highly customizable platform with an extensive library of themes and plugins.</p>
//             </div>
//           <div className="course-box">
//             <h4>Digital Marketing</h4>
//             <p>Join us to turn your passion for digital marketing into a successful career! Our 12-month Digital Marketing course covers key topics like SEO, social media marketing, content marketing, paid advertising, email marketing, and analytics. You'll gain practical experience and industry insights, learning to develop and optimize effective marketing strategies.</p></div>
//           <div className="course-box">
//             <h4>Social Media Marketing</h4>
//           <p>With this extensive course, you will learn the fundamentals of social media marketing. Discover how to build focused advertising campaigns, manage online communities on Facebook, Instagram, Twitter, and LinkedIn, and produce interesting content. Acquire practical experience in real-life projects, sophisticated targeting methods, and influencer marketing tactics to thr.</p></div>
//         </div>

//         <div className="course-btns">
//           <button className="leftBtn"><i className="fa-solid fa-arrow-left"></i></button>
//           <button className="rightBtn"><i className="fa-solid fa-arrow-right"></i></button>
//         </div>
//       </div>

//       {/* ------------ Carousel 2 ------------ */}
//       <div className="courses container">
//         <div className="course-info">
//           <span>Regular Courses</span>
//           <h2>CMS & Web Technologies Courses</h2>
//         </div>

//         <div className="coursecards">
//           <div className="course-box"><h4>Graphic Design</h4>
//           <p>Foundation in graphic design entails learning the core principles and techniques essential for creating visually appealing and effective designs. This includes understanding concepts like typography, color theory, layout composition, and visual hierarchy, which serve as the building blocks for creating impactful graphic designs across various mediums.</p>
//           </div>
//           <div className="course-box"><h4>UX/UI Design</h4>
//           <p>UI (User Interface) refers to the visual elements and layout of a digital product, focusing on how users interact with it. UX (User Experience) encompasses the overall feel of the product, including ease of use, accessibility, and satisfaction. In short, UI is about design, while UX is about the overall user journey and satisfaction.</p>
//           </div>
//           <div className="course-box">
//             <h4>Web Development</h4>
//             <p>The foundations of web development, such as HTML, CSS, and JavaScript, as well as more complex subjects like front-end frameworks and back-end development, are covered in this syllabus. Through projects and portfolio creation, students receive practical experience that equips them for careers in web development.</p></div>
//           <div className="course-box">
//             <h4>WordPress</h4>
//             <p>Over 40% of all websites on the internet are powered by WordPress, a free and open-source content management system (CMS) that makes it simple for users to create and manage blogs and websites. Based on PHP and MySQL, WordPress provides a highly customizable platform with an extensive library of themes and plugins.</p>
//             </div>
//           <div className="course-box">
//             <h4>Digital Marketing</h4>
//             <p>Join us to turn your passion for digital marketing into a successful career! Our 12-month Digital Marketing course covers key topics like SEO, social media marketing, content marketing, paid advertising, email marketing, and analytics. You'll gain practical experience and industry insights, learning to develop and optimize effective marketing strategies.</p></div>
//           <div className="course-box">
//             <h4>Social Media Marketing</h4>
//           <p>With this extensive course, you will learn the fundamentals of social media marketing. Discover how to build focused advertising campaigns, manage online communities on Facebook, Instagram, Twitter, and LinkedIn, and produce interesting content. Acquire practical experience in real-life projects, sophisticated targeting methods, and influencer marketing tactics to thr.</p></div>
//         </div>

//         <div className="course-btns">
//           <button className="leftBtn"><i className="fa-solid fa-arrow-left"></i></button>
//           <button className="rightBtn"><i className="fa-solid fa-arrow-right"></i></button>
//         </div>
//       </div>

//       {/* ------------ Carousel 3 ------------ */}
//       <div className="courses container">
//         <div className="course-info">
//           <span>Regular Courses</span>
//           <h2>Digital Marketing Courses</h2>
//         </div>

//           <div className="coursecards">
//           <div className="course-box"><h4>Graphic Design</h4>
//           <p>Foundation in graphic design entails learning the core principles and techniques essential for creating visually appealing and effective designs. This includes understanding concepts like typography, color theory, layout composition, and visual hierarchy, which serve as the building blocks for creating impactful graphic designs across various mediums.</p>
//           </div>
//           <div className="course-box"><h4>UX/UI Design</h4>
//           <p>UI (User Interface) refers to the visual elements and layout of a digital product, focusing on how users interact with it. UX (User Experience) encompasses the overall feel of the product, including ease of use, accessibility, and satisfaction. In short, UI is about design, while UX is about the overall user journey and satisfaction.</p>
//           </div>
//           <div className="course-box">
//             <h4>Web Development</h4>
//             <p>The foundations of web development, such as HTML, CSS, and JavaScript, as well as more complex subjects like front-end frameworks and back-end development, are covered in this syllabus. Through projects and portfolio creation, students receive practical experience that equips them for careers in web development.</p></div>
//           <div className="course-box">
//             <h4>WordPress</h4>
//             <p>Over 40% of all websites on the internet are powered by WordPress, a free and open-source content management system (CMS) that makes it simple for users to create and manage blogs and websites. Based on PHP and MySQL, WordPress provides a highly customizable platform with an extensive library of themes and plugins.</p>
//             </div>
//           <div className="course-box">
//             <h4>Digital Marketing</h4>
//             <p>Join us to turn your passion for digital marketing into a successful career! Our 12-month Digital Marketing course covers key topics like SEO, social media marketing, content marketing, paid advertising, email marketing, and analytics. You'll gain practical experience and industry insights, learning to develop and optimize effective marketing strategies.</p></div>
//           <div className="course-box">
//             <h4>Social Media Marketing</h4>
//           <p>With this extensive course, you will learn the fundamentals of social media marketing. Discover how to build focused advertising campaigns, manage online communities on Facebook, Instagram, Twitter, and LinkedIn, and produce interesting content. Acquire practical experience in real-life projects, sophisticated targeting methods, and influencer marketing tactics to thr.</p></div>
//         </div>

//         <div className="course-btns">
//           <button className="leftBtn"><i className="fa-solid fa-arrow-left"></i></button>
//           <button className="rightBtn"><i className="fa-solid fa-arrow-right"></i></button>
//         </div>
//       </div>

//       {/* Book demo class */}
// <div className="build-team" data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-out-cubic" data-aos-delay="150">
//         <div className="Headingtxt container">
//           <span>Free Demo Class</span>
//           <h2>Still Unsure? Try a free <br /> demo class</h2>
//           <p>
//             Experience our teaching approach before making a commitment. Whether you're exploring a new skill or planning your career path, our demo class gives you a glimpse of how we teach, what you’ll learn, and how we can help you grow. No pressure—just real learning, right from the start.
//           </p>
// <Link to='/contact'><button className="black-bg-button">Book A Demo Class</button></Link>
//           <div className="query-btns">
           
//           </div>
//         </div>
//       </div>

//       {/* ------------ WHY US ------------ */}
//       <div className="whyus container"  data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-out-cubic" data-aos-delay="100">
//         <div className="Headingtxt container">
//           <span>Why Netcoder</span>
//           <h2>Why Choose Netcoder for your learning journey?</h2>
//         </div>
//         <div className="whyus-grid" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
//           <div className="whyus-box"  data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
//             <img src={img1} alt="Design" />
//             <h5>Practical, hands-on learning</h5>
//             <p>We emphasise doing over memorising...</p>
//           </div>
//           <div className="whyus-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
//             <img src={img2} alt="solution" />
//             <h5>Industry-experienced mentors</h5>
//             <p>Learn directly from professionals...</p>
//           </div>
//           <div className="whyus-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
//             <img src={img3} alt="workflow" />
//             <h5>Real-world projects</h5>
//             <p>Build portfolio-worthy projects...</p>
//           </div>
//           <div className="whyus-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
//             <img src={img4} alt="Integrated services" />
//             <h5>Flexible duration and formats</h5>
//             <p>Pick a pace and style that suits you...</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Education;
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Aos from "aos";
import 'aos/dist/aos.css';

// Import All Sections from components/sections folder
import EducationHero from "./Education/EducationHero";
import BookDemo from "./Education/Bookdemo";
import WhyNetcoder from "./Education/WhyNetcoder";
import CoursesSection from "./Education/Courses";
import StudentSection from "./Education/StudentsSection";


function Education() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>

      {/* Hero Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <EducationHero />
      </Box>

      {/* hero Section image*/}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <CoursesSection />
      </Box>


  

      {/* Book Demo */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
         <BookDemo /> 
      </Box>


 {/*Student Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
         <StudentSection /> 
      </Box>


    
        {/* why us Section */}
      <Box sx={{ width: '85%', maxWidth: '1400px' }}>
        <WhyNetcoder />
      </Box>

    </Box>
  );
}

export default Education;