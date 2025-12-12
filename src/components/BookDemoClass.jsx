import React, { useState } from "react";
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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const themeColors = {
  orangeColor: "#FF5532",
  deepBlack: "#111111",
  darkGray: "#575757",
  pureWhite: "#FFFFFF",
};

/* --------------------------- Global Button Style --------------------------- */
const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: "10px 25px",
  borderRadius: "10px",
  fontWeight: 600,
  textTransform: "none",
  fontSize: "1rem",
  flex: 1,
  "&:hover": {
    backgroundColor: themeColors.deepBlack,
  },
}));

/* --------------------------- Styled Components --------------------------- */
const ModalContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 900,
  backgroundColor: themeColors.pureWhite,
  borderRadius: 20,
  boxShadow: "0 25px 80px rgba(0,0,0,0.15)",
  padding: "40px 30px",
  [theme.breakpoints.down("sm")]: {
    padding: "25px 20px",
  },
}));

const ModalTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: 30,
  color: themeColors.orangeColor,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: 10,
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 15,
  right: 15,
  color: themeColors.darkGray,
  "&:hover": {
    color: themeColors.orangeColor,
    backgroundColor: "transparent",
  },
}));

/* --------------------------- Component --------------------------- */
export default function BookDemoClass() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const courses = ["Graphic Designing", "Web Development", "UI/UX Designing"];

  const handleSendOTP = () => {
    if (!phone) return alert("Please enter phone number first");
    setOtpSent(true);
    alert("OTP sent to your mobile number!");
  };

  return (
    <>
      {/* OPEN BUTTON */}
      <PrimaryButton onClick={() => setOpen(true)}>Book a Demo Class</PrimaryButton>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalContainer>
          {/* Close Button */}
          <CloseButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </CloseButton>

          <ModalTitle>Book Your Demo Class</ModalTitle>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <StyledTextField label="Name" placeholder="Your Name" />
            </Grid>

            <Grid item xs={12} md={6}>
              <StyledTextField select label="Select Course" defaultValue="">
                {courses.map((c) => (
                  <MenuItem value={c} key={c}>
                    {c}
                  </MenuItem>
                ))}
              </StyledTextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <StyledTextField
                type="date"
                label="Select Date"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <StyledTextField
                  label="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <PrimaryButton sx={{ minWidth: "130px" }} onClick={handleSendOTP}>
                  Send OTP
                </PrimaryButton>
              </Box>
            </Grid>

            {otpSent && (
              <Grid item xs={12} md={6}>
                <StyledTextField
                  label="Enter OTP"
                  placeholder="123456"
                  inputProps={{ maxLength: 6 }}
                />
              </Grid>
            )}

            <Grid item xs={12} md={6}>
              <StyledTextField label="Email" placeholder="your@gmail.com" />
            </Grid>

            <Grid item xs={12} md={6}>
              <StyledTextField label="Address" placeholder="Your full address" />
            </Grid>

            <Grid item xs={12}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>Select Slot</Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <PrimaryButton>Morning</PrimaryButton>
                <PrimaryButton>Evening</PrimaryButton>
              </Box>
            </Grid>

            <Grid item xs={12} textAlign="center" mt={3}>
              <PrimaryButton sx={{ fontSize: 18, padding: "12px 30px" }}>
                Submit Your Details
              </PrimaryButton>
            </Grid>
          </Grid>
        </ModalContainer>
      </Modal>
    </>
  );
}
