 import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  IconButton,
  Grid,
  Modal,
  Fade,
  Backdrop,
  InputBase,
  Select,
  MenuItem,
  Alert,
  CircularProgress
} from "@mui/material";

// ICONS
import CloseIcon from "@mui/icons-material/Close";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyM4tvCz7oMagXxz_nOi8spWIsmkhbpb8",
  authDomain: "otp-netcoder-website-demo.firebaseapp.com",
  projectId: "otp-netcoder-website-demo",
  storageBucket: "otp-netcoder-website-demo.appspot.com",
  messagingSenderId: "635675102143",
  appId: "1:635675102143:web:cbe478339b167bf3c8ef0a",
  measurementId: "G-DHH6BG4TD1"
};

export default function BookDemoClass() {
  const [open, setOpen] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpVerifying, setIsOtpVerifying] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isMorningDisabled, setIsMorningDisabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const otpInputRefs = useRef([]);
  const recaptchaVerifierRef = useRef(null);
  const recaptchaContainerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Graphic Designing",
    date: new Date().toISOString().split('T')[0],
    slot: "Morning",
    address: "",
  });

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Time Logic for disabling morning slot
  useEffect(() => {
    if (open && formData.date === new Date().toISOString().split('T')[0]) {
      const currentHour = new Date().getHours();
      setIsMorningDisabled(currentHour >= 12);
    } else {
      setIsMorningDisabled(false);
    }
  }, [open, formData.date]);

  // Countdown timer for resend OTP
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Set minimum date
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;
    
    if (!formData.date || formData.date < minDate) {
      setFormData(prev => ({ ...prev, date: minDate }));
    }
  }, []);

  const courses = [
    "Graphic Designing",
    "Web Development",
    "Digital Marketing",
    "UI/UX Design",
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
    setSuccess("");
  };

  const handleSlotChange = (slot) => {
    if (slot === "Morning" && isMorningDisabled) return;
    
    const today = new Date().toISOString().split('T')[0];
    const currentHour = new Date().getHours();
    
    if (slot === "Morning" && formData.date === today && currentHour >= 12) {
      setError("❌ You cannot book Morning slot after 12:00 PM for today's date.");
      return;
    }
    
    setFormData((prev) => ({ ...prev, slot: slot }));
    setSuccess(`✔ Slot selected: ${slot}`);
    setError("");
  };

  // OTP Input Handling
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);

    if (value && index < 5 && otpInputRefs.current[index + 1]) {
      otpInputRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        otpInputRefs.current[index - 1].focus();
      } else if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  // Send OTP Function
  const sendOtp = async () => {
    const { name, email, phone } = formData;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const nameRegex = /^[a-zA-Z\s\-']+$/;

    if (!nameRegex.test(name)) {
      setError("Please enter a valid name");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }
    if (!formData.slot) {
      setError("Please select a time slot");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Dynamically import firebase to avoid SSR issues
      const firebase = await import("firebase/app");
      await import("firebase/auth");
      
      // Initialize Firebase if not already initialized
      if (!firebase.getApps().length) {
        firebase.initializeApp(firebaseConfig);
      }

      const auth = firebase.getAuth();
      
      // Initialize recaptcha
      recaptchaVerifierRef.current = new firebase.auth.RecaptchaVerifier(
        recaptchaContainerRef.current,
        {
          size: "invisible",
          callback: () => {
            console.log("reCAPTCHA solved");
          }
        }
      );

      const phoneNumber = `+91${phone}`;
      const result = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifierRef.current
      );

      setConfirmationResult(result);
      setOpen(false);
      setOtpModalOpen(true);
      setIsOtpSent(true);
      setCountdown(30);
      setSuccess("OTP sent successfully to your phone!");
      setError("");
      
      setOtp(["", "", "", "", "", ""]);
      
      setTimeout(() => {
        if (otpInputRefs.current[0]) {
          otpInputRefs.current[0].focus();
        }
      }, 100);
      
    } catch (error) {
      console.error("Error sending OTP:", error);
      setError(error.message || "Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Firebase signInWithPhoneNumber function
  const signInWithPhoneNumber = async (auth, phoneNumber, verifier) => {
    try {
      return await auth.signInWithPhoneNumber(phoneNumber, verifier);
    } catch (error) {
      throw error;
    }
  };

  // Resend OTP Function
  const resendOtp = async () => {
    if (countdown > 0) return;
    
    setIsLoading(true);
    setError("");

    try {
      const firebase = await import("firebase/app");
      await import("firebase/auth");
      
      const auth = firebase.getAuth();
      const { phone } = formData;
      const phoneNumber = `+91${phone}`;
      
      const result = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifierRef.current
      );

      setConfirmationResult(result);
      setCountdown(30);
      setSuccess("OTP resent successfully!");
      setError("");
    } catch (error) {
      console.error("Error resending OTP:", error);
      setError("Failed to resend OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Verify OTP Function
  const verifyOtp = async () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      setError("Please enter the 6-digit OTP");
      return;
    }

    setIsOtpVerifying(true);
    setError("");

    try {
      await confirmationResult.confirm(otpCode);
      
      await submitFormData();
      
      setSuccess("OTP verified successfully! Form submitted.");
      
      setTimeout(() => {
        setOtpModalOpen(false);
        setSuccess("Details Submitted Successfully!");
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "Graphic Designing",
          date: new Date().toISOString().split('T')[0],
          slot: "Morning",
          address: "",
        });
        setOtp(["", "", "", "", "", ""]);
        setIsOtpSent(false);
        
        window.location.reload();
      }, 2000);
      
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setError("Invalid OTP. Please try again.");
    } finally {
      setIsOtpVerifying(false);
    }
  };

  // Submit Form Data
  const submitFormData = async () => {
    try {
      // EmailJS integration
      const emailjs = await import('@emailjs/browser');
      
      const templateParams = {
        name: formData.name,
        number: formData.phone,
        mail: formData.email,
        course: formData.course,
        address: formData.address,
        date: formData.date,
        slot: formData.slot
      };

      await emailjs.send(
        "service_xukw6z4",
        "template_z5b32h5",
        templateParams
      );
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  // Custom CSS Styles
  const customColors = {
    primary: "#FB8454",
    border: "#CCCCCC",
    placeholder: "#AAAAAA",
    text: "#333333"
  };

  const labelStyle = {
    display: "block",
    color: customColors.text,
    fontWeight: "700",
    marginBottom: "8px",
    fontSize: isMobile ? "16px" : "15px",
    fontFamily: "sans-serif",
    textAlign: "left",
    width: "100%"
  };

  const inputSx = {
    width: "100%",
    "& .MuiInputBase-input": {
      height: isMobile ? "48px" : "42px",
      padding: "0 16px",
      boxSizing: "border-box",
      borderRadius: "8px",
      border: `1px solid ${customColors.border}`,
      color: customColors.text,
      fontSize: isMobile ? "16px" : "15px",
      backgroundColor: "white",
      transition: "all 0.3s ease",
      "&::placeholder": { 
        color: customColors.placeholder, 
        opacity: 1,
        fontSize: isMobile ? "14px" : "13px"
      },
      "&:focus": {
        borderColor: customColors.primary,
        borderWidth: "2px",
        outline: "none"
      }
    }
  };

  const selectSx = {
    width: "100%",
    height: isMobile ? "48px" : "42px",
    borderRadius: "8px",
    border: `1px solid ${customColors.border}`,
    color: customColors.text,
    fontSize: isMobile ? "16px" : "15px",
    "& .MuiSelect-select": {
      padding: "0 16px",
      display: "flex",
      alignItems: "center",
      height: "100% !important",
      fontSize: isMobile ? "16px" : "15px",
    },
    "& fieldset": { border: "none" }, 
    "&:focus-within": {
      borderColor: customColors.primary,
      borderWidth: "2px",
      outline: "none"
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#fff",
          padding: "20px",
          fontFamily: "sans-serif",
        }}
      >
        <Box sx={{ 
          backgroundColor: "#FF5722", 
          color: "white", 
          borderRadius: "50px", 
          padding: "6px 22px", 
          fontSize: "13px", 
          fontWeight: "600", 
          mb: 3, 
          letterSpacing: "0.5px" 
        }}>
          Free Demo Class
        </Box>

        <Typography variant="h2" sx={{ 
          fontWeight: "800", 
          color: "#111", 
          fontSize: { xs: "32px", md: "48px" }, 
          lineHeight: 1.2, 
          mb: 3, 
          fontFamily: "sans-serif" 
        }}>
          Still Unsure? Try A Free <br /> Demo Class
        </Typography>

        <Typography sx={{ 
          color: "#444", 
          fontSize: "16px", 
          maxWidth: "750px", 
          lineHeight: 1.6, 
          mb: 5, 
          fontFamily: "sans-serif" 
        }}>
          Experience our teaching approach before making a commitment. Whether
          you're exploring a new skill or planning your career path, our demo class
          gives you a glimpse of how we teach, what you'll learn, and how we can
          help you grow. No pressure—just real learning, right from the start.
        </Typography>

        <Button
          onClick={() => setOpen(true)}
          disableElevation
          sx={{ 
            backgroundColor: "#111", 
            color: "white", 
            padding: { xs: "16px 32px", md: "14px 40px" }, 
            fontSize: { xs: "16px", md: "15px" },
            borderRadius: "8px", 
            fontWeight: "600", 
            textTransform: "none", 
            "&:hover": { backgroundColor: "#333" },
            width: { xs: "100%", sm: "auto" },
            maxWidth: { xs: "100%", sm: "300px" }
          }}
        >
          Book A Demo Class
        </Button>
      </Box>

      {/* Main Form Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500, sx: { backgroundColor: "rgba(0,0,0,0.6)" } }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: { xs: "95%", sm: "680px" },
              outline: "none",
              px: { xs: 2, sm: 3 },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4, md: 5 },
                borderRadius: "20px",
                position: "relative",
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "#fff",
                boxShadow: "0px 10px 40px rgba(0,0,0,0.2)",
                mx: "auto",
              }}
            >
              <IconButton
                onClick={() => setOpen(false)}
                sx={{ 
                  position: "absolute", 
                  right: { xs: 8, sm: 12 }, 
                  top: { xs: 8, sm: 12 }, 
                  color: "#333", 
                  padding: "4px",
                  backgroundColor: "#f5f5f5",
                  "&:hover": { backgroundColor: "#e0e0e0" }
                }}
              >
                <CloseIcon fontSize={isMobile ? "medium" : "small"} />
              </IconButton>

              <Typography align="center" sx={{ 
                color: "#FF5722", 
                fontWeight: "700", 
                fontSize: { xs: "22px", sm: "24px" }, 
                mb: 4, 
                fontFamily: "sans-serif",
                pt: { xs: 1, sm: 0 }
              }}>
                Book Your Demo Class
              </Typography>

              {/* Error/Success Messages */}
              {error && (
                <Alert severity="error" sx={{ mb: 2, borderRadius: "8px" }}>
                  {error}
                </Alert>
              )}
              {success && (
                <Alert severity="success" sx={{ mb: 2, borderRadius: "8px" }}>
                  {success}
                </Alert>
              )}

              <form onSubmit={(e) => { e.preventDefault(); sendOtp(); }}>
                {/* MOBILE LAYOUT */}
                {isMobile ? (
                  <Box sx={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: 2.5,
                    alignItems: "center",
                    width: "100%"
                  }}>
                    
                    {/* Name */}
                    <Box sx={{ width: "100%" }}>
                      <label style={labelStyle}>Name *</label>
                      <InputBase
                        fullWidth
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        sx={inputSx}
                        required
                      />
                    </Box>

                    {/* Course */}
                    <Box sx={{ width: "100%" }}>
                      <label style={labelStyle}>Select Course *</label>
                      <Select
                        fullWidth
                        value={formData.course}
                        onChange={(e) => handleChange("course", e.target.value)}
                        sx={selectSx}
                        required
                      >
                        {courses.map((c) => (
                          <MenuItem key={c} value={c} sx={{ fontSize: "15px" }}>
                            {c}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>

                    {/* Date */}
                    <Box sx={{ width: "100%" }}>
                      <label style={labelStyle}>Select Date *</label>
                      <InputBase
                        fullWidth
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        sx={inputSx}
                        inputProps={{
                          min: new Date().toISOString().split('T')[0],
                          style: {
                            fontSize: "16px",
                            color: formData.date ? customColors.text : customColors.placeholder
                          }
                        }}
                        required
                      />
                    </Box>

                    {/* Phone - Fixed mobile number field */}
                    <Box sx={{ width: "100%" }}>
                      <label style={labelStyle}>Phone Number *</label>
                      <InputBase
                        fullWidth
                        placeholder="Enter 10-digit number"
                        value={formData.phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                          handleChange("phone", value);
                        }}
                        sx={inputSx}
                        inputProps={{
                          inputMode: "numeric",
                          pattern: "[0-9]*",
                          maxLength: 10
                        }}
                        required
                      />
                    </Box>

                    {/* Email */}
                    <Box sx={{ width: "100%" }}>
                      <label style={labelStyle}>Email *</label>
                      <InputBase
                        fullWidth
                        placeholder="your@gmail.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        sx={inputSx}
                        type="email"
                        required
                      />
                    </Box>

                    {/* Address */}
                    <Box sx={{ width: "100%" }}>
                      <label style={labelStyle}>Address *</label>
                      <InputBase
                        fullWidth
                        placeholder="Your full address"
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        sx={inputSx}
                        required
                      />
                    </Box>

                    {/* Slot Selection */}
                    <Box sx={{ width: "100%" }}>
                      <label style={labelStyle}>Select Slot *</label>
                      <Box sx={{ 
                        display: "flex", 
                        gap: "12px", 
                        marginTop: "8px",
                        flexDirection: "column",
                        width: "100%"
                      }}>
                        
                        {/* Morning Button */}
                        <button
                          type="button"
                          onClick={() => handleSlotChange("Morning")}
                          disabled={isMorningDisabled}
                          style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                            border: isMorningDisabled ? "1px solid #eee" : `1px solid ${formData.slot === "Morning" ? customColors.primary : "#CCCCCC"}`,
                            padding: "14px 20px",
                            fontSize: "16px",
                            fontFamily: "sans-serif",
                            cursor: isMorningDisabled ? "not-allowed" : "pointer",
                            transition: "all 0.3s ease",
                            backgroundColor: isMorningDisabled ? "#f9f9f9" : (formData.slot === "Morning" ? customColors.primary : "transparent"),
                            color: isMorningDisabled ? "#ccc" : (formData.slot === "Morning" ? "white" : "#666"),
                            width: "100%",
                            minHeight: "50px",
                            fontWeight: formData.slot === "Morning" ? "600" : "500",
                          }}
                        >
                          <WbSunnyOutlinedIcon sx={{ fontSize: 20 }} />
                          Morning
                        </button>

                        {/* Evening Button */}
                        <button
                          type="button"
                          onClick={() => handleSlotChange("Evening")}
                          style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                            border: `1px solid ${formData.slot === "Evening" ? customColors.primary : "#CCCCCC"}`,
                            padding: "14px 20px",
                            fontSize: "16px",
                            fontFamily: "sans-serif",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            backgroundColor: formData.slot === "Evening" ? customColors.primary : "transparent",
                            color: formData.slot === "Evening" ? "white" : "#666",
                            width: "100%",
                            minHeight: "50px",
                            fontWeight: formData.slot === "Evening" ? "600" : "500",
                          }}
                        >
                          <BedtimeOutlinedIcon sx={{ fontSize: 20 }} />
                          Evening
                        </button>
                      </Box>
                    </Box>

                  </Box>
                ) : (
                  /* DESKTOP/TABLET LAYOUT */
                  <Grid container spacing={3}>
                    
                    {/* Row 1 */}
                    <Grid item xs={12} md={6}>
                      <label style={labelStyle}>Name *</label>
                      <InputBase
                        fullWidth
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        sx={inputSx}
                        required
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <label style={labelStyle}>Select Course *</label>
                      <Select
                        fullWidth
                        value={formData.course}
                        onChange={(e) => handleChange("course", e.target.value)}
                        sx={selectSx}
                        required
                      >
                        {courses.map((c) => (
                          <MenuItem key={c} value={c} sx={{ fontSize: "14px" }}>
                            {c}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>

                    {/* Row 2 */}
                    <Grid item xs={12} md={6}>
                      <label style={labelStyle}>Select Date *</label>
                      <InputBase
                        fullWidth
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        sx={inputSx}
                        inputProps={{
                          min: new Date().toISOString().split('T')[0],
                          style: {
                            fontSize: "15px",
                            color: formData.date ? customColors.text : customColors.placeholder
                          }
                        }}
                        required
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <label style={labelStyle}>Phone Number *</label>
                      <InputBase
                        fullWidth
                        placeholder="Enter 10-digit number"
                        value={formData.phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                          handleChange("phone", value);
                        }}
                        sx={inputSx}
                        inputProps={{
                          inputMode: "numeric",
                          pattern: "[0-9]*",
                          maxLength: 10
                        }}
                        required
                      />
                    </Grid>

                    {/* Row 3 */}
                    <Grid item xs={12} md={6}>
                      <label style={labelStyle}>Email *</label>
                      <InputBase
                        fullWidth
                        placeholder="your@gmail.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        sx={inputSx}
                        type="email"
                        required
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <label style={labelStyle}>Address *</label>
                      <InputBase
                        fullWidth
                        placeholder="Your full address"
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        sx={inputSx}
                        required
                      />
                    </Grid>

                    {/* Row 4: Slot Selection */}
                    <Grid item xs={12}>
                      <label style={labelStyle}>Select Slot *</label>
                      <Box sx={{ 
                        display: "flex", 
                        gap: "10px", 
                        marginTop: "8px"
                      }}>
                        
                        {/* Morning Button */}
                        <button
                          type="button"
                          onClick={() => handleSlotChange("Morning")}
                          disabled={isMorningDisabled}
                          style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                            border: isMorningDisabled ? "1px solid #eee" : `1px solid ${formData.slot === "Morning" ? customColors.primary : "#CCCCCC"}`,
                            padding: "10px 20px",
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                            cursor: isMorningDisabled ? "not-allowed" : "pointer",
                            transition: "all 0.3s ease",
                            backgroundColor: isMorningDisabled ? "#f9f9f9" : (formData.slot === "Morning" ? customColors.primary : "transparent"),
                            color: isMorningDisabled ? "#ccc" : (formData.slot === "Morning" ? "white" : "#666"),
                            width: "auto",
                            minHeight: "42px",
                            fontWeight: formData.slot === "Morning" ? "600" : "500",
                          }}
                        >
                          <WbSunnyOutlinedIcon sx={{ fontSize: 18 }} />
                          Morning
                        </button>

                        {/* Evening Button */}
                        <button
                          type="button"
                          onClick={() => handleSlotChange("Evening")}
                          style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                            border: `1px solid ${formData.slot === "Evening" ? customColors.primary : "#CCCCCC"}`,
                            padding: "10px 20px",
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            backgroundColor: formData.slot === "Evening" ? customColors.primary : "transparent",
                            color: formData.slot === "Evening" ? "white" : "#666",
                            width: "auto",
                            minHeight: "42px",
                            fontWeight: formData.slot === "Evening" ? "600" : "500",
                          }}
                        >
                          <BedtimeOutlinedIcon sx={{ fontSize: 18 }} />
                          Evening
                        </button>
                      </Box>
                    </Grid>
                  </Grid>
                )}

                {/* Send OTP Button */}
                <Box sx={{ 
                  display: "flex", 
                  justifyContent: "center", 
                  mt: isMobile ? 3 : 4,
                  width: "100%"
                }}>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    fullWidth={isMobile}
                    disableElevation
                    variant="contained"
                    sx={{
                      backgroundColor: customColors.primary,
                      color: "white",
                      fontWeight: "600",
                      padding: isMobile ? "16px 20px" : "14px 40px",
                      fontSize: isMobile ? "17px" : "16px",
                      borderRadius: "10px",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#e66e3e" },
                      width: isMobile ? "100%" : "auto",
                      maxWidth: isMobile ? "100%" : "400px",
                      height: isMobile ? "52px" : "48px",
                      boxShadow: "0 4px 12px rgba(251, 132, 84, 0.3)",
                      "&:disabled": {
                        backgroundColor: "#cccccc"
                      }
                    }}
                  >
                    {isLoading ? (
                      <>
                        <CircularProgress size={24} sx={{ color: "white", mr: 2 }} />
                        Sending OTP...
                      </>
                    ) : (
                      "Send OTP"
                    )}
                  </Button>
                </Box>

                {/* reCAPTCHA Container */}
                <div 
                  id="recaptcha-container" 
                  ref={recaptchaContainerRef} 
                  style={{ 
                    display: "none",
                    marginTop: "10px"
                  }}
                ></div>

              </form>
            </Paper>
          </Box>
        </Fade>
      </Modal>

      {/* OTP Verification Modal */}
      <Modal
        open={otpModalOpen}
        onClose={() => setOtpModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500, sx: { backgroundColor: "rgba(0,0,0,0.6)" } }}
      >
        <Fade in={otpModalOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: { xs: "95%", sm: "450px" },
              outline: "none",
              px: 2,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: "20px",
                position: "relative",
                backgroundColor: "#fff",
                boxShadow: "0px 10px 40px rgba(0,0,0,0.2)",
                textAlign: "center",
              }}
            >
              <IconButton
                onClick={() => setOtpModalOpen(false)}
                sx={{ 
                  position: "absolute", 
                  right: 8, 
                  top: 8, 
                  color: "#333",
                  padding: "4px",
                }}
              >
                <CloseIcon />
              </IconButton>

              <Typography sx={{ 
                color: "#FF5722", 
                fontWeight: "700", 
                fontSize: { xs: "22px", sm: "24px" }, 
                mb: 2,
                fontFamily: "sans-serif"
              }}>
                OTP Verification
              </Typography>

              <Typography sx={{ 
                color: "#666", 
                fontSize: { xs: "15px", sm: "16px" }, 
                mb: 3,
                fontFamily: "sans-serif"
              }}>
                Enter the 6-digit OTP sent to<br />
                <strong>+91 {formData.phone}</strong>
              </Typography>

              {/* OTP Input Fields */}
              <Box 
                sx={{ 
                  display: "flex", 
                  justifyContent: "center", 
                  gap: { xs: 1, sm: 1.5 }, 
                  mb: 3,
                  flexWrap: "wrap"
                }}
              >
                {otp.map((digit, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: "50px", sm: "55px" },
                      height: { xs: "60px", sm: "65px" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "12px",
                      border: `2px solid ${error && error.includes("OTP") ? "#f44336" : (digit ? customColors.primary : customColors.border)}`,
                      backgroundColor: digit ? "#FFF5F0" : "white",
                      transition: "all 0.3s ease",
                      boxShadow: digit ? "0 4px 12px rgba(251, 132, 84, 0.15)" : "none",
                    }}
                  >
                    <InputBase
                      inputRef={el => otpInputRefs.current[index] = el}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      inputProps={{
                        maxLength: 1,
                        style: {
                          textAlign: "center",
                          fontSize: { xs: "28px", sm: "32px" },
                          fontWeight: "600",
                          color: customColors.text,
                          width: "100%",
                          height: "100%",
                          padding: 0,
                          caretColor: customColors.primary,
                        }
                      }}
                      sx={{
                        width: "100%",
                        height: "100%",
                        "& .MuiInputBase-input": {
                          textAlign: "center",
                          padding: 0,
                        }
                      }}
                    />
                  </Box>
                ))}
              </Box>

              {/* Error/Success Messages */}
              {error && (
                <Alert severity="error" sx={{ mb: 2, borderRadius: "8px" }}>
                  {error}
                </Alert>
              )}
              {success && (
                <Alert severity="success" sx={{ mb: 2, borderRadius: "8px" }}>
                  {success}
                </Alert>
              )}

              {/* Verify OTP Button */}
              <Button
                onClick={verifyOtp}
                disabled={isOtpVerifying || otp.join('').length !== 6}
                fullWidth
                disableElevation
                variant="contained"
                sx={{
                  backgroundColor: customColors.primary,
                  color: "white",
                  fontWeight: "600",
                  padding: { xs: "16px", sm: "14px" },
                  fontSize: { xs: "17px", sm: "16px" },
                  borderRadius: "10px",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#e66e3e" },
                  height: { xs: "52px", sm: "48px" },
                  boxShadow: "0 4px 12px rgba(251, 132, 84, 0.3)",
                  "&:disabled": {
                    backgroundColor: "#cccccc"
                  },
                  mb: 2
                }}
              >
                {isOtpVerifying ? (
                  <>
                    <CircularProgress size={24} sx={{ color: "white", mr: 2 }} />
                    Verifying...
                  </>
                ) : (
                  "Verify OTP"
                )}
              </Button>

              {/* Resend OTP Section */}
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
                <Typography sx={{ 
                  color: "#999", 
                  fontSize: "14px", 
                  fontFamily: "sans-serif"
                }}>
                  Didn't receive OTP?
                </Typography>
                <Button
                  onClick={resendOtp}
                  disabled={countdown > 0 || isLoading}
                  sx={{
                    color: customColors.primary,
                    fontWeight: "600",
                    fontSize: "14px",
                    textTransform: "none",
                    minWidth: "auto",
                    padding: "4px 8px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: "underline"
                    },
                    "&:disabled": {
                      color: "#999"
                    }
                  }}
                >
                  {countdown > 0 ? `Resend in ${countdown}s` : "Resend OTP"}
                </Button>
              </Box>

              <Typography sx={{ 
                color: "#999", 
                fontSize: "12px", 
                mt: 2,
                fontFamily: "sans-serif"
              }}>
                OTP will expire in 5 minutes
              </Typography>
            </Paper>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}