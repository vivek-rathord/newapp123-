 import React, { useState, useEffect } from "react";
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
  InputBase, // Using InputBase for custom CSS look
  Select,
  MenuItem
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
    email: "",
    phone: "",
    course: "Graphic Designing",
    date: "",
    slot: "",
    address: "",
  });

  const [isMorningDisabled, setIsMorningDisabled] = useState(false);

  // Time Logic
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
    
    // RELOAD PAGE
    window.location.reload();
  };

  // --- CUSTOM CSS STYLES (Mapped to JS) ---
  const customColors = {
    primary: "#FB8454", // Orange Active
    border: "#CCCCCC",
    placeholder: "#AAAAAA",
    text: "#333333"
  };

  const labelStyle = {
    display: "block",
    color: customColors.text,
    fontWeight: "700",
    marginBottom: "8px",
    fontSize: "15px",
    fontFamily: "sans-serif"
  };

  // 38px Height Input Style
  const inputSx = {
    "& .MuiInputBase-input": {
      height: "38px", // Fixed Height
      padding: "0 16px",
      boxSizing: "border-box",
      borderRadius: "6px",
      border: `1px solid ${customColors.border}`,
      color: customColors.text,
      fontSize: "14px",
      backgroundColor: "white",
      transition: "all 0.3s ease",
      "&::placeholder": { color: customColors.placeholder, opacity: 1 },
      "&:focus": {
        borderColor: customColors.text,
        borderWidth: "1px",
        outline: `1px solid ${customColors.text}`
      }
    },
    width: "100%"
  };

  const selectSx = {
    height: "38px",
    borderRadius: "6px",
    border: `1px solid ${customColors.border}`,
    color: customColors.text,
    fontSize: "14px",
    "& .MuiSelect-select": {
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        height: "100% !important",
    },
    "& fieldset": { border: "none" }, 
    "&:focus-within": {
       borderColor: customColors.text,
       outline: `1px solid ${customColors.text}`
    }
  };

  return (
    <Box>
      {/* ==============================================
          HERO SECTION (UNCHANGED)
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
        <Box sx={{ backgroundColor: "#FF5722", color: "white", borderRadius: "50px", padding: "6px 22px", fontSize: "13px", fontWeight: "600", mb: 3, letterSpacing: "0.5px" }}>
          Free Demo Class
        </Box>

        <Typography variant="h2" sx={{ fontWeight: "800", color: "#111", fontSize: { xs: "32px", md: "48px" }, lineHeight: 1.2, mb: 3, fontFamily: "sans-serif" }}>
          Still Unsure? Try A Free <br /> Demo Class
        </Typography>

        <Typography sx={{ color: "#444", fontSize: "16px", maxWidth: "750px", lineHeight: 1.6, mb: 5, fontFamily: "sans-serif" }}>
          Experience our teaching approach before making a commitment. Whether
          you're exploring a new skill or planning your career path, our demo class
          gives you a glimpse of how we teach, what you'll learn, and how we can
          help you grow. No pressure—just real learning, right from the start.
        </Typography>

        <Button
          onClick={() => setOpen(true)}
          disableElevation
          sx={{ backgroundColor: "#111", color: "white", padding: "14px 40px", fontSize: "15px", borderRadius: "8px", fontWeight: "500", textTransform: "none", "&:hover": { backgroundColor: "#333" } }}
        >
          Book A Demo Class
        </Button>
      </Box>

      {/* ==============================================
            POPUP form
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
              width: "100%",
              maxWidth: "680px",
              outline: "none",
            }}
          >
            {/* --- UPDATED FORM UI --- */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: "20px", // Updated to match CSS
                position: "relative",
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "#fff",
                boxShadow: "0px 10px 40px rgba(0,0,0,0.2)",
              }}
            >
              <IconButton
                onClick={() => setOpen(false)}
                sx={{ position: "absolute", right: 12, top: 12, color: "#333", padding: "4px" }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>

              <Typography align="center" sx={{ color: "#FF5722", fontWeight: "700", fontSize: "24px", mb: 4, fontFamily: "sans-serif" }}>
                Book Your Demo Class
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  
                  {/* Row 1 */}
                  <Grid item xs={12} md={6}>
                    <label style={labelStyle}>Name</label>
                    <InputBase
                      fullWidth
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      sx={inputSx}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <label style={labelStyle}>Select Course</label>
                    <Select
                      fullWidth
                      value={formData.course}
                      onChange={(e) => handleChange("course", e.target.value)}
                      sx={selectSx}
                      displayEmpty
                    >
                      {courses.map((c) => (
                        <MenuItem key={c} value={c}>{c}</MenuItem>
                      ))}
                    </Select>
                  </Grid>

                  {/* Row 2 */}
                  <Grid item xs={12} md={6}>
                    <label style={labelStyle}>Select Date</label>
                    <InputBase
                      fullWidth
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      sx={inputSx}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <label style={labelStyle}>Phone Number</label>
                    <InputBase
                      fullWidth
                      placeholder="77788-89999"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      sx={inputSx}
                    />
                  </Grid>

                  {/* Row 3 */}
                  <Grid item xs={12} md={6}>
                    <label style={labelStyle}>Email</label>
                    <InputBase
                      fullWidth
                      placeholder="your@gmail.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      sx={inputSx}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <label style={labelStyle}>Address</label>
                    <InputBase
                      fullWidth
                      placeholder="Your full address"
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      sx={inputSx}
                    />
                  </Grid>

                  {/* Row 4: SLOTS with Icons & CSS Style */}
                  <Grid item xs={12}>
                    <label style={labelStyle}>Select Slot</label>
                    <Box sx={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                      
                      {/* Morning Button */}
                      <button
                        type="button"
                        onClick={() => handleSlotChange("Morning")}
                        disabled={isMorningDisabled}
                        style={{
                          display: "flex",
                          gap: "8px",
                          alignItems: "center",
                          borderRadius: "8px",
                          border: isMorningDisabled ? "1px solid #eee" : "1px solid #CCCCCC",
                          padding: "8px 20px",
                          fontSize: "14px",
                          fontFamily: "sans-serif",
                          cursor: isMorningDisabled ? "not-allowed" : "pointer",
                          transition: "all 0.3s ease",
                          backgroundColor: isMorningDisabled ? "#f9f9f9" : (formData.slot === "Morning" ? customColors.primary : "transparent"),
                          color: isMorningDisabled ? "#ccc" : (formData.slot === "Morning" ? "white" : "#AAAAAA"),
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
                          borderRadius: "8px",
                          border: "1px solid #CCCCCC",
                          padding: "8px 20px",
                          fontSize: "14px",
                          fontFamily: "sans-serif",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          backgroundColor: formData.slot === "Evening" ? customColors.primary : "transparent",
                          color: formData.slot === "Evening" ? "white" : "#AAAAAA",
                        }}
                      >
                        <BedtimeOutlinedIcon sx={{ fontSize: 18 }} />
                        Evening
                      </button>
                    </Box>

                    {isMorningDisabled && (
                      <Typography sx={{ color: "red", fontSize: "12px", mt: 1, fontWeight: 500 }}>
                        * This time is not available
                      </Typography>
                    )}
                  </Grid>
                </Grid>

                {/* Submit Button */}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                  <Button
                    type="submit"
                    disableElevation
                    variant="contained"
                    sx={{
                      backgroundColor: customColors.primary,
                      color: "white",
                      fontWeight: "500",
                      padding: "10px 40px",
                      fontSize: "15px",
                      borderRadius: "6px",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#e66e3e" }
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