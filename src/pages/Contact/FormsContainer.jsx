import { Box, Typography, Button, TextField, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function ContactQuery() {
  const [showEdu, setShowEdu] = useState(false);
  const [activeForm, setActiveForm] = useState("");

  const themeColors = {
    orangeColor: "#FF5532",
    deepBlack: "#111111",
    darkGray: "#575757",
    pureWhite: "#FFFFFF",
  };

const btnStyle = {
  background: themeColors.pureWhite,
  color: themeColors.deepBlack,
  border: `1px solid ${themeColors.deepBlack}`,
  px: { xs:2, sm:1, md:2 },    
  py: { xs:1, sm:.4, md:1 },
  fontSize:{ xs:14, sm:13, md:17 },
  fontWeight: 400,
  borderRadius: "16px",
  m: 1,
  width: { xs: "100%", sm: "270px", md: "300px" },  
  "&:hover": {
    background: themeColors.deepBlack,
    color: themeColors.pureWhite,
    border: `1px solid ${themeColors.deepBlack}`,
  }
};

  return (
  <Box
  sx={{
    background: themeColors.pureWhite,
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
  {/* Heading */}
  <Typography
    variant="h4"
    fontWeight={700}
    sx={{
      width: { md: "50%", xs: "100%" },
      pb: { xs: 2, sm: 3, md: 4 },
      color: themeColors.deepBlack,
       fontSize: {
      xs: "2rem",
      sm: "2rem",
      md: "3rem",
      lg: "3rem", 
    },
      lineHeight: 1.3,
    }}
  >
    Tell Us What You’re Looking For
  </Typography>

  <Typography
    fontWeight={600}
    fontSize={{ xs: 16, sm: 18, md: "1.5rem" }}
    width={{ md: "40%", xs: "100%" }}
    color={themeColors.deepBlack}
  >
    Choose Your Area of Interest
  </Typography>

  <Box width={{ md: "45%", sm: "80%", xs: "100%" }} mt={1}>
    <Typography
      fontSize={{ xs: 14, sm: 15, md: 16 }}
      color={themeColors.darkGray}
      lineHeight="24px"
    >
      Select whether your inquiry is about our IT education programs or IT
      services. This helps us connect you with the right team quickly.
    </Typography>
  </Box>

  {/* Buttons */}
  <Box sx={{ mt: { xs: 2, sm: 2 ,md:5} }}>
    <Button sx={btnStyle} onClick={() => setShowEdu(!showEdu)}>
      Education
    </Button>
    <Button sx={btnStyle} onClick={() => setActiveForm("services")}>
      Services
    </Button>
  </Box>

  {/* Edu Box */}
  <Box
   sx={{
  display: "flex",
  flexDirection: "column",
  gap: 0.1,
  maxHeight: showEdu ? "200px" : "0px",
  opacity: showEdu ? 1 : 0,
  overflow: "hidden",
  transition: "all .3s ease",
  width: { xs: "90%", sm: "70%", md: "48%" }, 
  mt: -0.9,
  mr: { xs: 0, sm: 15 }, 
}}

  >
    <Button sx={btnStyle} onClick={() => setActiveForm("regular")}>
      Regular Courses
    </Button>
    <Button sx={btnStyle} onClick={() => setActiveForm("industrial")}>
      Industrial Training
    </Button>
  </Box>

  {/* Back Button */}
  {activeForm && (
    <Box
    sx={{
      position: "sticky",
      top: 10,
      left: 0,
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems:"center",
      pl: { xs: 1, sm: 2, md: 6 },
      pb:1,
      cursor: "pointer",
      zIndex: 50,
    }}
    onClick={() => setActiveForm("")}
  >
    <ArrowBackIcon
      sx={{
        fontSize: { xs: 24, sm: 28, md: 32 },
        color: themeColors.deepBlack,

        "&:hover": {
          color: themeColors.orangeColor,
          transition: ".3s",
        }
      }}
    />
  </Box>
  )}

  {/* Regular */}
  {activeForm === "regular" && (
    <FormRegular themeColors={themeColors} onBack={() => setActiveForm("")} />
  )}

  {/* Industrial */}
  {activeForm === "industrial" && (
    <FormIndustrial themeColors={themeColors} onBack={() => setActiveForm("")} />
  )}

  {/* Services */}
  {activeForm === "services" && (
    <FormService themeColors={themeColors} onBack={() => setActiveForm("")} />
  )}
</Box>

  );
}

// ---------------- FORM WRAPPER ----------------
const FormWrapper = ({ children }) => (
  <Box
    sx={{
      width: "100%",
      maxWidth: "600px",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      mt: 4,
    }}
  >
    {children}
  </Box>
);

// ---------------- Validation helpers ----------------
const isEmpty = (...fields) => fields.some(f => !f || f.trim() === "");
const isValidPhone = (phone) => /^\d{10}$/.test(phone);
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ---------------- REGULAR FORM ----------------
function FormRegular({ onBack, themeColors }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "Web Development",
    message: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(formData.name, formData.mobile, formData.email, formData.course)) {
      alert("Please fill all required fields!");
      return;
    }
    if (!isValidPhone(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number!");
      return;
    }
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address!");
      return;
    }

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formData,
      "YOUR_PUBLIC_KEY"
    )
      .then(() => alert("Message sent successfully!"))
      .catch(error => alert("Failed: " + error.text));
  };

  return (
    <FormWrapper>
      <TextField label="Your Name" placeholder="Enter Your Name" name="name" value={formData.name} onChange={handleChange} fullWidth variant="outlined" required />
      <TextField label="Mobile Number" type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
      <TextField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />

      <Select name="course" value={formData.course} onChange={handleChange} sx={{ textAlign: "left" }}>
        <MenuItem disabled value="">Select your course</MenuItem>
        <MenuItem value="Graphic Designing">Graphic Designing</MenuItem>
        <MenuItem value="Web Designing">Web Designing</MenuItem>
        <MenuItem value="UI/UX Designing">UI/UX Designing</MenuItem>
        <MenuItem value="2D /3D Animations">2D /3D Animations</MenuItem>
        <MenuItem value="Motion Graphics">Motion Graphics</MenuItem>
        <MenuItem value="Graphics & Web Designing">Graphics & Web Designing</MenuItem>
        <MenuItem value="Digital Content Creator">Digital Content Creator</MenuItem>
        <MenuItem value="AutoCAD">AutoCAD</MenuItem>
        <MenuItem value="Web Development">Web Development</MenuItem>
        <MenuItem value="Full Stack Development">Full Stack Development</MenuItem>
        <MenuItem value="Backend Development">Backend Development</MenuItem>
        <MenuItem value="MERN Stack">MERN Stack</MenuItem>
        <MenuItem value="PHP Training">PHP Training</MenuItem>
        <MenuItem value="WordPress">WordPress</MenuItem>
        <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
        <MenuItem value="Social Media Marketing">Social Media Marketing</MenuItem>
        <MenuItem value="SEO Course">SEO Course</MenuItem>
        <MenuItem value="Complete Cyber Security Course">Complete Cyber Security Course</MenuItem>
        <MenuItem value="Ethical Hacking">Ethical Hacking</MenuItem>
        <MenuItem value="Data Science & Machine Learning">Data Science & Machine Learning</MenuItem>
        <MenuItem value="Software Engineering With Python">Software Engineering With Python</MenuItem>
        <MenuItem value="System Design & Operating Systems">System Design & Operating Systems</MenuItem>
        <MenuItem value="Algorithm & Data Structures In Python">Algorithm & Data Structures In Python</MenuItem>
      </Select>

      <TextField label="Message" name="message" multiline rows={4} value={formData.message} onChange={handleChange} />

      <Button variant="contained" sx={{ background: themeColors.deepBlack, mt: 2, "&:hover": { background: themeColors.orangeColor } }} onClick={handleSubmit}>
        Submit
      </Button>
    </FormWrapper>
  );
}

// ---------------- INDUSTRIAL FORM ----------------
function FormIndustrial({ onBack, themeColors }) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    course: "",
    duration: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(formData.name, formData.number, formData.email, formData.course, formData.duration)) {
      alert("Please fill all required fields!");
      return;
    }
    if (!isValidPhone(formData.number)) {
      alert("Please enter a valid 10-digit mobile number!");
      return;
    }
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address!");
      return;
    }

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formData,
      "YOUR_PUBLIC_KEY"
    )
      .then(() => alert("Message sent successfully!"))
      .catch(error => alert("Failed: " + error.text));
  };

  return (
    <FormWrapper>
      <TextField label="Full Name" placeholder="Enter your full name" name="name" value={formData.name} onChange={handleChange} fullWidth required />
      <TextField label="Mobile Number" placeholder="Enter your mobile number" type="tel" name="number" value={formData.number} onChange={handleChange} fullWidth sx={{ mt: 2 }} required />
      <TextField label="Email Address" placeholder="Enter your email" type="email" name="email" value={formData.email} onChange={handleChange} fullWidth sx={{ mt: 2 }} required />

      <Select name="course" value={formData.course} onChange={handleChange} displayEmpty fullWidth sx={{ mt: 2, textAlign: "left", "& .MuiSelect-select": { textAlign: "left" } }}>
        <MenuItem disabled value="">Select Course</MenuItem>
        <MenuItem value="Web Development">Web Development</MenuItem>
        <MenuItem value="UI/UX Designing">UI/UX Designing</MenuItem>
        <MenuItem value="Graphic Designing">Graphic Designing</MenuItem>
        <MenuItem value="Full Stack Development">Full Stack Development</MenuItem>
        <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
        <MenuItem value="Cyber Security">Cyber Security</MenuItem>
        <MenuItem value="Data Science">Data Science</MenuItem>
      </Select>

      <Select name="duration" value={formData.duration} onChange={handleChange} displayEmpty fullWidth sx={{ mt: 2, textAlign: "left", "& .MuiSelect-select": { textAlign: "left" } }}>
        <MenuItem disabled value="">Select Duration</MenuItem>
        <MenuItem value="45 Days">45 Days</MenuItem>
        <MenuItem value="3 Months">3 Months</MenuItem>
        <MenuItem value="6 Months">6 Months</MenuItem>
      </Select>

      <Button variant="contained" sx={{ background: themeColors.deepBlack, mt: 3, "&:hover": { background: themeColors.orangeColor } }} onClick={handleSubmit}>
        Submit
      </Button>
    </FormWrapper>
  );
}

// ---------------- SERVICES FORM ----------------
function FormService({ onBack, themeColors }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    business: "",
    services: "",
    customNeed: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(formData.name, formData.mobile, formData.email, formData.business, formData.services)) {
      alert("Please fill all required fields!");
      return;
    }
    if (!isValidPhone(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number!");
      return;
    }
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address!");
      return;
    }

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formData,
      "YOUR_PUBLIC_KEY"
    )
      .then(() => alert("Message sent successfully!"))
      .catch(error => alert("Failed: " + error.text));
  };

  return (
    <FormWrapper>

      <TextField label="Your Name" name="name" fullWidth onChange={handleChange} value={formData.name} placeholder="Enter your name" required />
      <TextField label="Mobile Number" type="tel" name="mobile" fullWidth onChange={handleChange} value={formData.mobile} placeholder="Enter mobile number" sx={{ mt: 2 }} required />
      <TextField label="Email" name="email" type="email" fullWidth onChange={handleChange} value={formData.email} placeholder="Enter email address" sx={{ mt: 2 }} required />
      <TextField label="Your Business Name" name="business" fullWidth onChange={handleChange} value={formData.business} placeholder="Company or Startup name" sx={{ mt: 2 }} required />

      <Select name="services" fullWidth value={formData.services} onChange={handleChange} displayEmpty sx={{ mt: 2, textAlign: "left" }} required>
        <MenuItem disabled value="">What brings you here?</MenuItem>
        <MenuItem value="Need a Social Media Manager">Need a Social Media Manager</MenuItem>
        <MenuItem value="Need a Website">Need a Website</MenuItem>
        <MenuItem value="Need Digital Marketing">Need Digital Marketing</MenuItem>
        <MenuItem value="Need Branding & Design">Need Branding & Design</MenuItem>
        <MenuItem value="Need UI/UX Design">Need UI/UX Design</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>

      {formData.services === "Other" && (
        <TextField label="Tell us more" name="customNeed" fullWidth value={formData.customNeed} onChange={handleChange} placeholder="Write your requirement" sx={{ mt: 2 }} />
      )}

      <Button variant="contained" sx={{ background: themeColors.deepBlack, mt: 3, "&:hover": { background: themeColors.orangeColor } }} onClick={handleSubmit}>
        Submit
      </Button>
    </FormWrapper>
  );
}
