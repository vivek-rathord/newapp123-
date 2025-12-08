import React, { useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const themeColors = {
  orangeColor: "#FF5532",
  darkGray: "#575757",
  pureWhite: "#FFFFFF",
  black: "#111111"
};

// Heading container
const HeadingBox = styled(Box)(({ theme }) => ({
  width: "90%",
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginBottom: "50px",
}));

const OrangeSpan = styled(Typography)(({ theme }) => ({
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: "5px 20px",
  borderRadius: "25px",
  fontSize: "14px",
  letterSpacing: "1.5px",
  fontWeight: "600",
  display: "inline-block",
  alignSelf: "center"
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "700",
  lineHeight: "1.2",
  color: themeColors.black,
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  }
}));

// Outer card wrapper
const MainBox = styled(Box)(({ theme }) => ({
  width: "90%",
  maxWidth: "1000px",
  margin: "20px auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

// Each card
const ContactCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "30px 20px",
  borderRadius: "25px",
  background: themeColors.pureWhite,
  alignItems: "flex-start",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.07)",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    gap: "30px",
    padding: "40px 32px",
    borderRadius: "35px",
  },
  [theme.breakpoints.up("md")]: {
    gap: "40px",
    padding: "50px 32px",
    borderRadius: "40px",
  }
}));

const IconBox = styled(Box)(({ theme }) => ({
  backgroundColor: themeColors.black,
  color: themeColors.pureWhite,
  width: "37px",
  height: "37px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

export default function GetInTouchSection() {

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <Box sx={{ mt: { xs: 4, sm: 6, md: 8 } }}>

      {/* ------ Heading Section ------ */}
      <HeadingBox data-aos="fade-up" data-aos-delay="200">
        <OrangeSpan>Get In Touch</OrangeSpan>

        <Title>
          Prefer To Reach Us <br /> Directly?
        </Title>
      </HeadingBox>

      {/* ------ Contact Cards ------ */}
      <MainBox>

        <ContactCard data-aos="fade-left" data-aos-delay="150">
          <IconBox>
            <LocationOnIcon sx={{ fontSize: 23, color: themeColors.pureWhite }} />
          </IconBox>
          <Box>
            <Typography variant="h6" fontWeight={700}>Office</Typography>
            <Typography sx={{ fontSize: { xs: '16px', sm: '18px' } }}>
              Dharamshala, Himachal Pradesh
            </Typography>
            <Typography variant="body2" sx={{ color: themeColors.darkGray, fontSize: { xs: '13px', sm: '14px' } }}>
              Near Govt. ITI, above Gramin Bank Dari, <br /> Dharamshala (176057)
            </Typography>
          </Box>
        </ContactCard>

        <ContactCard data-aos="fade-left" data-aos-delay="300">
          <IconBox>
            <PhoneIcon sx={{ fontSize: 23, color: themeColors.pureWhite }} />
          </IconBox>
          <Box>
            <Typography variant="h6" fontWeight={700}>Phone</Typography>
            <Typography sx={{ fontSize: { xs: '16px', sm: '18px' } }}>
              +91 9816732055, 7590832055
            </Typography>
            <Typography variant="body2" sx={{ color: themeColors.darkGray, fontSize: { xs: '13px', sm: '14px' } }}>
              Mon to Sat 10 am to 5 pm
            </Typography>
          </Box>
        </ContactCard>

        <ContactCard data-aos="fade-left" data-aos-delay="450">
          <IconBox>
            <MailIcon sx={{ fontSize: 23, color: themeColors.pureWhite }} />
          </IconBox>
          <Box>
            <Typography variant="h6" fontWeight={700}>Chat to us</Typography>
            <Typography sx={{ fontSize: { xs: '16px', sm: '18px' } }}>
              info@netcoder.in
            </Typography>
            <Typography variant="body2" sx={{ color: themeColors.darkGray, fontSize: { xs: '13px', sm: '14px' } }}>
              Send us your query anytime!
            </Typography>
          </Box>
        </ContactCard>

      </MainBox>

    </Box>
  );
}
