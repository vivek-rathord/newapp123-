
 import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  TextField,
  MenuItem,
  Grid,
  styled,
  IconButton,
  Alert,
  CircularProgress,
  useMediaQuery,
  useTheme,
  InputAdornment,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Card,
  CardContent,
  alpha,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import BookIcon from "@mui/icons-material/Book";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import ScheduleIcon from "@mui/icons-material/Schedule";
import NotesIcon from "@mui/icons-material/Notes";
import VerifiedIcon from "@mui/icons-material/Verified";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import LanguageIcon from "@mui/icons-material/Language";
import CampaignIcon from "@mui/icons-material/Campaign";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import DataObjectIcon from "@mui/icons-material/DataObject";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";

 import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "./firebase";

// =============== THEME COLORS ===============
const themeColors = {
  primary: "#FF5532",
  secondary: "#111111",
  white: "#FFFFFF",
  lightGray: "#F7FAFC",
  mediumGray: "#E2E8F0",
  darkGray: "#4A5568",
  success: "#10B981",
  error: "#EF4444",
  warning: "#F59E0B",
  info: "#3B82F6",
  lightOrange: "#FFF5F3",
};

// Styled Components (same as before, shortened for brevity)
const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 850,
  maxHeight: "90vh",
  backgroundColor: themeColors.white,
  borderRadius: "20px",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  overflow: "hidden",
  outline: "none",
  [theme.breakpoints.down("md")]: {
    width: "95%",
    borderRadius: "16px",
  },
}));

const ModalHeader = styled(Box)({
  padding: "32px 32px 24px",
  background: `linear-gradient(135deg, ${themeColors.primary} 0%, #FF774D 100%)`,
  color: themeColors.white,
  textAlign: "center",
  position: "relative",
});

// ... (other styled components remain same as your previous code)

// Course Data
const COURSES = [
  { id: 1, name: "Graphic Designing", icon: <DesignServicesIcon sx={{ fontSize: 28, color: themeColors.primary }} /> },
  { id: 2, name: "Web Development", icon: <CodeIcon sx={{ fontSize: 28, color: themeColors.primary }} /> },
  { id: 3, name: "UI/UX Designing", icon: <DesktopWindowsIcon sx={{ fontSize: 28, color: themeColors.primary }} /> },
  { id: 4, name: "Digital Marketing", icon: <CampaignIcon sx={{ fontSize: 28, color: themeColors.primary }} /> },
  { id: 5, name: "Mobile App Development", icon: <SmartphoneIcon sx={{ fontSize: 28, color: themeColors.primary }} /> },
  { id: 6, name: "Data Science", icon: <PsychologyIcon sx={{ fontSize: 28, color: themeColors.primary }} /> },
  { id: 7, name: "Python Programming", icon: <DataObjectIcon sx={{ fontSize: 28, color: themeColors.primary }} /> },
  { id: 8, name: "Java Full Stack", icon: <LanguageIcon sx={{ fontSize: 28, color: themeColors.primary }} /> },
  { id: 9, name: "Cloud Computing", icon: <CloudIcon sx={{ fontSize: 28, color: themeColors.primary }} /> },
  { id: 10, name: "Cyber Security", icon: <SecurityIcon sx={{ fontSize: 28, color: themeColors.primary }} /> },
];

export default function BookDemoClass() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", course: "", date: "", timeSlot: "", 
    customTime: "", location: "online", address: "", education: "", 
    experience: "", notes: ""
  });
  
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendingOTP, setSendingOTP] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [verified, setVerified] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [phoneError, setPhoneError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [step, setStep] = useState(1);

  const otpRefs = useRef([]);
  const recaptchaVerifierRef = useRef(null);

  // Countdown timer
  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer(prev => prev <= 1 ? 0 : prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendTimer]);

  // Setup reCAPTCHA for Firebase
  const setupRecaptcha = () => {
    try {
      // Clear existing recaptcha
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
        } catch (e) {
          console.log("Clearing old recaptcha:", e);
        }
      }

      // Create invisible recaptcha verifier
      recaptchaVerifierRef.current = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: () => {
            console.log("reCAPTCHA verified successfully");
          },
          'expired-callback': () => {
            console.log("reCAPTCHA expired");
            setError("Security check expired. Please try again.");
          }
        },
        auth
      );

      return recaptchaVerifierRef.current;
    } catch (error) {
      console.error("Error setting up recaptcha:", error);
      setError("Security system error. Please refresh the page.");
      return null;
    }
  };

  // Validate phone number
  const validatePhoneNumber = (phone) => {
    if (!phone || phone.length !== 10) {
      return "Please enter a valid 10-digit phone number";
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return "Please enter a valid Indian mobile number starting with 6-9";
    }
    return "";
  };

  // ✅ REAL FIREBASE OTP SEND FUNCTION
  const handleSendOTP = async () => {
    const phoneValidationError = validatePhoneNumber(formData.phone);
    if (phoneValidationError) {
      setPhoneError(phoneValidationError);
      return;
    }

    setSendingOTP(true);
    setError("");
    setPhoneError("");
    setOtpError("");

    try {
      // Setup recaptcha
      const appVerifier = setupRecaptcha();
      if (!appVerifier) {
        throw new Error("SECURITY_CHECK_FAILED");
      }

      // Format phone with country code
      const phoneNumber = `+91${formData.phone}`;
      console.log("Sending OTP to:", phoneNumber);
      
      // ✅ REAL OTP SEND VIA FIREBASE
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setSuccess(`✅ OTP sent successfully to ${formData.phone}! Check your SMS for 6-digit code.`);
      setResendTimer(60);
      setOtp(["", "", "", "", "", ""]);
      setStep(4);
      
      setTimeout(() => {
        if (otpRefs.current[0]) {
          otpRefs.current[0].focus();
        }
      }, 500);
      
      setTimeout(() => setSuccess(""), 5000);
      
    } catch (error) {
      console.error("Firebase OTP Error:", error);
      
      let errorMessage = "Failed to send OTP. Please try again.";
      
      // Handle Firebase errors
      switch (error.code) {
        case 'auth/invalid-phone-number':
          errorMessage = "Invalid phone number format.";
          break;
        case 'auth/too-many-requests':
          errorMessage = "Too many attempts. Please wait.";
          break;
        case 'auth/quota-exceeded':
          errorMessage = "Daily OTP limit reached.";
          break;
        case 'auth/captcha-check-failed':
          errorMessage = "Security check failed. Refresh page.";
          break;
        case 'auth/network-request-failed':
          errorMessage = "Network error. Check connection.";
          break;
        case 'auth/billing-not-enabled':
          errorMessage = "Billing not enabled in Firebase. Please enable billing in Firebase console.";
          break;
        default:
          if (error.message.includes('reCAPTCHA')) {
            errorMessage = "Security verification failed.";
          }
      }
      
      setError(errorMessage);
      setOtpSent(false);
      
      // Fallback to test mode if Firebase fails
      if (error.code === 'auth/billing-not-enabled') {
        console.log("Using test mode OTP");
        // You can add fallback test OTP logic here
      }
      
      // Clear recaptcha on error
      if (recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current.clear();
      }
    } finally {
      setSendingOTP(false);
    }
  };

  // ✅ REAL FIREBASE OTP VERIFICATION
  const verifyOTP = async () => {
    const otpValue = otp.join("");
    
    if (otpValue.length !== 6) {
      setOtpError("Please enter all 6 digits");
      return;
    }

    setVerifying(true);
    setError("");
    setOtpError("");

    try {
      if (!confirmationResult) {
        throw new Error("OTP session expired. Please request new OTP.");
      }
      
      // ✅ REAL OTP VERIFICATION WITH FIREBASE
      await confirmationResult.confirm(otpValue);
      
      setVerified(true);
      setSuccess("✅ Phone number verified successfully!");
      setOtpSent(false);
      
      setTimeout(() => setSuccess(""), 4000);
      
    } catch (error) {
      console.error("OTP Verification Error:", error);
      
      let errorMessage = "Invalid OTP. Please check and try again.";
      
      if (error.code === 'auth/invalid-verification-code') {
        errorMessage = "Incorrect OTP code. Please check SMS and try again.";
      } else if (error.code === 'auth/code-expired') {
        errorMessage = "OTP expired. Please request new OTP.";
        setOtpSent(false);
        setOtp(["", "", "", "", "", ""]);
      }
      
      setOtpError(errorMessage);
      
      setTimeout(() => {
        if (otpRefs.current[0]) {
          otpRefs.current[0].focus();
        }
      }, 100);
    } finally {
      setVerifying(false);
    }
  };

  // Handle OTP input
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    
    if (value.length > 1) value = value.charAt(value.length - 1);
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setOtpError("");

    if (value && index < 5) {
      setTimeout(() => {
        const nextInput = otpRefs.current[index + 1];
        if (nextInput) nextInput.focus();
      }, 10);
    }
    
    if (index === 5 && value && newOtp.join("").length === 6) {
      setTimeout(() => {
        if (!verifying) verifyOTP();
      }, 300);
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!verified) {
      setError("Please verify your phone number first");
      setStep(4);
      return;
    }

    const requiredFields = ['name', 'email', 'course', 'date', 'timeSlot'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      setError("Please fill all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      setError("Please select a future date");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("📋 Demo Class Booking Submitted:", {
        ...formData,
        phoneVerified: true,
        timestamp: new Date().toISOString(),
      });
      
      setSuccess("✅ Demo class booked successfully! Our team will contact you within 24 hours.");
      
      setTimeout(() => {
        setOpen(false);
        resetForm();
      }, 3500);
      
    } catch (err) {
      setError("Failed to submit your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "", email: "", phone: "", course: "", date: "", timeSlot: "",
      customTime: "", location: "online", address: "", education: "",
      experience: "", notes: ""
    });
    setOtp(["", "", "", "", "", ""]);
    setOtpSent(false);
    setVerified(false);
    setSuccess("");
    setError("");
    setResendTimer(0);
    setConfirmationResult(null);
    setStep(1);
    
    if (recaptchaVerifierRef.current) {
      recaptchaVerifierRef.current.clear();
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'phone') setPhoneError("");
    if (error) setError("");
  };

  const handleClose = () => {
    if (window.confirm("Are you sure you want to close? Your progress will be lost.")) {
      setOpen(false);
      resetForm();
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <>
      {/* Open Button */}
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{
          backgroundColor: themeColors.secondary,
          color: themeColors.white,
          padding: "8px 22px",
          borderRadius: "16px",
          fontWeight: 700,
          fontSize: "14px",
          textTransform: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#E04A28",
            transform: "translateY(-2px)",
            boxShadow: "0 12px 25px rgba(255, 85, 50, 0.4)",
          },
        }}
      >
        Book a Demo Class
      </Button>

      {/* Modal */}
      <Modal 
        open={open} 
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          backdropFilter: "blur(8px)",
        }}
      >
        <Fade in={open}>
          <ModalContainer>
            {/* Header */}
            <ModalHeader>
              <IconButton onClick={handleClose} sx={{ position: "absolute", top: 16, right: 16, color: themeColors.white }}>
                <CloseIcon />
              </IconButton>
              
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                <BookIcon sx={{ fontSize: 36 }} />
                Book Your Demo Class
              </Typography>
              
              <Typography sx={{ opacity: 0.9, fontSize: 16 }}>
                Experience our teaching methodology first-hand
              </Typography>
            </ModalHeader>

            {/* Content */}
            <Box sx={{ p: 4, maxHeight: "calc(90vh - 160px)", overflowY: "auto" }}>
              <form onSubmit={handleSubmit}>
                {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
                {success && <Alert severity="success" sx={{ mb: 3 }}>{success}</Alert>}

                {/* Step 1: Personal Info */}
                {step === 1 && (
                  <Box>
                    <Typography variant="h6" sx={{ mb: 3, color: themeColors.secondary }}>
                      Personal Information
                    </Typography>
                    
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Full Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          fullWidth
                          InputProps={{ startAdornment: <PersonIcon sx={{ color: themeColors.darkGray, mr: 1 }} /> }}
                        />
                      </Grid>
                      
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          fullWidth
                          InputProps={{ startAdornment: <EmailIcon sx={{ color: themeColors.darkGray, mr: 1 }} /> }}
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <TextField
                          label="Phone Number"
                          value={formData.phone}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                            handleInputChange("phone", value);
                          }}
                          required
                          fullWidth
                          error={!!phoneError}
                          helperText={phoneError || "Enter 10-digit mobile number"}
                          InputProps={{ startAdornment: <PhoneIphoneIcon sx={{ color: themeColors.darkGray, mr: 1 }} /> }}
                        />
                      </Grid>
                    </Grid>
                    
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button
                        variant="contained"
                        onClick={() => setStep(2)}
                        disabled={!formData.name || !formData.email || !formData.phone}
                        sx={{ backgroundColor: themeColors.secondary }}
                      >
                        Next
                      </Button>
                    </Box>
                  </Box>
                )}

                {/* Step 2: Course Selection */}
                {step === 2 && (
                  <Box>
                    <Typography variant="h6" sx={{ mb: 3, color: themeColors.secondary }}>
                      Select Course
                    </Typography>
                    
                    <Grid container spacing={2}>
                      {COURSES.map((course) => (
                        <Grid item xs={12} sm={6} md={4} key={course.id}>
                          <Card
                            onClick={() => handleInputChange("course", course.name)}
                            sx={{
                              border: `2px solid ${formData.course === course.name ? themeColors.primary : themeColors.mediumGray}`,
                              cursor: "pointer",
                              "&:hover": { borderColor: themeColors.primary },
                            }}
                          >
                            <CardContent sx={{ textAlign: "center" }}>
                              {course.icon}
                              <Typography sx={{ mt: 1, fontWeight: 600 }}>
                                {course.name}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                    
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                      <Button onClick={() => setStep(1)}>Back</Button>
                      <Button
                        variant="contained"
                        onClick={() => setStep(3)}
                        disabled={!formData.course}
                        sx={{ backgroundColor: themeColors.secondary }}
                      >
                        Next
                      </Button>
                    </Box>
                  </Box>
                )}

                {/* Step 3: Schedule */}
                {step === 3 && (
                  <Box>
                    <Typography variant="h6" sx={{ mb: 3, color: themeColors.secondary }}>
                      Select Date & Time
                    </Typography>
                    
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          type="date"
                          label="Date"
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          required
                          fullWidth
                          InputProps={{ startAdornment: <CalendarTodayIcon sx={{ color: themeColors.darkGray, mr: 1 }} /> }}
                          inputProps={{ min: getTomorrowDate() }}
                        />
                      </Grid>
                    </Grid>
                    
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                      <Button onClick={() => setStep(2)}>Back</Button>
                      <Button
                        variant="contained"
                        onClick={() => {
                          setStep(4);
                          handleSendOTP();
                        }}
                        disabled={!formData.date}
                        sx={{ backgroundColor: themeColors.secondary }}
                      >
                        Verify Phone
                      </Button>
                    </Box>
                  </Box>
                )}

                {/* Step 4: OTP Verification */}
                {step === 4 && (
                  <Box>
                    <Typography variant="h6" sx={{ mb: 3, color: themeColors.secondary }}>
                      Phone Verification
                    </Typography>
                    
                    <Box sx={{ mb: 4, p: 3, backgroundColor: themeColors.lightGray, borderRadius: 2 }}>
                      <Typography sx={{ mb: 2, fontWeight: 600 }}>
                        Enter OTP sent to +91 {formData.phone}
                      </Typography>
                      
                      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
                        {otp.map((digit, index) => (
                          <TextField
                            key={index}
                            inputRef={(ref) => (otpRefs.current[index] = ref)}
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            inputProps={{ maxLength: 1, style: { textAlign: "center", fontSize: "20px" } }}
                            sx={{ width: "60px" }}
                          />
                        ))}
                      </Box>
                      
                      {otpError && <Alert severity="error" sx={{ mb: 2 }}>{otpError}</Alert>}
                      
                      <Button
                        variant="contained"
                        onClick={verifyOTP}
                        disabled={verifying || verified || otp.join("").length !== 6}
                        fullWidth
                        sx={{ backgroundColor: themeColors.secondary }}
                      >
                        {verifying ? "Verifying..." : verified ? "Verified" : "Verify OTP"}
                      </Button>
                    </Box>
                    
                    {/* Hidden recaptcha container */}
                    <div id="recaptcha-container"></div>
                    
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                      <Button onClick={() => setStep(3)}>Back</Button>
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={loading || !verified}
                        sx={{ backgroundColor: themeColors.primary }}
                      >
                        {loading ? "Processing..." : "Book Demo"}
                      </Button>
                    </Box>
                  </Box>
                )}
              </form>
            </Box>
          </ModalContainer>
        </Fade>
      </Modal>
    </>
  );
}
