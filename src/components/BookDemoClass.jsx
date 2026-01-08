  import React, { useState } from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WbTwilightIcon from '@mui/icons-material/WbTwilight'; // Evening icon
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function BookDemoClass() {
  const [open, setOpen] = useState(true); // Default open to see the result immediately
  const [formData, setFormData] = useState({
    name: "",
    course: "Graphic Designing",
    date: "",
    phone: "",
    email: "",
    address: "",
    slot: "",
  });

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
    setFormData((prev) => ({ ...prev, slot: slot }));
  };

  // --- STYLES TO MATCH IMAGE EXACTLY ---
  const themeColor = "#ff7056"; // The coral/orange color
  const labelColor = "#333";
  
  // Custom Label Style (Labels are outside the box in your image)
  const labelStyle = {
    fontWeight: "700",
    color: "#222",
    fontSize: "15px",
    marginBottom: "8px",
    display: "block",
    fontFamily: "sans-serif",
  };

  // Common Input Field Style
  const commonInputSx = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff",
      borderRadius: "6px",
      height: "48px", // Fixed height to match image
      "& fieldset": { borderColor: "#ddd", borderWidth: "1px" },
      "&:hover fieldset": { borderColor: "#bbb" },
      "&.Mui-focused fieldset": { borderColor: themeColor, borderWidth: "1px" },
    },
    "& .MuiInputBase-input": {
      padding: "0 14px", // Vertically centered
      height: "100%",
      fontSize: "14px",
      color: "#555",
      "&::placeholder": { color: "#aaa", opacity: 1 },
    },
  };

  // "Select Course" has a darker/black border in the image
  const selectCourseSx = {
    ...commonInputSx,
    "& .MuiOutlinedInput-root": {
        ...commonInputSx["& .MuiOutlinedInput-root"],
        "& fieldset": { borderColor: "#333", borderWidth: "1.5px" }, // Thicker black border
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#f5f5f5" }}>
      
      {/* Button to trigger modal */}
      {!open && <Button variant="contained" onClick={() => setOpen(true)}>Open Form</Button>}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500, sx: { backgroundColor: "rgba(0,0,0,0.5)" } }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "95%",
              maxWidth: "950px", // Wide enough for 2 columns
              outline: "none",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: "10px",
                position: "relative",
                maxHeight: "95vh",
                overflowY: "auto",
                backgroundColor: "#fff",
              }}
            >
              {/* Close Icon */}
              <IconButton
                onClick={() => setOpen(false)}
                sx={{ position: "absolute", right: 15, top: 15, color: "#333" }}
              >
                <CloseIcon />
              </IconButton>

              {/* Title */}
              <Typography
                align="center"
                sx={{
                  color: themeColor,
                  fontWeight: "700",
                  fontSize: "28px",
                  mb: 4,
                  fontFamily: "sans-serif",
                }}
              >
                Book Your Demo Class
              </Typography>

              <Grid container spacing={4}>
                
                {/* --- Row 1: Name & Select Course --- */}
                <Grid item xs={12} md={6}>
                  <label style={labelStyle}>Name</label>
                  <TextField
                    fullWidth
                    placeholder="Your Number" // Matches the placeholder in your image
                    sx={commonInputSx}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <label style={labelStyle}>Select Course</label>
                  <TextField
                    select
                    fullWidth
                    value={formData.course}
                    onChange={(e) => handleChange("course", e.target.value)}
                    sx={selectCourseSx} // Using the darker border style
                    SelectProps={{ displayEmpty: true }}
                  >
                    {courses.map((c) => (
                      <MenuItem key={c} value={c}>{c}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* --- Row 2: Select Date & Phone Number --- */}
                <Grid item xs={12} md={6}>
                  <label style={labelStyle}>Select Date</label>
                  <TextField
                    fullWidth
                    type="date" // Shows calendar picker
                    sx={commonInputSx}
                    // Attempt to hide native picker icon to use custom one if needed, 
                    // or just let the custom icon sit there visually.
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
                    sx={commonInputSx}
                  />
                </Grid>

                {/* --- Row 3: Email & Address --- */}
                <Grid item xs={12} md={6}>
                  <label style={labelStyle}>Email</label>
                  <TextField
                    fullWidth
                    placeholder="your@gmail.com"
                    sx={commonInputSx}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <label style={labelStyle}>Address</label>
                  <TextField
                    fullWidth
                    placeholder="Your full address"
                    sx={commonInputSx}
                  />
                </Grid>

                {/* --- Row 4: Select Slot --- */}
                <Grid item xs={12}>
                  <label style={labelStyle}>Select Slot</label>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    {/* Morning Button */}
                    <Button
                      variant="outlined"
                      startIcon={<WbSunnyOutlinedIcon />}
                      onClick={() => handleSlotChange("Morning")}
                      sx={{
                        textTransform: "none",
                        color: formData.slot === "Morning" ? themeColor : "#888",
                        borderColor: formData.slot === "Morning" ? themeColor : "#ddd",
                        minWidth: "120px",
                        padding: "8px 20px",
                        borderRadius: "6px",
                        "&:hover": { borderColor: themeColor, bgcolor: "#fff5f3" }
                      }}
                    >
                      Morning
                    </Button>

                    {/* Evening Button */}
                    <Button
                      variant="outlined"
                      startIcon={<WbTwilightIcon />}
                      onClick={() => handleSlotChange("Evening")}
                      sx={{
                        textTransform: "none",
                        color: formData.slot === "Evening" ? themeColor : "#888",
                        borderColor: formData.slot === "Evening" ? themeColor : "#ddd",
                        minWidth: "120px",
                        padding: "8px 20px",
                        borderRadius: "6px",
                        "&:hover": { borderColor: themeColor, bgcolor: "#fff5f3" }
                      }}
                    >
                      Evening
                    </Button>
                  </Box>
                </Grid>

                {/* --- Submit Button (Centered at bottom) --- */}
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: themeColor,
                      color: "#fff",
                      textTransform: "none",
                      fontSize: "16px",
                      fontWeight: "600",
                      padding: "12px 40px",
                      borderRadius: "6px",
                      boxShadow: "0px 10px 20px rgba(255, 112, 86, 0.3)", // Glow effect
                      "&:hover": { bgcolor: "#e6654e" }
                    }}
                  >
                    Submit Your Details
                  </Button>
                </Grid>

              </Grid>
            </Paper>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

//  here the  code  in mobile all field are show in center wiht  full widht   full resposnive dont chnage in the   dekstop and pc and laptop 