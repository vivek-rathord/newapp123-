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

const BlogsContainer = styled(Box)(({ theme }) => ({
  padding: '100px 40px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '60px 20px',
  }
}));

const HeadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '25px',
  marginBottom: '60px',
  textAlign: 'center',
}));

const OrangeSpan = styled(Typography)(({ theme }) => ({
  backgroundColor: themeColors.orangeColor,
  color: themeColors.pureWhite,
  padding: '8px 18px',
  borderRadius: '20px',
  fontSize: '14px',
  letterSpacing: '1px',
  fontWeight: '600',
  display: 'inline-block',
}));

const BlogsTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  background: 'linear-gradient(135deg, #111111 0%, #575757 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  }
}));

const BlogsGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  justifyContent: 'center',
  paddingTop: '50px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '30px',
    gap: '40px',
  }
}));

const BlogCard = styled(Card)(({ theme }) => ({
  width: '350px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  borderRadius: '25px',
  overflow: 'hidden',
  boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
  transition: 'all 0.5s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-15px)',
    boxShadow: '0 25px 70px rgba(0,0,0,0.15)',
  },
  '&:nth-child(1), &:nth-child(3)': {
    marginTop: '80px',
    [theme.breakpoints.down('md')]: {
      marginTop: '0px',
    }
  },
  [theme.breakpoints.down('md')]: {
    width: '90%',
    marginBottom: '30px',
  }
}));

const BlogImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '280px',
  borderRadius: '25px 25px 0 0',
  overflow: 'hidden',
  transition: 'all 0.5s ease',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.5s ease',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  }
}));

const BlogContent = styled(CardContent)(({ theme }) => ({
  padding: '25px',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
}));

const BlogCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '1.4',
  marginBottom: '15px',
  color: themeColors.deepBlack,
  transition: 'all 0.3s ease',
  '&:hover': {
    color: themeColors.orangeColor,
  }
}));

const BlogButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 'auto',
  paddingTop: '15px',
}));

const BlogButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: themeColors.darkGray,
  padding: '0px',
  fontSize: '14px',
  fontWeight: '700',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: themeColors.orangeColor,
    backgroundColor: 'transparent',
    transform: 'translateX(5px)',
  }
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginTop: '60px',
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

function BlogsSection() {
  return (
    <BlogsContainer>
      <HeadingContainer data-aos="fade-up">
        <OrangeSpan data-aos="zoom-in">Blogs</OrangeSpan>
        <BlogsTitle variant="h2" data-aos="fade-up" data-aos-delay="200">
          Stories That Fuel The Build
        </BlogsTitle>
      </HeadingContainer>

      <BlogsGrid>
        <BlogCard data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
          <BlogImage>
            <img src={imager} alt="blog-1" />
          </BlogImage>
          <BlogContent>
            <BlogCardTitle>
              How can typography be used effectively in branding and social media graphics?
            </BlogCardTitle>
            <BlogButtonContainer>
              <Link to='/Blogs' style={{ textDecoration: 'none' }}>
                <BlogButton>Read Full Blog</BlogButton>
              </Link>
            </BlogButtonContainer>
          </BlogContent>
        </BlogCard>

        <BlogCard data-aos="fade-up" data-aos-duration="2000" data-aos-delay="150">
          <BlogImage>
            <img src={imager} alt="blog-2" />
          </BlogImage>
          <BlogContent>
            <BlogCardTitle>
              How can typography be used effectively in branding and social media graphics?
            </BlogCardTitle>
            <BlogButtonContainer>
              <Link to='/Blogs' style={{ textDecoration: 'none' }}>
                <BlogButton>Read Full Blog</BlogButton>
              </Link>
            </BlogButtonContainer>
          </BlogContent>
        </BlogCard>

        <BlogCard data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
          <BlogImage>
            <img src={imager} alt="blog-3" />
          </BlogImage>
          <BlogContent>
            <BlogCardTitle>
              How can typography be used effectively in branding and social media graphics?
            </BlogCardTitle>
            <BlogButtonContainer>
              <Link to='/Blogs' style={{ textDecoration: 'none' }}>
                <BlogButton>Read Full Blog</BlogButton>
              </Link>
            </BlogButtonContainer>
          </BlogContent>
        </BlogCard>
      </BlogsGrid>

      <ButtonContainer data-aos="fade-up" data-aos-delay="300">
        <Link to='/Blogs' style={{ textDecoration: 'none' }}>
          <BlackButton>
            Read All Blogs
          </BlackButton>
        </Link>
      </ButtonContainer>
    </BlogsContainer>
  );
}

export default BlogsSection;