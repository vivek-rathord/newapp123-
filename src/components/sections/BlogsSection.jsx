 import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Card, CardContent, Grid, styled, CircularProgress } from "@mui/material";
import { blogAPI } from "../../services/api";

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
  gap: '50px',
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
  width: '390px',
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
  '&:nth-of-type(2)': {
    width: '390px',
    height:'430px',
  },
  '&:nth-child(1), &:nth-child(3)': {
    marginTop: '90px',
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

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '400px',
  width: '100%',
}));

function BlogsSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await blogAPI.getAllBlogs();
      const blogData = response.data.data || response.data || [];
      setBlogs(blogData.slice(0, 3)); // Get first 3 blogs
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (blog) => {
    if (blog.image) {
      return blog.image;
    }
    return 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop';
  };

  const handleBlogClick = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };

  const handleReadAllBlogs = () => {
    navigate('/blogs');
  };

  if (loading) {
    return (
      <BlogsContainer>
        <LoadingContainer>
          <CircularProgress sx={{ color: themeColors.orangeColor }} />
        </LoadingContainer>
      </BlogsContainer>
    );
  }

  return (
    <BlogsContainer>
      <HeadingContainer data-aos="fade-up">
        <OrangeSpan data-aos="zoom-in">Blogs</OrangeSpan>
        <BlogsTitle variant="h2" data-aos="fade-up" data-aos-delay="200">
          Stories That Fuel The Build
        </BlogsTitle>
      </HeadingContainer>

      <BlogsGrid>
        {blogs.map((blog, index) => (
          <BlogCard 
            key={blog.id}
            data-aos="fade-up" 
            data-aos-duration="2000" 
            data-aos-delay={100 + index * 50}
            onClick={() => handleBlogClick(blog.id)}
          >
            <BlogImage>
              <img src={getImageUrl(blog)} alt={blog.title} />
            </BlogImage>
            <BlogContent>
              <BlogCardTitle>
                {blog.title}
              </BlogCardTitle>
              <BlogButtonContainer>
                <BlogButton>Read Full Blog</BlogButton>
              </BlogButtonContainer>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogsGrid>

      <ButtonContainer data-aos="fade-up" data-aos-delay="300">
        <BlackButton onClick={handleReadAllBlogs}>
          Read All Blogs
        </BlackButton>
      </ButtonContainer>
    </BlogsContainer>
  );
}

export default BlogsSection;