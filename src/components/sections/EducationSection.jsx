 import React from "react";
 import { Link } from "react-router-dom";
 import { Box, Typography, Button, Card, CardContent, Grid, styled } from "@mui/material";
 import imager from "../../assets/Images/heroimg.jpg";
 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              const themeColors = {
   orangeColor: '#FF5532',
   deepBlack: '#111111',
   darkGray: '#575757',
   pureWhite: '#FFFFFF',
 };
 
 const ServicesContainer = styled(Box)(({ theme }) => ({
   padding: '100px 0px',
   width: '100%',
   textAlign: 'center',
   [theme.breakpoints.down('md')]: {
     padding: '60px 0px',
   }
 }));
 
 const SectionHeading = styled(Box)(({ theme }) => ({
   position: 'relative',
   display: 'inline-block',
   marginBottom: '60px',
   overflow: 'hidden',
 }));
 
 const SectionTitle = styled(Typography)(({ theme }) => ({
   color: '#CECFCA',
   fontSize: '6rem',
   fontWeight: '700',
   letterSpacing: '8px',
   padding: '20px 0px',
   background: ' rgba(206, 207, 202, 1)',
   backgroundClip: 'text',
   WebkitBackgroundClip: 'text',
   color: 'transparent',
   [theme.breakpoints.down('md')]: {
     fontSize: '4rem',
   },
   [theme.breakpoints.down('sm')]: {
     fontSize: '3rem',
   }
 }));
 
 const SectionSubtitle = styled(Typography)(({ theme }) => ({
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   padding: '4px 20px',
   backgroundColor: themeColors.orangeColor,
   color: themeColors.pureWhite,
   borderRadius: '25px',
   fontSize: '16px',
   fontWeight: '600',
   whiteSpace: 'nowrap',
 }));
 
 const ContentTitle = styled(Typography)(({ theme }) => ({
   fontSize: '2.5rem',
   fontWeight: 'bold',
   marginBottom: '40px',
   background: 'linear-gradient(135deg, #111111 0%, #575757 100%)',
   backgroundClip: 'text',
   WebkitBackgroundClip: 'text',
   color: 'transparent',
   [theme.breakpoints.down('md')]: {
     fontSize: '2rem',
   }
 }));
 
 const ServicesGrid = styled(Grid)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'flex-start',
   gap: '50px',
   maxWidth: '1300px',
   margin: '0 auto',
   [theme.breakpoints.down('lg')]: {
     flexDirection: 'column',
     alignItems: 'center',
     gap: '40px',
   }
 }));
 
 const ServicesList = styled(Box)(({ theme }) => ({
   flex: 1,
   minWidth: '400px',
   display: 'flex',
   flexDirection: 'column',
   textAlign: 'left',
   padding: '0px 40px',
   [theme.breakpoints.down('md')]: {
     padding: '0px',
     width: '100%',
     minWidth: 'auto',
   }
 }));
 
 const ActiveService = styled(Card)(({ theme }) => ({
   background: themeColors.pureWhite,
   padding: '30px',
   width:'100%',
   maxWidth:'600px',
   borderRadius: '15px',
   boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
   marginBottom: '20px',
   transition: 'all 0.4s ease',
   border: '2px solid transparent',
   '&:hover': {
     transform: 'translateY(-10px)',
     borderColor: themeColors.orangeColor,
     boxShadow: '0 20px 60px rgba(255, 85, 50, 0.15)',
   },
 }));
 
 const ServiceTitle = styled(Typography)(({ theme }) => ({
   fontSize: '1.3rem',
   fontWeight: '600',
   marginBottom: '15px',
   color: themeColors.deepBlack,
 }));
 
 const ServiceText = styled(Typography)(({ theme }) => ({
   color: themeColors.darkGray,
   lineHeight: '1.6',
   fontSize: '15px',
 }));
 
 const ServiceItem = styled(Typography)(({ theme }) => ({
   fontSize: '1.1rem',
   fontWeight: '600',
   marginLeft: '20px',
   padding: '8px 0px',
   color: themeColors.darkGray,
   cursor: 'pointer',
   transition: 'all 0.3s ease',
   '&:hover': {
     color: themeColors.orangeColor,
     transform: 'translateX(10px)',
   },
 }));
 
 const ServiceImage = styled(Box)(({ theme }) => ({
   flex: 1,
   minWidth: '400px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   '& img': {
     width: '100%',
     maxWidth: '400px',
     height: '350px',
     borderRadius: '20px',
     objectFit: 'cover',
     boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
     transition: 'all 0.5s ease',
   },
   '&:hover img': {
     transform: 'scale(1.05)',
     boxShadow: '0 25px 70px rgba(0,0,0,0.2)',
   },
   [theme.breakpoints.down('md')]: {
     minWidth: 'auto',
     width: '90%',
     '& img': {
       height: '300px',
     }
   }
 }));
 
 const ButtonContainer = styled(Box)(({ theme }) => ({
   width: '100%',
   textAlign: 'center',
   marginTop: '50px',
 }));
 
 const BlackButton = styled(Button)(({ theme }) => ({
   backgroundColor: themeColors.deepBlack,
   color: themeColors.pureWhite,
   padding: '15px 50px',
   borderRadius: '10px',
   fontSize: '16px',
   fontWeight: '600',
   textTransform: 'none',
   transition: 'all 0.4s ease',
   '&:hover': {
     backgroundColor: themeColors.orangeColor,
     transform: 'translateY(-3px)',
     boxShadow: '0 15px 35px rgba(255, 85, 50, 0.3)',
   }
 }));
 
 function ServicesSection() {
   return (
     <ServicesContainer>
       <SectionHeading data-aos="zoom-in">
         <SectionTitle>EDUCATION</SectionTitle>
         <SectionSubtitle>What We Do</SectionSubtitle>
       </SectionHeading>
 
       <ContentTitle data-aos="fade-up">
         Popular Services We Offers
       </ContentTitle>
 
       <ServicesGrid container>
         <Grid item xs={12} lg={6} display="flex" justifyContent="center">
           <ServicesList data-aos="fade-right" data-aos-delay="200">
             <ActiveService data-aos="zoom-in" data-aos-delay="300">
               <ServiceTitle>01. Creative Design Solutions</ServiceTitle>
               <ServiceText>
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
               </ServiceText>
             </ActiveService>
 
             <ServiceItem>02. Web Development Solutions</ServiceItem>
             <ServiceItem>03. Digital Marketing</ServiceItem>
             <ServiceItem>04. Digital Engagement Solutions</ServiceItem>
           </ServicesList>
         </Grid>
 
         <Grid item xs={12} lg={6} display="flex" justifyContent="center">
           <ServiceImage data-aos="fade-left" data-aos-delay="400">
             <img src={imager} alt="Services" />
           </ServiceImage>
         </Grid>
       </ServicesGrid>
 
       <ButtonContainer data-aos="fade-up" data-aos-delay="500">
         <Link to="/services" style={{ textDecoration: 'none' }}>
           <BlackButton>
             Explore All Courses
           </BlackButton>
         </Link>
       </ButtonContainer>
     </ServicesContainer>
   );
 }
 
 export default ServicesSection;