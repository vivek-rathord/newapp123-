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

export default function BookDemoClass() {
  const [open, setOpen] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpVerifying, setIsOtpVerifying] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isMorningDisabled, setIsMorningDisabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [useFallback, setUseFallback] = useState(false);

  const otpInputRefs = useRef([]);
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

  // --- OTP LOGIC (Firebase + Fallback) ---

  const generateRandomOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

  const simulateOtpVerification = async (phone) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const otp = generateRandomOtp();
        console.log(`Simulated OTP for ${phone}: ${otp}`);
        resolve({ success: true, otp: otp });
      }, 1500);
    });
  };

  const sendOtp = async (e) => {
    if(e) e.preventDefault();
    const { name, email, phone } = formData;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    
    if (!name) { setError("Please enter your name"); return; }
    if (!emailRegex.test(email)) { setError("Please enter a valid email"); return; }
    if (!phoneRegex.test(phone)) { setError("Please enter a valid 10-digit phone number"); return; }
    if (!formData.slot) { setError("Please select a time slot"); return; }

    setIsLoading(true);
    setError("");

    try {
      await sendFirebaseOtp();
    } catch (firebaseError) {
      console.log("Firebase failed, using fallback:", firebaseError);
      try {
        await sendFallbackOtp(phone);
      } catch (fallbackError) {
        setError("Unable to send OTP. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const sendFirebaseOtp = async () => {
    try {
      const firebase = await import("firebase/app");
      await import("firebase/auth");

      const firebaseConfig = {
        apiKey: "AIzaSyAyM4tvCz7oMagXxz_nOi8spWIsmkhbpb8",
        authDomain: "otp-netcoder-website-demo.firebaseapp.com",
        projectId: "otp-netcoder-website-demo",
        storageBucket: "otp-netcoder-website-demo.appspot.com",
        messagingSenderId: "635675102143",
        appId: "1:635675102143:web:cbe478339b167bf3c8ef0a",
        measurementId: "G-DHH6BG4TD1"
      };

      let app;
      try {
        if (!firebase.getApps().length) {
          app = firebase.initializeApp(firebaseConfig);
        } else {
          app = firebase.getApp();
        }
      } catch (initError) {
        app = firebase.getApp();
      }

      const auth = firebase.auth(app);
      
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
          recaptchaContainerRef.current,
          { size: "invisible" }
        );
      }

      const phoneNumber = `+91${formData.phone}`;
      const result = await auth.signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier);

      setConfirmationResult(result);
      setOpen(false);
      setOtpModalOpen(true);
      setCountdown(30);
      setSuccess("OTP sent successfully!");
      setError("");
      setUseFallback(false);
      setOtp(["", "", "", "", "", ""]);
      
    } catch (error) {
      console.error("Firebase OTP error:", error);
      throw error; // Trigger fallback
    }
  };

  const sendFallbackOtp = async (phone) => {
    const result = await simulateOtpVerification(phone);
    if (result.success) {
      const storedOtp = result.otp;
      localStorage.setItem('demo_otp', storedOtp);
      localStorage.setItem('demo_phone', phone);
      localStorage.setItem('demo_expiry', Date.now() + 5 * 60 * 1000);
      
      setConfirmationResult({ otp: storedOtp });
      setOpen(false);
      setOtpModalOpen(true);
      setCountdown(30);
      setSuccess(`OTP sent to ${phone} (Demo Mode)`);
      setError("");
      setUseFallback(true);
      setOtp(["", "", "", "", "", ""]);
    }
  };

  const resendOtp = async () => {
    if (countdown > 0) return;
    setIsLoading(true);
    setError("");

    try {
      if (useFallback) {
        const result = await simulateOtpVerification(formData.phone);
        localStorage.setItem('demo_otp', result.otp);
        localStorage.setItem('demo_expiry', Date.now() + 5 * 60 * 1000);
        setConfirmationResult({ otp: result.otp });
        setSuccess("OTP resent (Demo Mode)!");
      } else {
         // Logic for Firebase Resend would go here (usually re-triggering signInWithPhoneNumber)
         await sendFirebaseOtp(); 
         setSuccess("OTP resent successfully!");
      }
      setCountdown(30);
    } catch (error) {
      setError("Failed to resend OTP.");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      setError("Please enter the 6-digit OTP");
      return;
    }

    setIsOtpVerifying(true);
    setError("");

    try {
      if (useFallback) {
        const storedOtp = localStorage.getItem('demo_otp');
        const expiry = localStorage.getItem('demo_expiry');
        if (!storedOtp || Date.now() > expiry || otpCode !== storedOtp) {
          throw new Error("Invalid or Expired OTP");
        }
      } else {
        await confirmationResult.confirm(otpCode);
      }
      
      await submitFormData();
      setSuccess("Verified! Booking Confirmed.");
      
      setTimeout(() => {
        setOtpModalOpen(false);
        alert("Thank you! Your demo class has been booked successfully.");
        window.location.reload();
      }, 1500);
      
    } catch (error) {
      console.error(error);
      setError("Invalid OTP. Please try again.");
    } finally {
      setIsOtpVerifying(false);
    }
  };

  const submitFormData = async () => {
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        "service_xukw6z4",
        "template_z5b32h5",
        {
            name: formData.name,
            number: formData.phone,
            mail: formData.email,
            course: formData.course,
            address: formData.address,
            date: formData.date,
            slot: formData.slot
        }
      );
    } catch (error) {
      console.error("EmailJS Error", error);
    }
  };

  // --- STYLES ---
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
      borderRadius: "8px",
      border: `1px solid ${customColors.border}`,
      fontSize: isMobile ? "16px" : "15px",
      "&:focus": { borderColor: customColors.primary, borderWidth: "2px" }
    }
  };

  const selectSx = {
    width: "100%",
    height: isMobile ? "48px" : "42px",
    borderRadius: "8px",
    border: `1px solid ${customColors.border}`,
    "& .MuiSelect-select": { padding: "0 16px", display: "flex", alignItems: "center" },
    "& fieldset": { border: "none" }, 
    "&:focus-within": { borderColor: customColors.primary, borderWidth: "2px", borderStyle: "solid" }
  };

  return (
    <Box>
      {/* Hero / Trigger Button */}
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "#fff", padding: "20px" }}>
        <Box sx={{ backgroundColor: "#FF5722", color: "white", borderRadius: "50px", padding: "6px 22px", fontSize: "13px", fontWeight: "600", mb: 3 }}>
          Free Demo Class
        </Box>
        <Typography variant="h2" sx={{ fontWeight: "800", color: "#111", fontSize: { xs: "32px", md: "48px" }, mb: 3 }}>
          Still Unsure? Try A Free <br /> Demo Class
        </Typography>
        <Typography sx={{ color: "#444", fontSize: "16px", maxWidth: "750px", mb: 5 }}>
          Experience our teaching approach before making a commitment. Whether you're exploring a new skill or planning your career path, our demo class gives you a glimpse of how we teach, what you'll learn, and how we can help you grow. No pressure—just real learning, right from the start.


         </Typography>
        <Button
          onClick={() => setOpen(true)}
          disableElevation
          sx={{ 
            backgroundColor: "#111", color: "white", padding: { xs: "16px 32px", md: "14px 40px" }, 
            borderRadius: "8px", fontWeight: "600", textTransform: "none", 
            "&:hover": { backgroundColor: "#333" }
          }}
        >
          Book A Demo Class
        </Button>
      </Box>

      {/* --- MODAL 1: INFO FORM --- */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500, sx: { backgroundColor: "rgba(0,0,0,0.6)" } }}
      >
        <Fade in={open}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", maxWidth: { xs: "95%", sm: "680px" }, outline: "none", px: 2 }}>
            <Paper elevation={0} sx={{ p: { xs: 3, sm: 4, md: 5 }, borderRadius: "20px", maxHeight: "90vh", overflowY: "auto", position: "relative" }}>
              
              <IconButton onClick={() => setOpen(false)} sx={{ position: "absolute", right: 12, top: 12, backgroundColor: "#f5f5f5" }}><CloseIcon /></IconButton>
              
              <Typography align="center" sx={{ color: "#FF5722", fontWeight: "700", fontSize: "24px", mb: 4 }}>
                Book Your Demo Class
              </Typography>

              {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
              
              {/* Invisible Recaptcha Container */}
              <div id="recaptcha-container" ref={recaptchaContainerRef}></div>

              <form onSubmit={sendOtp}>
                 <Grid container spacing={3}>
                    {/* Name */}
                    <Grid item xs={12} md={6}>
                      <label style={labelStyle}>Name *</label>
                      <InputBase fullWidth placeholder="Your Name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} sx={inputSx} />
                    </Grid>
                    {/* Course */}
                    <Grid item xs={12} md={6}>
                      <label style={labelStyle}>Select Course *</label>
                      <Select fullWidth value={formData.course} onChange={(e) => handleChange("course", e.target.value)} sx={selectSx}>
                        {courses.map((c) => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                      </Select>
                    </Grid>
                    {/* Date */}
                    <Grid item xs={12} md={6}>
                      <label style={labelStyle}>Select Date *</label>
                      <InputBase fullWidth type="date" value={formData.date} onChange={(e) => handleChange("date", e.target.value)} sx={inputSx} inputProps={{ min: new Date().toISOString().split('T')[0] }} />
                    </Grid>
                    {/* Phone */}
                    <Grid item xs={12} md={6}>
                      <label style={labelStyle}>Phone Number *</label>
                      <InputBase fullWidth placeholder="Enter 10-digit number" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, '').slice(0, 10))} sx={inputSx} />
                    </Grid>
                    {/* Email */}
                    <Grid item xs={12} md={6}>
                      <label style={labelStyle}>Email *</label>
                      <InputBase fullWidth type="email" placeholder="your@gmail.com" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} sx={inputSx} />
                    </Grid>
                    {/* Address */}
                    <Grid item xs={12} md={6}>
                      <label style={labelStyle}>Address *</label>
                      <InputBase fullWidth placeholder="Your full address" value={formData.address} onChange={(e) => handleChange("address", e.target.value)} sx={inputSx} />
                    </Grid>
                    {/* Slots */}
                    <Grid item xs={12}>
                        <label style={labelStyle}>Select Slot *</label>
                        <Box sx={{ display: "flex", gap: "10px", mt: 1 }}>
                            {/* Morning */}
                            <button type="button" onClick={() => handleSlotChange("Morning")} disabled={isMorningDisabled}
                             style={{ 
                                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "10px 20px", borderRadius: "8px", cursor: isMorningDisabled ? "not-allowed" : "pointer",
                                border: isMorningDisabled ? "1px solid #eee" : `1px solid ${formData.slot === "Morning" ? customColors.primary : "#CCC"}`,
                                backgroundColor: isMorningDisabled ? "#f9f9f9" : (formData.slot === "Morning" ? customColors.primary : "transparent"),
                                color: isMorningDisabled ? "#ccc" : (formData.slot === "Morning" ? "white" : "#666"),
                             }}>
                                <WbSunnyOutlinedIcon sx={{ fontSize: 18 }} /> Morning
                            </button>
                            {/* Evening */}
                            <button type="button" onClick={() => handleSlotChange("Evening")}
                             style={{ 
                                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "10px 20px", borderRadius: "8px", cursor: "pointer",
                                border: `1px solid ${formData.slot === "Evening" ? customColors.primary : "#CCC"}`,
                                backgroundColor: formData.slot === "Evening" ? customColors.primary : "transparent",
                                color: formData.slot === "Evening" ? "white" : "#666",
                             }}>
                                <BedtimeOutlinedIcon sx={{ fontSize: 18 }} /> Evening
                            </button>
                        </Box>
                    </Grid>
                 </Grid>

                 <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <Button type="submit" disabled={isLoading} variant="contained"
                      sx={{ 
                        backgroundColor: customColors.primary, color: "white", padding: "14px 40px", 
                        borderRadius: "10px", fontSize: "16px", textTransform: "none",
                        "&:hover": { backgroundColor: "#e66e3e" }
                      }}>
                      {isLoading ? <><CircularProgress size={24} sx={{ color: "white", mr: 2 }} /> Sending OTP...</> : "Send OTP"}
                    </Button>
                 </Box>
              </form>
            </Paper>
          </Box>
        </Fade>
      </Modal>

      {/* --- MODAL 2: OTP VERIFICATION --- */}
      <Modal
        open={otpModalOpen}
        onClose={() => setOtpModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500, sx: { backgroundColor: "rgba(0,0,0,0.6)" } }}
      >
        <Fade in={otpModalOpen}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", maxWidth: "450px", outline: "none", px: 2 }}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", textAlign: "center", position: "relative" }}>
              
              <IconButton onClick={() => setOtpModalOpen(false)} sx={{ position: "absolute", right: 8, top: 8 }}><CloseIcon /></IconButton>
              
              <Typography sx={{ color: "#FF5722", fontWeight: "700", fontSize: "24px", mb: 2 }}>
                OTP Verification 
              </Typography>
              <Typography sx={{ color: "#666", mb: 3 }}>
                Enter the 6-digit OTP sent to <strong>+91 {formData.phone}</strong>
              </Typography>

              {useFallback && <Alert severity="info" sx={{ mb: 2 }}>Demo Mode: Check console for OTP</Alert>}
              {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
              {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

              {/* OTP Inputs */}
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mb: 3 }}>
                {otp.map((digit, index) => (
                  <Box key={index} sx={{ width: "50px", height: "60px", border: `2px solid ${digit ? customColors.primary : "#ddd"}`, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <InputBase
                      inputRef={el => otpInputRefs.current[index] = el}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      inputProps={{ maxLength: 1, style: { textAlign: "center", fontSize: "24px", fontWeight: "bold" } }}
                    />
                  </Box>
                ))}
              </Box>

              {/* Verify Button */}
              <Button
                onClick={verifyOtp}
                disabled={isOtpVerifying || otp.join('').length !== 6}
                fullWidth
                variant="contained"
                sx={{ 
                  backgroundColor: customColors.primary, color: "white", padding: "14px", 
                  borderRadius: "10px", fontSize: "16px", textTransform: "none", mb: 2,
                  "&:hover": { backgroundColor: "#e66e3e" }
                }}
              >
                {isOtpVerifying ? "Verifying..." : "Submit Details"}
              </Button>

              {/* Timer / Resend Link - MOVED BELOW BUTTON AS REQUESTED */}
              <Box sx={{ mt: 2 }}>
                {countdown > 0 ? (
                    <Typography sx={{ color: "#888", fontSize: "14px" }}>
                        Resend OTP in <span style={{ color: "#333", fontWeight: "bold" }}>{countdown}s</span>
                    </Typography>
                ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        <Typography sx={{ color: "#888", fontSize: "14px" }}>
                            Didn't receive code?
                        </Typography>
                        <Button 
                            onClick={resendOtp} 
                            disabled={isLoading}
                            sx={{ 
                                textTransform: "none", color: customColors.primary, fontWeight: "bold", 
                                padding: 0, minWidth: "auto", "&:hover": { backgroundColor: "transparent", textDecoration: "underline" } 
                            }}>
                            Resend OTP
                        </Button>
                    </Box>
                )}
              </Box>

            </Paper>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}