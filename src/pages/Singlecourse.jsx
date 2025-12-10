import React from 'react'

function Singlecourse() {
  return (
    <div className="course container">

     <div className="herosection container">
        <h1 className="about-title">GRAPHIC DESIGN</h1>
        <p className="about-text">
          Foundation in graphic design entails learning the core principles and techniques essential for creating visually appealing and effective designs. This includes understanding concepts like typography, color theory, layout composition, and visual hierarchy, which serve as the building blocks for creating impactful graphic designs across various mediums.
        </p>
      </div>

{/* WHY ENROLL */}
<div className="whyenroll">
    <div className="whytojoin">
        <span>Who Can Enroll</span>
        <h2>who should join this course?</h2>
    </div>

    <div className="enroll-info">
        <p>Whether you're a student from fields like BCA, BTech, or Polytechnic aiming to build creative expertise, a beginner eager to dive into the world of design, or a working professional looking to strengthen your visual communication skills—this course is designed for you. It also suits entrepreneurs, marketers, and freelancers who want to independently craft impactful brand visuals or those preparing a strong portfolio to pursue higher opportunities in the creative industry.</p>
        <button className='black-bg-button'>Enroll Now</button>
    </div>
</div>

{/*  */}

    </div>

  )
}

export default Singlecourse
