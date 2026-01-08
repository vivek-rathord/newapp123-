  import React, { useState, forwardRef } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  Grid,
  InputAdornment
} from "@mui/material";

// --- ICONS ---
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import FactoryIcon from "@mui/icons-material/Factory";
import MessageIcon from "@mui/icons-material/Message";
import ClassIcon from "@mui/icons-material/Class";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WebIcon from "@mui/icons-material/Web";
import ApartmentIcon from "@mui/icons-material/Apartment";

// --- THEME ---
const themeColors = {
  gradient: "linear-gradient(135deg, #FF5532 0%, #FF8C42 100%)", // Orange Gradient
  deepBlack: "#111111",
  pureWhite: "#FFFFFF",
  inputBg: "#F4F6F8",
  borderColor: "#E0E0E0",
  primary: "#FF5532"
};

// --- SMOOTH SLIDE UP TRANSITION ---
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactQuery() {
  const [showEdu, setShowEdu] = useState(false);
  const [activeForm, setActiveForm] = useState("");
  const [openPopup, setOpenPopup] = useState(false);

  // Button Styles (Kept consistent with your previous request)
  const btnStyle = {
    background: themeColors.pureWhite,
    color: themeColors.deepBlack,
    border: `1px solid ${themeColors.deepBlack}`,
    px: { xs: 2, md: 3 },
    py: 1,
    fontSize: { xs: 14, md: 16 },
    fontWeight: 500,
    borderRadius: "30px",
    m: 1,
    minWidth: "200px",
    textTransform: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      background: themeColors.deepBlack,
      color: themeColors.pureWhite,
      transform: "translateY(-2px)",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
    }
  };

  const openForm = (formType) => {
    setActiveForm(formType);
    setOpenPopup(true);
  };

  const closeForm = () => {
    setOpenPopup(false);
    // Small timeout to clear form state after animation finishes
    setTimeout(() => setActiveForm(""), 300);
  };

  // Logic to determine Header Title & Icon based on active form
  const getHeaderDetails = () => {
    switch (activeForm) {
      case "regular": 
        return { title: "Enroll in Regular Course", icon: <SchoolIcon /> };
      case "industrial": 
        return { title: "Industrial Training", icon: <FactoryIcon /> };
      case "services": 
        return { title: "Get IT Services", icon: <BusinessCenterIcon /> };
      default: 
        return { title: "Contact Us", icon: <MessageIcon /> };
    }
  };

  const headerData = getHeaderDetails();

  return (
    <Box sx={{ width: "100%", textAlign: "center", py: 8, background: "#fff" }}>
      
      {/* --- Main Section --- */}
      <Typography variant="h3" fontWeight={700} sx={{ mb: 2, color: themeColors.deepBlack }}>
        Tell Us What You’re Looking For
      </Typography>
      
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: "600px", mx: "auto" }}>
        Select whether your inquiry is about our IT education programs or IT services.
      </Typography>

      {/* Buttons */}
      <Box>
        <Button sx={btnStyle} onClick={() => setShowEdu(!showEdu)}>Education</Button>
        <Button sx={btnStyle} onClick={() => openForm("services")}>Services</Button>
      </Box>

      {/* Education Sub-Buttons */}
      {showEdu && (
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap", animation: "fadeIn 0.5s ease" }}>
          <Button sx={btnStyle} onClick={() => openForm("regular")}>Regular Courses</Button>
          <Button sx={btnStyle} onClick={() => openForm("industrial")}>Industrial Training</Button>
        </Box>
      )}

      {/* --- MODERN POPUP DIALOG --- */}
      <Dialog 
        open={openPopup} 
        onClose={closeForm} 
        TransitionComponent={Transition} 
        keepMounted
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "24px",
            overflow: "hidden", // Ensures header corners clip correctly
            boxShadow: "0px 20px 40px rgba(0,0,0,0.2)"
          }
        }}
      >
        {/* Dynamic Header */}
        <Box sx={{ 
          background: themeColors.gradient, 
          p: 3, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between",
          color: "#fff"
        }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {React.cloneElement(headerData.icon, { sx: { fontSize: 28, opacity: 0.9 } })}
            <Typography variant="h6" fontWeight={600} letterSpacing={0.5}>
              {headerData.title}
            </Typography>
          </Box>
          <IconButton onClick={closeForm} sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent sx={{ p: { xs: 3, md: 4 }, bgcolor: "#fff" }}>
          {activeForm === "regular" && <FormRegular />}
          {activeForm === "industrial" && <FormIndustrial />}
          {activeForm === "services" && <FormService />}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

// ---------------- REUSABLE MODERN COMPONENTS ----------------

// 1. Modern Input Field with Icon support
const ModernInput = ({ icon, ...props }) => (
  <TextField
    fullWidth
    variant="outlined"
    {...props}
    InputProps={{
      startAdornment: icon ? (
        <InputAdornment position="start">
          <Box sx={{ color: themeColors.primary, display: "flex", mr: 1 }}>{icon}</Box>
        </InputAdornment>
      ) : null,
      ...props.InputProps
    }}
    sx={{
      mb: 2.5,
      "& .MuiOutlinedInput-root": {
        borderRadius: "12px",
        backgroundColor: themeColors.inputBg,
        transition: "all 0.3s ease",
        "& fieldset": { borderColor: "transparent" }, // Hidden border normally
        "&:hover fieldset": { borderColor: "#ddd" },
        "&.Mui-focused": {
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          "& fieldset": { borderColor: themeColors.primary, borderWidth: "1.5px" }
        }
      },
      "& .MuiInputLabel-root": { color: "#888" },
      "& .MuiInputLabel-root.Mui-focused": { color: themeColors.primary }
    }}
  />
);

// 2. Modern Submit Button
const ModernButton = ({ onClick, text = "Submit Request" }) => (
  <Button
    fullWidth
    variant="contained"
    onClick={onClick}
    sx={{
      mt: 1,
      py: 1.6,
      background: themeColors.gradient,
      color: "white",
      fontWeight: "700",
      borderRadius: "12px",
      fontSize: "16px",
      textTransform: "none",
      letterSpacing: "0.5px",
      boxShadow: "0 10px 20px rgba(255, 85, 50, 0.25)",
      "&:hover": {
        background: "linear-gradient(135deg, #E64A2E 0%, #FF8C42 100%)",
        boxShadow: "0 15px 30px rgba(255, 85, 50, 0.4)",
        transform: "translateY(-2px)"
      },
      "&:active": { transform: "translateY(0)" }
    }}
  >
    {text}
  </Button>
);

// ---------------- FORM 1: REGULAR COURSES ----------------
function FormRegular() {
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "", course: "Web Development", message: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation Logic
    if (!formData.name || !formData.mobile || !formData.email) return alert("Please fill all required fields.");
    alert("Regular Course Inquiry Sent!");
  };

  return (
    <Box component="form">
      <ModernInput label="Full Name" name="name" value={formData.name} onChange={handleChange} icon={<PersonIcon />} />
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ModernInput label="Mobile Number" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} icon={<PhoneIcon />} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ModernInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} icon={<EmailIcon />} />
        </Grid>
      </Grid>
      
      <ModernInput
        select
        label="Select Course"
        name="course"
        value={formData.course}
        onChange={handleChange}
        icon={<ClassIcon />}
      >
        <MenuItem value="Web Development">Web Development</MenuItem>
        <MenuItem value="Graphic Designing">Graphic Designing</MenuItem>
        <MenuItem value="UI/UX Designing">UI/UX Designing</MenuItem>
        <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
      </ModernInput>

      <ModernInput 
        label="Any Message? (Optional)" 
        name="message" 
        multiline 
        rows={3} 
        value={formData.message} 
        onChange={handleChange} 
        icon={<MessageIcon />} 
      />
      
      <ModernButton onClick={handleSubmit} />
    </Box>
  );
}

// ---------------- FORM 2: INDUSTRIAL TRAINING ----------------
function FormIndustrial() {
  const [formData, setFormData] = useState({ name: "", number: "", email: "", course: "Web Development", duration: "6 Months" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.number) return alert("Please fill all required fields.");
    alert("Industrial Training Inquiry Sent!");
  };

  return (
    <Box component="form">
      <ModernInput label="Student Name" name="name" value={formData.name} onChange={handleChange} icon={<PersonIcon />} />
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
           <ModernInput label="Mobile Number" name="number" type="tel" value={formData.number} onChange={handleChange} icon={<PhoneIcon />} />
        </Grid>
        <Grid item xs={12} sm={6}>
           <ModernInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} icon={<EmailIcon />} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <ModernInput select label="Course Interest" name="course" value={formData.course} onChange={handleChange} icon={<WebIcon />}>
                <MenuItem value="Web Development">Web Development</MenuItem>
                <MenuItem value="Data Science">Data Science</MenuItem>
                <MenuItem value="Cyber Security">Cyber Security</MenuItem>
            </ModernInput>
        </Grid>
        <Grid item xs={12} sm={6}>
            <ModernInput select label="Duration" name="duration" value={formData.duration} onChange={handleChange} icon={<AccessTimeIcon />}>
                <MenuItem value="45 Days">45 Days</MenuItem>
                <MenuItem value="3 Months">3 Months</MenuItem>
                <MenuItem value="6 Months">6 Months</MenuItem>
            </ModernInput>
        </Grid>
      </Grid>

      <ModernButton onClick={handleSubmit} text="Apply Now" />
    </Box>
  );
}

// ---------------- FORM 3: IT SERVICES ----------------
function FormService() {
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "", business: "", services: "Need a Website" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.business) return alert("Please fill all required fields.");
    alert("Service Request Sent!");
  };

  return (
    <Box component="form">
      <ModernInput label="Your Name" name="name" value={formData.name} onChange={handleChange} icon={<PersonIcon />} />
      <ModernInput label="Company Name" name="business" value={formData.business} onChange={handleChange} icon={<ApartmentIcon />} />
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <ModernInput label="Phone" name="mobile" value={formData.mobile} onChange={handleChange} icon={<PhoneIcon />} />
        </Grid>
        <Grid item xs={12} sm={6}>
            <ModernInput label="Email" name="email" value={formData.email} onChange={handleChange} icon={<EmailIcon />} />
        </Grid>
      </Grid>

      <ModernInput select label="Service Required" name="services" value={formData.services} onChange={handleChange} icon={<BusinessCenterIcon />}>
        <MenuItem value="Need a Website">Need a Website</MenuItem>
        <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
        <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
        <MenuItem value="Branding">Branding</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </ModernInput>

      <ModernButton onClick={handleSubmit} text="Get a Quote" />
    </Box>
  );
}