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
  InputAdornment,
  useTheme,
  useMediaQuery
} from "@mui/material";

// --- ICONS ---
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DomainIcon from "@mui/icons-material/Domain"; 
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing"; 
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined"; 
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// --- THEME CONFIGURATION ---
const themeConfig = {
  primary: "#FF5532", // Orange
  gradient: "linear-gradient(135deg, #FF5532 0%, #FF8C42 100%)", 
  deepBlack: "#111111",
  darkGray: "#575757",
  pureWhite: "#FFFFFF",
};

// --- TRANSITION FOR POPUP ---
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactQuery() {
  const [showEdu, setShowEdu] = useState(false);
  const [activeForm, setActiveForm] = useState(null); 
  const [openPopup, setOpenPopup] = useState(false);

  // --- ORIGINAL BUTTON STYLES ---
  const btnStyle = {
    background: themeConfig.pureWhite,
    color: themeConfig.deepBlack,
    border: `1px solid ${themeConfig.deepBlack}`,
    px: { xs: 2, sm: 1, md: 2 },
    py: { xs: 1, sm: 0.4, md: 1 },
    fontSize: { xs: 14, sm: 13, md: 17 },
    fontWeight: 400,
    borderRadius: "16px",
    m: 1,
    width: { xs: "100%", sm: "270px", md: "300px" },
    textTransform: "none",
    "&:hover": {
      background: themeConfig.deepBlack,
      color: themeConfig.pureWhite,
      border: `1px solid ${themeConfig.deepBlack}`,
    }
  };

  const openForm = (formType) => {
    setActiveForm(formType);
    setOpenPopup(true);
  }

  const closeForm = () => {
    setOpenPopup(false);
    setTimeout(() => setActiveForm(null), 300);
  }

  // Header Info for Popup
  const getHeaderInfo = () => {
    switch (activeForm) {
      case "industrial":
        return { title: "Industrial Training", icon: <PrecisionManufacturingIcon /> };
      case "services":
        return { title: "IT Services Request", icon: <DomainIcon /> };
      default:
        return { title: "Course Enrollment", icon: <SchoolOutlinedIcon /> };
    }
  };
  const headerData = getHeaderInfo();

  return (
    <Box
      sx={{
        background: themeConfig.pureWhite,
        width: { xs: "100%", sm: "95%", md: "90%" },
        margin: "auto",
        borderRadius: "40px",
        py: { xs: 4, sm: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, sm: 1 },
        alignItems: "center",
        textAlign: "center",
        my: { xs: 4, sm: 5, md: 6 },
      }}
    >
      {/* --- ORIGINAL TEXT AND BUTTONS --- */}
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{
          width: { md: "50%", xs: "100%" },
          pb: { xs: 2, sm: 3, md: 4 },
          color: themeConfig.deepBlack,
          fontSize: { xs: "1.8rem", sm: "2rem", md: "3rem" }, // Responsive Font
          lineHeight: 1.3,
        }}
      >
        Tell Us What You’re Looking For
      </Typography>

      <Typography fontWeight={600} fontSize={{ xs: 16, sm: 18, md: "1.5rem" }} width={{ md: "40%", xs: "100%" }} color={themeConfig.deepBlack}>
        Choose Your Area of Interest
      </Typography>

      <Box width={{ md: "45%", sm: "80%", xs: "100%" }} mt={1}>
        <Typography fontSize={{ xs: 14, sm: 15, md: 16 }} color={themeConfig.darkGray} lineHeight="24px">
          Select whether your inquiry is about our IT education programs or IT services. This helps us connect you with the right team quickly.
        </Typography>
      </Box>

      {/* Buttons */}
      <Box sx={{ mt: { xs: 3, sm: 2, md: 5 }, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1, width: "100%", justifyContent: "center", alignItems: "center" }}>
            <Button sx={btnStyle} onClick={() => setShowEdu(!showEdu)}>Education</Button>
            <Button sx={btnStyle} onClick={() => openForm("services")}>Services</Button>
        </Box>
      </Box>

      {/* Edu Box */}
      {showEdu && (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack on mobile
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            width: "100%",
            mt: 1,
          }}
        >
          <Button sx={btnStyle} onClick={() => openForm("regular")}>Regular Courses</Button>
          <Button sx={btnStyle} onClick={() => openForm("industrial")}>Industrial Training</Button>
        </Box>
      )}

      {/* --- NEW MODERN POPUP FORM --- */}
      <Dialog
        open={openPopup}
        onClose={closeForm}
        TransitionComponent={Transition}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Column on Mobile, Row on Desktop
            maxHeight: { xs: "90vh", md: "85vh" },
            m: { xs: 2, md: 3 }
          }
        }}
      >
        {activeForm && (
          <>
            {/* Left Header Sidebar (Orange Gradient) */}
            <Box sx={{
              width: { xs: "100%", md: "40%" },
              background: themeConfig.gradient,
              color: "#fff",
              p: { xs: 3, md: 5 }, // Less padding on mobile
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" }, // Center align on mobile
              textAlign: { xs: "center", md: "left" }, // Center text on mobile
              position: "relative",
              flexShrink: 0
            }}>
               {/* Close Button Mobile */}
               <IconButton onClick={closeForm} sx={{ position: "absolute", top: 8, right: 8, color: "white", display: { md: "none" } }}>
                 <CloseIcon />
               </IconButton>

               <Box sx={{ 
                   mb: 2, 
                   p: 2, 
                   bgcolor: "rgba(255,255,255,0.15)", 
                   borderRadius: "16px", 
                   width: "fit-content", 
                   backdropFilter: "blur(10px)" 
               }}>
                 {React.cloneElement(headerData.icon, { sx: { fontSize: { xs: 30, md: 40 } } })}
               </Box>
               
               <Typography variant="h4" fontWeight={700} sx={{ mb: 1, lineHeight: 1.2, fontSize: { xs: "1.5rem", md: "2.125rem" } }}>
                 {headerData.title}
               </Typography>
               
               <Box sx={{ width: "50px", height: "4px", bgcolor: "#fff", borderRadius: "2px", mb: 2, opacity: 0.5 }} />

               <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.6, fontSize: { xs: "0.9rem", md: "1rem" }, display: { xs: "none", sm: "block" } }}>
                 Please fill out the form accurately. Our team will review your details and connect with you shortly.
               </Typography>
            </Box>

            {/* Right Form Area */}
            <Box sx={{ 
                width: { xs: "100%", md: "60%" }, 
                p: { xs: 3, md: 5 }, 
                position: "relative", 
                overflowY: "auto", // Enable scrolling
                flexGrow: 1
            }}>
              {/* Close Button Desktop */}
              <IconButton onClick={closeForm} sx={{ position: "absolute", top: 15, right: 15, color: "#94a3b8", display: { xs: "none", md: "flex" } }}>
                <CloseIcon />
              </IconButton>
              
              <DialogContent sx={{ p: 0, mt: { xs: 0, md: 2 } }}>
                {activeForm === "regular" && <RegularForm />}
                {activeForm === "industrial" && <IndustrialForm />}
                {activeForm === "services" && <ServicesForm />}
              </DialogContent>
            </Box>
          </>
        )}
      </Dialog>
    </Box>
  );
}

// ---------------- REUSABLE UI COMPONENTS (Responsive) ----------------

// Modern Input Field
const ModernField = ({ icon, placeholder, ...props }) => (
  <TextField
    fullWidth
    variant="filled"
    placeholder={placeholder}
    {...props}
    InputProps={{
      disableUnderline: true,
      startAdornment: icon ? (
        <InputAdornment position="start" sx={{ color: "#94a3b8", mt: 0, mr: 1.5 }}>{icon}</InputAdornment>
      ) : null,
    }}
    sx={{
      mb: 2, // Slightly tighter spacing
      "& .MuiFilledInput-root": {
        backgroundColor: "#F8FAFC",
        borderRadius: "12px",
        border: "1px solid transparent",
        paddingTop: "10px", 
        paddingBottom: "10px", 
        transition: "all 0.2s ease",
        "&:hover": { backgroundColor: "#F1F5F9" },
        "&.Mui-focused": {
          backgroundColor: "#fff",
          borderColor: themeConfig.primary,
          boxShadow: "0 0 0 4px rgba(255, 85, 50, 0.1)"
        },
        "& input": { padding: "12px 0 12px", fontSize: "14px" }, // Adjusted padding/font
        "& input::placeholder": { color: "#94a3b8", opacity: 1, fontSize: "14px" }
      },
      "& .MuiInputLabel-root": { display: "none" } 
    }}
  />
);

// Label Helper
const FieldLabel = ({ children }) => (
    <Typography variant="subtitle2" fontWeight={600} color="#334155" sx={{ mb: 0.5, ml: 0.5, fontSize: "14px" }}>
        {children}
    </Typography>
);

// Modern Submit Button
const ActionButton = ({ label }) => (
  <Button
    fullWidth
    variant="contained"
    endIcon={<ArrowForwardIcon />}
    sx={{
      mt: 2,
      py: 1.8,
      borderRadius: "12px",
      background: themeConfig.gradient,
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "none",
      boxShadow: "0 10px 20px -5px rgba(255, 85, 50, 0.3)",
      "&:hover": { 
        background: "linear-gradient(135deg, #e64a2e 0%, #ff7b29 100%)",
        boxShadow: "0 15px 25px -5px rgba(255, 85, 50, 0.4)",
        transform: "translateY(-2px)"
      }
    }}
  >
    {label}
  </Button>
);

// ---------------- FORMS (Responsive Grid) ----------------

function RegularForm() {
  const [data, setData] = useState({ name: "", phone: "", email: "", course: "Web Development" });
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  return (
    <Box>
      <FieldLabel>Full Name</FieldLabel>
      <ModernField placeholder="e.g. Rahul Sharma" name="name" value={data.name} onChange={handleChange} icon={<PersonOutlineIcon />} />
      
      {/* Stack on mobile (xs=12), side-by-side on tablet+ (sm=6) */}
      <Grid container spacing={{ xs: 0, sm: 2 }}>
        <Grid item xs={12} sm={6}>
           <FieldLabel>Phone Number</FieldLabel>
           <ModernField placeholder="e.g. 98765 43210" name="phone" type="tel" value={data.phone} onChange={handleChange} icon={<PhoneIphoneIcon />} />
        </Grid>
        <Grid item xs={12} sm={6}>
           <FieldLabel>Email Address</FieldLabel>
           <ModernField placeholder="e.g. rahul@gmail.com" name="email" type="email" value={data.email} onChange={handleChange} icon={<MailOutlineIcon />} />
        </Grid>
      </Grid>

      <FieldLabel>Interested Course</FieldLabel>
      <ModernField select name="course" value={data.course} onChange={handleChange} icon={<SchoolOutlinedIcon />}>
        <MenuItem value="Web Development">Web Development</MenuItem>
        <MenuItem value="Graphic Designing">Graphic Designing</MenuItem>
        <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
        <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
      </ModernField>

      <ActionButton label="Enroll Now" />
    </Box>
  );
}

function IndustrialForm() {
  const [data, setData] = useState({ name: "", phone: "", college: "", duration: "6 Months" });
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  return (
    <Box>
      <FieldLabel>Student Name</FieldLabel>
      <ModernField placeholder="e.g. Aditi Verma" name="name" value={data.name} onChange={handleChange} icon={<PersonOutlineIcon />} />
      
      <FieldLabel>Mobile Number</FieldLabel>
      <ModernField placeholder="e.g. 99887 77665" name="phone" value={data.phone} onChange={handleChange} icon={<PhoneIphoneIcon />} />
      
      <FieldLabel>College / University</FieldLabel>
      <ModernField placeholder="e.g. Chitkara University" name="college" value={data.college} onChange={handleChange} icon={<SchoolOutlinedIcon />} />
      
      <FieldLabel>Training Duration</FieldLabel>
      <ModernField select name="duration" value={data.duration} onChange={handleChange} icon={<AccessTimeIcon />}>
        <MenuItem value="6 Weeks">6 Weeks (Short Term)</MenuItem>
        <MenuItem value="3 Months">3 Months</MenuItem>
        <MenuItem value="6 Months">6 Months (Industrial)</MenuItem>
      </ModernField>

      <ActionButton label="Book My Seat" />
    </Box>
  );
}

function ServicesForm() {
  const [data, setData] = useState({ businessName: "", phone: "", email: "", service: "Website" });
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  return (
    <Box>
      <FieldLabel>Company / Business Name</FieldLabel>
      <ModernField placeholder="e.g. Tech Solutions Pvt Ltd" name="businessName" value={data.businessName} onChange={handleChange} icon={<DomainIcon />} />
      
      <Grid container spacing={{ xs: 0, sm: 2 }}>
        <Grid item xs={12} sm={6}>
            <FieldLabel>Your Name</FieldLabel>
            <ModernField name="name" placeholder="e.g. Mr. Singh" icon={<PersonOutlineIcon />} />
        </Grid>
        <Grid item xs={12} sm={6}>
            <FieldLabel>Contact Number</FieldLabel>
            <ModernField placeholder="e.g. 98765 12345" name="phone" value={data.phone} onChange={handleChange} icon={<PhoneIphoneIcon />} />
        </Grid>
      </Grid>

      <FieldLabel>Service Required</FieldLabel>
      <ModernField select name="service" value={data.service} onChange={handleChange} icon={<DesignServicesOutlinedIcon />}>
        <MenuItem value="Website">Website Development</MenuItem>
        <MenuItem value="App">App Development</MenuItem>
        <MenuItem value="Marketing">Digital Marketing / SEO</MenuItem>
        <MenuItem value="Branding">Branding & Identity</MenuItem>
      </ModernField>

      <ActionButton label="Request Quote" />
    </Box>
  );
}