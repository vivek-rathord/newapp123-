  import React, { useState, useEffect, useRef } from "react";
import { 
  Container, 
  Box, 
  Typography, 
  Button,
  Modal,
  Backdrop,
  Fade
} from "@mui/material";
import "./BookDemoForm.css";

// Use the compat version for consistency with your original code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

 const firebaseConfig = {
  apiKey: "AIzaSyAR51HBee8dlrGE6o_ZGoehCwO2WUzHqzQ",
  authDomain: "otp-netcoder-website-demo.firebaseapp.com",
  projectId: "otp-netcoder-website-demo",
  storageBucket: "otp-netcoder-website-demo.firebasestorage.app",
  messagingSenderId: "635675102143",
  appId: "1:635675102143:web:700387648a02f9a3c8ef0a",
  measurementId: "G-Y2BKC0PXQQ"
};


// Initialize Firebase ONLY ONCE
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const BookDemoClass = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [courses, setCourses] = useState([
    "Web Development",
    "Graphic Designing", 
    "Digital Marketing",
    "UI/UX Design",
    "Mobile App Development",
    "Data Science",
    "Python Programming"
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    course: "",
    date: "",
    address: "",
    slot: "Morning"
  });
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [verifyWarning, setVerifyWarning] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [verificationCompleted, setVerificationCompleted] = useState(false);
  
  const otpInputsRef = useRef([]);
  const recaptchaVerifierRef = useRef(null);
  const confirmationResultRef = useRef(null);

  useEffect(() => {
    // Set minimum date to today
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;
    
    setFormData(prev => ({ ...prev, date: minDate }));
  }, []);

  // Load reCAPTCHA script
  useEffect(() => {
    if (!window.grecaptcha) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log("reCAPTCHA loaded");
      };
      document.head.appendChild(script);
    }
  }, []);

  const handleOpenForm = () => {
    setFormOpen(true);
    setVerificationCompleted(false);
    setOtpSent(false);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    setVerifyWarning("");
  };

  const handleCloseOtpModal = () => {
    setOtpModalOpen(false);
    setOtpError("");
    setOtpSent(false);
    setOtp(["", "", "", "", "", ""]);
    confirmationResultRef.current = null;
    
    // Clear recaptcha
    if (recaptchaVerifierRef.current) {
      try {
        recaptchaVerifierRef.current.clear();
      } catch (error) {
        console.error("Error clearing recaptcha:", error);
      }
      recaptchaVerifierRef.current = null;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const shiftSlot = (slot) => {
    const dateInput = formData.date;
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const currentHour = today.getHours();

    if (slot === "Morning" && dateInput === todayStr && currentHour >= 12) {
      setVerifyWarning("❌ You cannot book Morning slot after 12:00 PM for today's date.");
      return;
    }

    setFormData(prev => ({ ...prev, slot }));
    setVerifyWarning(`✔ Slot selected: ${slot}`);
  };

  const handleOtpChange = (index, value) => {
    // Only allow numbers and limit to 1 digit
    const numericValue = value.replace(/\D/g, '').slice(0, 1);
    
    const newOtp = [...otp];
    newOtp[index] = numericValue;
    setOtp(newOtp);

    // Auto-focus next input
    if (numericValue && index < 5) {
      setTimeout(() => {
        otpInputsRef.current[index + 1]?.focus();
      }, 10);
    }

    // Handle backspace
    if (!numericValue && index > 0) {
      setTimeout(() => {
        otpInputsRef.current[index - 1]?.focus();
      }, 10);
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputsRef.current[index - 1]?.focus();
    }
  };

  const validateForm = () => {
    const { name, email, number } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const nameRegex = /^[a-zA-Z\s\-']+$/;

    if (!name || !email || !number) {
      setVerifyWarning("Please fill all required fields");
      return false;
    }

    if (!nameRegex.test(name)) {
      setVerifyWarning("Please enter a valid name");
      return false;
    }
    
    if (!emailRegex.test(email)) {
      setVerifyWarning("Please enter a valid email address");
      return false;
    }
    
    if (!phoneRegex.test(number.replace(/\D/g, ''))) {
      setVerifyWarning("Please enter a valid 10-digit phone number");
      return false;
    }

    return true;
  };

  const sendOtp = async () => {
    if (!validateForm()) {
      return;
    }

    setVerifyWarning("");
    setIsLoading(true);
    
    // Open OTP modal first
    setFormOpen(false);
    setOtpModalOpen(true);
    
    // Wait for modal to render
    setTimeout(() => {
      try {
        console.log("Starting OTP process...");
        
        // Clear existing recaptcha
        if (recaptchaVerifierRef.current) {
          try {
            recaptchaVerifierRef.current.clear();
          } catch (error) {
            // Ignore clear errors
          }
        }
        
        // Get or create reCAPTCHA container
        let container = document.getElementById('recaptcha-container');
        if (!container) {
          container = document.createElement('div');
          container.id = 'recaptcha-container';
          container.style.display = 'none';
          document.body.appendChild(container);
        }
        
        console.log("Creating reCAPTCHA verifier...");
        
        // Create reCAPTCHA verifier - EXACTLY like your original code
        recaptchaVerifierRef.current = new firebase.auth.RecaptchaVerifier(
          "recaptcha-container",
          {
            'size': 'normal',
            'callback': function(response) {
              console.log("reCAPTCHA verified:", response);
              // After reCAPTCHA is solved, send OTP
              phoneAuth();
            },
            'expired-callback': function() {
              console.log("reCAPTCHA expired");
              setOtpError("Security check expired. Please try again.");
            }
          }
        );
        
        console.log("Rendering reCAPTCHA...");
        
        // Render the reCAPTCHA
        recaptchaVerifierRef.current.render().then(function(widgetId) {
          console.log("reCAPTCHA rendered with widget ID:", widgetId);
          // OTP will be sent when reCAPTCHA is verified via callback
        }).catch(function(error) {
          console.error("Error rendering reCAPTCHA:", error);
          setIsLoading(false);
          setOtpError("Security verification failed. Please refresh the page.");
        });
        
      } catch (error) {
        console.error("Error in sendOtp:", error);
        setIsLoading(false);
        setOtpError("Failed to initialize security verification.");
      }
    }, 300);
  };

  const phoneAuth = () => {
    setIsLoading(true);
    setOtpError("");
    
    const phoneNumber = '+91' + formData.number.replace(/\D/g, '');
    console.log("Sending OTP to:", phoneNumber);
    
    firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifierRef.current)
      .then(function(confirmationResult) {
        console.log("OTP sent successfully");
        confirmationResultRef.current = confirmationResult;
        window.confirmationResult = confirmationResult; // For compatibility
        setOtpSent(true);
        setIsLoading(false);
      })
      .catch(function(error) {
        console.error("Error sending OTP:", error);
        setIsLoading(false);
        
        let errorMessage = "Failed to send OTP. Please try again.";
        
        if (error.code === 'auth/invalid-phone-number') {
          errorMessage = "Invalid phone number format.";
        } else if (error.code === 'auth/too-many-requests') {
          errorMessage = "Too many attempts. Please try again later.";
        } else if (error.code === 'auth/invalid-app-credential') {
          errorMessage = "Firebase configuration error. Please contact support.";
        } else if (error.code === 'auth/captcha-check-failed') {
          errorMessage = "Security check failed. Please refresh and try again.";
        }
        
        setOtpError(errorMessage);
      });
  };

  const verifyOtp = () => {
    const otpString = otp.join("");
    
    if (otpString.length !== 6) {
      setOtpError("Please enter 6-digit OTP");
      return;
    }

    if (!confirmationResultRef.current) {
      setOtpError("OTP session expired. Please request a new OTP.");
      return;
    }

    setIsLoading(true);
    setOtpError("Verifying...");
    
    confirmationResultRef.current.confirm(otpString)
      .then(function(result) {
        // OTP verified successfully
        console.log("OTP verified successfully, user:", result.user.uid);
        setIsLoading(false);
        setOtpError("✅ Phone number verified successfully!");
        setVerificationCompleted(true);
        
        // Automatically submit after 2 seconds
        setTimeout(() => {
          handleCloseOtpModal();
          submitForm();
        }, 2000);
        
      })
      .catch(function(error) {
        console.error("Error verifying OTP:", error);
        setIsLoading(false);
        
        let errorMessage = "Incorrect OTP. Please try again.";
        if (error.code === 'auth/invalid-verification-code') {
          errorMessage = "Incorrect OTP code.";
        } else if (error.code === 'auth/code-expired') {
          errorMessage = "OTP has expired. Please request a new OTP.";
        }
        
        setOtpError(errorMessage);
      });
  };

  const submitForm = () => {
    // Here you can add your form submission logic
    console.log("Form data submitted:", formData);
    
    // You can integrate with EmailJS here
    // emailjs.send("service_xukw6z4", "template_z5b32h5", {
    //   name: formData.name,
    //   number: formData.number,
    //   mail: formData.email,
    //   course: formData.course,
    //   address: formData.address,
    //   date: formData.date,
    //   slot: formData.slot
    // });
    
    // Show success message
    alert("✅ Demo class booked successfully! We'll contact you soon.");
    
    // Reset form
    resetForm();
  };

  const resetForm = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;
    
    setFormData({
      name: "",
      email: "",
      number: "",
      course: "",
      date: minDate,
      address: "",
      slot: "Morning"
    });
    setOtp(["", "", "", "", "", ""]);
    setVerifyWarning("");
    setOtpError("");
    setOtpSent(false);
    setVerificationCompleted(false);
    setIsLoading(false);
  };

  // Auto-focus first OTP input
  useEffect(() => {
    if (otpModalOpen && otpInputsRef.current[0] && otpSent) {
      setTimeout(() => {
        otpInputsRef.current[0].focus();
      }, 100);
    }
  }, [otpModalOpen, otpSent]);

  return (
    <>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <Box sx={{ 
          backgroundColor: "#FF5722", 
          color: "white", 
          borderRadius: "50px", 
          p: "6px 22px", 
          fontSize: "13px", 
          fontWeight: "600", 
          mb: 3,
          display: "inline-block"
        }}>
          Free Demo Class
        </Box>
        
        <Typography variant="h2" sx={{ 
          fontWeight: "800", 
          color: "#111", 
          fontSize: { xs: "28px", sm: "36px", md: "48px" }, 
          mb: 3,
          lineHeight: 1.2
        }}>
          Still Unsure? Try A Free <br /> Demo Class
        </Typography>
        
        <Typography sx={{ 
          color: "#444", 
          fontSize: "16px", 
          maxWidth: "750px", 
          mb: 5,
          mx: "auto"
        }}>
          Experience our teaching approach before making a commitment.
        </Typography>
        
        <Button
          onClick={handleOpenForm}
          disableElevation
          sx={{ 
            backgroundColor: "#111", 
            color: "white", 
            p: "14px 40px", 
            borderRadius: "8px", 
            fontWeight: "600", 
            fontSize: "16px",
            "&:hover": { backgroundColor: "#333" }
          }}
        >
          Book A Demo Class
        </Button>
      </Container>

      {/* Main Form Modal */}
      <Modal
        open={formOpen}
        onClose={handleCloseForm}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={formOpen}>
          <div className="book-demo-modal">
            <div className="book-demo">
              <span className="close-btn" onClick={handleCloseForm}>×</span>
              <h2><span>Book Your Demo class</span></h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="main-inputs">
                  <div>
                    <label htmlFor="name">Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="course">Select Course *</label>
                    <select 
                      name="course" 
                      id="course" 
                      className="demo-courses"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="date">Select Date *</label>
                    <input 
                      type="date" 
                      name="date" 
                      id="date" 
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="number">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="number" 
                      id="number" 
                      placeholder="77788-89999"
                      value={formData.number}
                      onChange={handleInputChange}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email">Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      placeholder="your@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address">Address</label>
                    <input 
                      type="text" 
                      name="address" 
                      id="address" 
                      placeholder="Your full address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="book-demo-slot">
                  <label htmlFor="slot">Select Slot *</label>
                  <div className="book-demo-slot-btn">
                    <button 
                      type="button"
                      className={`btn1 ${formData.slot === "Morning" ? "active-btn" : ""}`}
                      onClick={() => shiftSlot("Morning")}
                    >
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.66047 13.5123C11.7878 13.5123 13.5123 11.7878 13.5123 9.66047C13.5123 7.53316 11.7878 5.80863 9.66047 5.80863C7.53315 5.80863 5.80862 7.53316 5.80862 9.66047C5.80862 11.7878 7.53315 13.5123 9.66047 13.5123Z" strokeWidth="1.2" strokeMiterlimit="10" />
                        <path d="M9.66043 1.3208V3.80876" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M9.66043 15.5122V18.0002" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M1.32108 9.66036H3.80885" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M15.512 9.66036H17.9998" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M3.76312 15.5573L5.52235 13.7983" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M13.7982 5.52266L15.5574 3.76346" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M15.5574 15.5573L13.7982 13.7983" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M5.52235 5.52266L3.76312 3.76346" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" />
                      </svg>
                      <span> Morning</span>
                    </button>
                    <button 
                      type="button"
                      className={`btn2 ${formData.slot === "Evening" ? "active-btn" : ""}`}
                      onClick={() => shiftSlot("Evening")}
                    >
                      <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8C18 4.13487 14.8661 1 11 1C7.13387 1 4 4.13343 4 7.99855" strokeWidth="1.2" strokeMiterlimit="10" />
                        <path d="M1 8H21" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M4 10.5H18" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M7.5 13H14.5" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" />
                      </svg>
                      <span> Evening</span>
                    </button>
                  </div>
                </div>

                <p className="verify_war">{verifyWarning}</p>

                <div className="book-demo-submit">
                  <button 
                    type="button" 
                    className="color-btn" 
                    onClick={sendOtp}
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Submit Your Details"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>

      {/* OTP Verification Modal */}
      <Modal
        open={otpModalOpen}
        onClose={handleCloseOtpModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={otpModalOpen}>
          <div className="background" id="otpModal">
            <div className="otp">
              <span className="close-btn" onClick={handleCloseOtpModal} style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                fontSize: "22px",
                fontWeight: "bold",
                cursor: "pointer",
                color: "#333"
              }}>&times;</span>

              <form onSubmit={(e) => e.preventDefault()}>
                <h3>Verify Mobile Number</h3>
                
                {!otpSent ? (
                  <p style={{ textAlign: 'center', marginBottom: '20px', color: '#666' }}>
                    Please complete the security check to receive OTP...
                  </p>
                ) : (
                  <p style={{ textAlign: 'center', marginBottom: '20px', color: '#4CAF50' }}>
                    ✅ OTP sent to +91{formData.number.replace(/\D/g, '')}
                  </p>
                )}
                
                <div className="otpNumber">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="number"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      ref={(el) => otpInputsRef.current[index] = el}
                      disabled={!otpSent || verificationCompleted}
                      autoFocus={index === 0 && otpSent}
                    />
                  ))}
                </div>
                
                <div className="error-msg">
                  <span className="error-msg-span">{otpError}</span>
                </div>
                
                {!otpSent && (
                  <p className="otpPara">Complete the security check to get OTP</p>
                )}
                
                {/* Hidden reCAPTCHA container */}
                <div id="recaptcha-container" style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  margin: '15px 0' 
                }}></div>
                
                <button 
                  type="button" 
                  className="otp-btn-verify" 
                  onClick={verifyOtp}
                  disabled={isLoading || verificationCompleted || !otpSent || otp.join("").length !== 6}
                  style={verificationCompleted ? { 
                    backgroundColor: '#4CAF50',
                    cursor: 'default'
                  } : {}}
                >
                  {isLoading ? "Processing..." : 
                   verificationCompleted ? "✅ Verified Successfully!" : 
                   "Verify OTP and Book Demo Class"}
                </button>
                
                {otpSent && !verificationCompleted && !isLoading && (
                  <p style={{ 
                    textAlign: 'center', 
                    marginTop: '15px', 
                    fontSize: '12px', 
                    color: '#666',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                  onClick={() => {
                    if (!isLoading) {
                      setOtpError("");
                      setOtpSent(false);
                      sendOtp();
                    }
                  }}>
                    Didn't receive OTP? Click to resend
                  </p>
                )}
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default BookDemoClass;