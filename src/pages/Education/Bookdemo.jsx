 import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Paper,
  IconButton,
  Grid,
  MenuItem,
  InputAdornment,
  Modal,
  Fade,
  Backdrop
} from "@mui/material";

// IMPORTANT: Ensure you have installed icons: npm install @mui/icons-material
import CloseIcon from "@mui/icons-material/Close";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function BookDemoClass() {
  const [open, setOpen] = useState(false); 

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    course: "Auto CAD", // Default as per image
    date: "",
    phone: "",
    email: "",
    address: "",
    slot: "",
  });

  const [isMorningDisabled, setIsMorningDisabled] = useState(false);

  // Time Logic: Disable morning if after 12 PM
  useEffect(() => {
    if (open) {
      const currentHour = new Date().getHours();
      if (currentHour >= 12) {
        setIsMorningDisabled(true);
      } else {
        setIsMorningDisabled(false);
      }
    }
  }, [open]);

  const courses = [
    "Auto CAD",
    "Graphic Designing",
    "Web Development",
    "Digital Marketing",
    "UI/UX Design",
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSlotChange = (slot) => {
    if (slot === "Morning" && isMorningDisabled) return;
    setFormData((prev) => ({ ...prev, slot: slot }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.slot) {
      alert("Please select a time slot.");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Details Submitted Successfully!");
    setOpen(false);
  };

  // --- Styles ---
  const labelStyle = {
    fontWeight: "700",
    color: "#222",
    fontSize: "15px",
    marginBottom: "8px",
    display: "block",
    fontFamily: "sans-serif",
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff",
      borderRadius: "6px",
      "& fieldset": { borderColor: "#ddd", borderWidth: "1px" },
      "&:hover fieldset": { borderColor: "#bbb" },
      "&.Mui-focused fieldset": { borderColor: "#FF5722", borderWidth: "1px" },
    },
    "& .MuiInputBase-input": {
      padding: "10px 14px",
      fontSize: "14px",
      color: "#444",
      "&::placeholder": { color: "#999", opacity: 1 },
    },
  };

  return (
    <Box>
      {/* ==============================================
          SECTION 1: HERO (Original Layout Restored)
         ============================================== */}
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
        {/* Orange Pill */}
        <Box
          sx={{
            backgroundColor: "#FF5722",
            color: "white",
            borderRadius: "50px",
            padding: "6px 22px",
            fontSize: "13px",
            fontWeight: "600",
            mb: 3,
            letterSpacing: "0.5px",
          }}
        >
          Free Demo Class
        </Box>

        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "800",
            color: "#111",
            fontSize: { xs: "32px", md: "48px" },
            lineHeight: 1.2,
            mb: 3,
            fontFamily: "sans-serif",
          }}
        >
          Still Unsure? Try A Free <br /> Demo Class
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            color: "#444",
            fontSize: "16px",
            maxWidth: "750px",
            lineHeight: 1.6,
            mb: 5,
            fontFamily: "sans-serif",
          }}
        >
          Experience our teaching approach before making a commitment. Whether
          you're exploring a new skill or planning your career path, our demo class
          gives you a glimpse of how we teach, what you'll learn, and how we can
          help you grow. No pressure—just real learning, right from the start.
        </Typography>

        {/* Main Action Button */}
        <Button
          onClick={() => setOpen(true)}
          disableElevation
          sx={{
            backgroundColor: "#111",
            color: "white",
            padding: "14px 40px",
            fontSize: "15px",
            borderRadius: "8px",
            fontWeight: "500",
            textTransform: "none",
            "&:hover": { backgroundColor: "#333" },
          }}
        >
          Book A Demo Class
        </Button>
      </Box>

      {/* ==============================================
          SECTION 2: POPUP FORM (Fixed 2-Column Grid)
         ============================================== */}
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
              width: "95%",
              maxWidth: "750px",
              outline: "none",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: "8px",
                position: "relative",
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "#fff",
                boxShadow: "0px 10px 40px rgba(0,0,0,0.2)",
              }}
            >
              {/* Close Button */}
              <IconButton
                onClick={() => setOpen(false)}
                sx={{ position: "absolute", right: 12, top: 12, color: "#333" }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>

              {/* Form Header */}
              <Typography
                align="center"
                sx={{
                  color: "#FF5722",
                  fontWeight: "700",
                  fontSize: "24px",
                  mb: 4,
                  fontFamily: "sans-serif",
                }}
              >
                Book Your Demo Class
              </Typography>

              <form onSubmit={handleSubmit}>
                {/* GRID LAYOUT EXPLAINED:
                   xs={12} md={6} -> Means on desktop it takes 50% (2 items per row).
                   On mobile it stacks. If you want 2 items per row ALWAYS, change md={6} to xs={6}.
                */}
                <Grid container spacing={3}>
                  
                  {/* --- ROW 1: Name & Select Course --- */}
                  <Grid item xs={12} md={6}>
                    <label style={labelStyle}>Name</label>
                    <TextField
                      fullWidth
                      placeholder="Your Number" // Kept specific placeholder
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      sx={inputStyle}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <label style={labelStyle}>Select Course</label>
                    <TextField
                      select
                      fullWidth
                      value={formData.course}
                      onChange={(e) => handleChange("course", e.target.value)}
                      sx={inputStyle}
                      SelectProps={{ displayEmpty: true }}
                    >
                      {courses.map((c) => (
                        <MenuItem key={c} value={c}>{c}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  {/* --- ROW 2: Select Date & Phone Number --- */}
                  <Grid item xs={12} md={6}>
                    <label style={labelStyle}>Select Date</label>
                    <TextField
                      fullWidth
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      sx={inputStyle}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <CalendarTodayIcon sx={{ fontSize: 18, color: "#333" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <label style={labelStyle}>Phone Number</label>
                    <TextField
                      fullWidth
                      placeholder="77788-89999"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      sx={inputStyle}
                    />
                  </Grid>

                  {/* --- ROW 3: Email & Address --- */}
                  <Grid item xs={12} md={6}>
                    <label style={labelStyle}>Email</label>
                    <TextField
                      fullWidth
                      placeholder="your@gmail.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      sx={inputStyle}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <label style={labelStyle}>Address</label>
                    <TextField
                      fullWidth
                      placeholder="Your full address"
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      sx={inputStyle}
                    />
                  </Grid>

                  {/* --- ROW 4: Slots (Morning / Evening) --- */}
                  <Grid item xs={12}>
                    <label style={labelStyle}>Select Slot</label>
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      
                      {/* Morning Button with SUN Icon */}
                      <Button
                        variant="outlined"
                        startIcon={<WbSunnyOutlinedIcon />}
                        onClick={() => handleSlotChange("Morning")}
                        disabled={isMorningDisabled}
                        sx={{
                          textTransform: "none",
                          color: isMorningDisabled 
                            ? "#aaa" 
                            : formData.slot === "Morning" ? "#FF5722" : "#888",
                          borderColor: isMorningDisabled 
                            ? "#eee" 
                            : formData.slot === "Morning" ? "#FF5722" : "#ddd",
                          backgroundColor: isMorningDisabled ? "#f9f9f9" : "transparent",
                          padding: "8px 24px",
                          borderRadius: "6px",
                          "&:hover": {
                            borderColor: isMorningDisabled ? "#eee" : "#FF5722",
                          },
                        }}
                      >
                        Morning
                      </Button>

                      {/* Evening Button with MOON Icon */}
                      <Button
                        variant="outlined"
                        startIcon={<BedtimeOutlinedIcon />}
                        onClick={() => handleSlotChange("Evening")}
                        sx={{
                          textTransform: "none",
                          color: formData.slot === "Evening" ? "#FF5722" : "#888",
                          borderColor: formData.slot === "Evening" ? "#FF5722" : "#ddd",
                          padding: "8px 24px",
                          borderRadius: "6px",
                          "&:hover": { borderColor: "#FF5722" },
                        }}
                      >
                        Evening
                      </Button>
                    </Box>

                    {isMorningDisabled && (
                      <Typography sx={{ color: "red", fontSize: "12px", mt: 1 }}>
                        * This time is not available
                      </Typography>
                    )}
                  </Grid>
                </Grid>

                {/* --- Submit Button (Centered) --- */}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4, width: "100%" }}>
                  <Button
                    type="submit"
                    disableElevation
                    variant="contained"
                    sx={{
                      backgroundColor: "#FF5722", // Orange
                      color: "white",
                      fontWeight: "500",
                      padding: "12px 40px",
                      fontSize: "15px",
                      borderRadius: "6px",
                      textTransform: "none",
                      minWidth: "200px",
                      "&:hover": { backgroundColor: "#F4511E" },
                    }}
                  >
                    Submit Your Details
                  </Button>
                </Box>

              </form>
            </Paper>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}