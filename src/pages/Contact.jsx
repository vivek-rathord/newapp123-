import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../Style/Style.css";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

function Contact() {
 useEffect(() => {
     Aos.init();
   }, [])
  const [open, setOpen] = useState(false);
  const form = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    // hide all form elements
    const allForms = document.querySelectorAll(".contact-wrapper");
    allForms.forEach((form) => {
      form.style.display = "none";
    });

    // Navigate to contact form again
    navigate("/contact");
  };



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send. Please try again.");
        }
      );
  };
  // regular couses script
  useEffect(() => {
    const regularBtn = document.getElementById("regularBtn");
    const regularForm = document.getElementById("regularForm");

    const industrialBtn = document.getElementById("industrialBtn");
    const industrialForm = document.getElementById("industrialForm");

    const servicesBtn = document.getElementById("servicesBtn");
    const servicesForm = document.getElementById("servicesform");

    const hideAllForms = () => {
      if (regularForm) regularForm.style.display = "none";
      if (industrialForm) industrialForm.style.display = "none";
      if (servicesForm) servicesForm.style.display = "none";
    };

    if (regularBtn && regularForm) {
      regularBtn.onclick = () => {
        hideAllForms();
        regularForm.style.display = "flex";
        window.scrollTo(0, regularForm.offsetTop);
      };
    }

    if (industrialBtn && industrialForm) {
      industrialBtn.onclick = () => {
        hideAllForms();
        industrialForm.style.display = "flex";
        window.scrollTo(0, industrialForm.offsetTop);
      };
    }

    if (servicesBtn && servicesForm) {
      servicesBtn.onclick = () => {
        hideAllForms();
        servicesForm.style.display = "flex";
        window.scrollTo(0, servicesForm.offsetTop);
      };
    }
  }, []);

  return (
    <div className="contactcont container">
      <div className="herosection container" data-aos="fade-up" data-aos-delay="150">
        <span>Contact</span>
        <h1>
          We’d Love To Hear
          <br /> From You
        </h1>
        <p>
          Whether you’re looking to kickstart your learning journey or need
          tailored IT solutions for your business, we’re just a message away.
          Reach out with your queries, ideas, or collaboration requests. We’ll
          get back to you as soon as possible.
        </p>
      </div>

      {/* ----------Query Section----- */}
      <div className="querysection container" data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-out-cubic" data-aos-delay="150">
        <h2>Tell Us What You’re Looking For</h2>
        <h3>Choose Your Area of Interest</h3>
        <p>
          Select whether your inquiry is about our IT education programs or IT
          services. This helps us connect you with the right team quickly.
        </p>

        <div className="query-btns">
          <button onClick={handleClick}>Education</button>

          <button id="servicesBtn">Services</button>


          {/* Hidden Buttons */}
          <div className={`edu-box ${open ? "show" : ""}`}>

            <button id="regularBtn">Regular Courses</button>

            <button id='industrialBtn'>Industrial Training</button>
          </div>
        </div>
      </div>

      {/* ----------Get in touch---------- */}
      <div className="Headingtxt container">
        <span>Get In Touch</span>
        <h1>
          Prefer to reach us <br />
          directly?
        </h1>
      </div>

      <div className="main-contact">
        <div className="contactinfo container" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
          <div className="icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="location">
            <h4>Office</h4>
            <h5>Dharamshala, Himachal Pradesh</h5>
            <p>
              Near Govt. ITI, above Gramin Bank Dari, Dharamshala (176057)
            </p>
          </div>
        </div>

        <div className="contactinfo container"  data-aos="fade-left" data-aos-duration="900" data-aos-delay="300">
          <div className="icon">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="location">
            <h4>Phone</h4>
            <h5>+91 9816732055, 7590832055</h5>
            <p>Mon to Sat 10 am to 5 pm</p>
          </div>
        </div>

        <div className="contactinfo container"  data-aos="fade-left" data-aos-duration="900" data-aos-delay="450">
          <div className="icon" >
            <i className="fa-solid fa-message"></i>
          </div>
          <div className="location">
            <h4>Chat to us</h4>
            <h5>info@netcoder.in</h5>
            <p>Send us your query anytime!</p>
          </div>
        </div>
      </div>

      {/* ---------- Regular Contact Form---------- */}
      <div className="contact-wrapper container" id="regularForm">
        <div className="close-btn" onClick={handleClose}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Your Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            required
          />

          <label>Mobile Number</label>
          <input
            type="text"
            name="user_number"
            placeholder="Enter Your Mobile Number"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
            required
          />

          <label htmlFor="course">Select A Course</label>
          <select name="course" id="course" defaultValue="">
            <option value="" disabled >Select a course</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="graphic-design">Web Designing</option>
            <option value="graphic-design">2D/3D Animation</option>
            <option value="graphic-design"></option>

            <option value="ui-ux">UI/UX Design</option>
            <option value="web-dev">Web Development</option>
            <option value="wordpress">WordPress</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="social-media">Social Media Marketing</option>
            <option value="social-media">Mern Stack</option>
            <option value="social-media">Auto CAD</option>


          </select>

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write Us A Message"
          ></textarea>

          <button className="black-bg-button" type="submit">Submit</button>
        </form>
      </div>

      {/* ---------- Industrial Traning Contact Form---------- */}
      <div className="contact-wrapper container" id="industrialForm">
        <div className="close-btn" onClick={handleClose}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Your Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            required
          />

          <label>Mobile Number</label>
          <input
            type="text"
            name="user_number"
            placeholder="Enter Your Mobile Number"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
            required
          />
          <label htmlFor="course">Select A Course</label>
          <select name="course" id="course" defaultValue="">
            <option value="" disabled >Select a course</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="ui-ux">UI/UX Design</option>
            <option value="web-dev">Web Development</option>
            <option value="wordpress">WordPress</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="social-media">Social Media Marketing</option>
          </select>

          <label htmlFor="Duration">Duration</label>
          <select name="Duration" id="Duration" defaultValue="">
            <option value="" disabled>45 Days</option>
            <option value="6 Month">6 Months</option>
            <option value="6 Month">6 Month</option>
            <option value="3 Years">3 Years</option>
          </select>




          <button className="black-bg-button" type="submit">Submit</button>
        </form>
      </div>

      {/* ---------- Services Traning Contact Form---------- */}
      <div className="contact-wrapper container" id="servicesform">
        <div className="close-btn" onClick={handleClose}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Your Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            required
          />

          <label>Mobile Number</label>
          <input
            type="text"
            name="user_number"
            placeholder="Enter Your Mobile Number"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
            required
          />

          <label>What Brings You Here Today</label>
          <select name="course" id="course" defaultValue="">
            <option value="" disabled >Needs A Social Manager</option>

          </select>

          <button className="black-bg-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );  
}

export default Contact;
