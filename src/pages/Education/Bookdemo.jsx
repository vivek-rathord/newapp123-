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

// ICONS
import CloseIcon from "@mui/icons-material/Close";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function BookDemoClass() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    course: "Auto CAD",
    date: "",
    phone: "",
    email: "",
    address: "",
    slot: "",
  });

  const [isMorningDisabled, setIsMorningDisabled] = useState(false);

  useEffect(() => {
    if (open) {
      const currentHour = new Date().getHours();
      // Disable morning if it's 12 PM or later
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

  // --- PROFESSIONAL STYLES ---
  const labelStyle = {
    fontWeight: "600",
    color: "#333",
    fontSize: "14px",
    marginBottom: "6px",
    display: "block",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff", // Clean white background
      borderRadius: "8px",     // Modern rounded corners
      transition: "all 0.2s ease-in-out",
      "& fieldset": { 
        borderColor: "#E0E0E0", // Light grey border
        borderWidth: "1px" 
      },
      "&:hover fieldset": { 
        borderColor: "#999"    // Darker grey on hover
      },
      "&.Mui-focused fieldset": { 
        borderColor: "#FF5722", // Orange on focus
        borderWidth: "2px",
        boxShadow: "0 0 5px rgba(255, 87, 34, 0.2)" // Subtle glow
      },
    },
    "& .MuiInputBase-input": {
      padding: "12px 14px",
      fontSize: "15px",
      color: "#000",
      fontWeight: "500",
      "&::placeholder": { color: "#9E9E9E", opacity: 1 },
    },
  };

  return (
    <Box>
      {/* ==============================================
          HERO SECTION
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
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "800", mb: 3 }}>
          Book Your Free Demo
        </Typography>
        <Button
          onClick={() => setOpen(true)}
          disableElevation
          variant="contained"
          sx={{
            backgroundColor: "#111",
            color: "white",
            padding: "14px 40px",
            fontSize: "16px",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#333" },
          }}
        >
          Book A Demo Class
        </Button>
      </Box>

      {/* ==============================================
          MODAL POPUP
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
              width: "90%",
              maxWidth: "750px", // Perfect width for 2 columns
              outline: "none",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: "16px",
                position: "relative",
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "#fff",
                boxShadow: "0px 20px 60px rgba(0,0,0,0.15)",
              }}
            >
              {/* Close Icon */}
              <IconButton
                onClick={() => setOpen(false)}
                sx={{
                  position: "absolute",
                  right: 15,
                  top: 15,
                  color: "#333",
                  bgcolor: "#f5f5f5",
                  "&:hover": { bgcolor: "#eee" }
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>

              <Typography
                align="center"
                sx={{
                  color: "#FF5722",
                  fontWeight: "800",
                  fontSize: "26px",
                  mb: 4,
                  mt: 1,
                  fontFamily: "sans-serif",
                }}
              >
                Book Your Demo Class
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  
                  {/* --- ROW 1: Name & Course --- */}
                  <Grid item xs={12} sm={6}>
                    <label style={labelStyle}>Name</label>
                    <TextField
                      fullWidth
                      placeholder="Your Number"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      sx={inputStyle}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
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

                  {/* --- ROW 2: Date & Phone --- */}
                  <Grid item xs={12} sm={6}>
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
                            {/* Calendar Icon - Explicitly Black */}
                            <CalendarTodayIcon sx={{ fontSize: 20, color: "#222" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
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
                  <Grid item xs={12} sm={6}>
                    <label style={labelStyle}>Email</label>
                    <TextField
                      fullWidth
                      placeholder="your@gmail.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      sx={inputStyle}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <label style={labelStyle}>Address</label>
                    <TextField
                      fullWidth
                      placeholder="Your full address"
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      sx={inputStyle}
                    />
                  </Grid>

                  {/* --- ROW 4: Slot Buttons --- */}
                  <Grid item xs={12}>
                    <label style={labelStyle}>Select Slot</label>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      
                      {/* Morning Button */}
                      <Button
                        variant="outlined"
                        startIcon={<WbSunnyOutlinedIcon />}
                        onClick={() => handleSlotChange("Morning")}
                        disabled={isMorningDisabled}
                        sx={{
                          flex: 1, // Makes buttons equal width
                          justifyContent: "center",
                          textTransform: "none",
                          fontWeight: "600",
                          padding: "12px",
                          borderRadius: "8px",
                          borderWidth: "1px",
                          // Dynamic Styles based on selection
                          color: isMorningDisabled 
                            ? "#aaa" 
                            : formData.slot === "Morning" ? "#FF5722" : "#333",
                          borderColor: isMorningDisabled 
                            ? "#eee" 
                            : formData.slot === "Morning" ? "#FF5722" : "#ddd",
                          backgroundColor: isMorningDisabled 
                            ? "#f9f9f9" 
                            : formData.slot === "Morning" ? "rgba(255, 87, 34, 0.05)" : "white",
                          "&:hover": {
                            borderColor: isMorningDisabled ? "#eee" : "#FF5722",
                            backgroundColor: isMorningDisabled ? "#f9f9f9" : "rgba(255, 87, 34, 0.1)",
                          },
                        }}
                      >
                        Morning
                      </Button>

                      {/* Evening Button */}
                      <Button
                        variant="outlined"
                        startIcon={<BedtimeOutlinedIcon />}
                        onClick={() => handleSlotChange("Evening")}
                        sx={{
                          flex: 1, // Makes buttons equal width
                          justifyContent: "center",
                          textTransform: "none",
                          fontWeight: "600",
                          padding: "12px",
                          borderRadius: "8px",
                          borderWidth: "1px",
                          // Dynamic Styles
                          color: formData.slot === "Evening" ? "#FF5722" : "#333",
                          borderColor: formData.slot === "Evening" ? "#FF5722" : "#ddd",
                          backgroundColor: formData.slot === "Evening" ? "rgba(255, 87, 34, 0.05)" : "white",
                          "&:hover": { 
                            borderColor: "#FF5722",
                            backgroundColor: "rgba(255, 87, 34, 0.1)",
                          },
                        }}
                      >
                        Evening
                      </Button>
                    </Box>

                    {isMorningDisabled && (
                      <Typography sx={{ color: "red", fontSize: "12px", mt: 1, ml: 1 }}>
                        * This time is not available
                      </Typography>
                    )}
                  </Grid>
                </Grid>

                {/* --- Submit Button --- */}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                  <Button
                    type="submit"
                    disableElevation
                    variant="contained"
                    sx={{
                      backgroundColor: "#FF5722",
                      color: "white",
                      fontWeight: "700",
                      letterSpacing: "0.5px",
                      padding: "14px 60px",
                      fontSize: "16px",
                      borderRadius: "8px",
                      textTransform: "none",
                      width: { xs: "100%", sm: "auto" },
                      boxShadow: "0 4px 14px 0 rgba(255,87,34,0.39)",
                      "&:hover": { 
                        backgroundColor: "#F4511E",
                        boxShadow: "0 6px 20px rgba(255,87,34,0.23)" 
                      },
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