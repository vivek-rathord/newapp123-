import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Article,
  People,
  Visibility,
} from '@mui/icons-material';
import BlogCard from './blog/BlogCard';
import { blogAPI } from '../services/api';

const BlogListing = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await blogAPI.getAllBlogs();
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, background: '#ffffff' }}>
      {/* Navigation Bar */}
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: 'white',
          color: 'text.primary',
          boxShadow: 'none',
          borderBottom: '1px solid',
          borderColor: 'grey.200',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              NetCoders
            </Typography>

            {isMobile ? (
              <IconButton>
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 4 }}>
                <Button color="inherit" sx={{ fontWeight: 600 }}>Home</Button>
                <Button 
                  color="primary" 
                  variant="contained"
                  sx={{ 
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  }}
                >
                  Blog
                </Button>
                <Button color="inherit" sx={{ fontWeight: 600 }}>Courses</Button>
                <Button color="inherit" sx={{ fontWeight: 600 }}>About</Button>
                <Button color="inherit" sx={{ fontWeight: 600 }}>Contact</Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                color: '#1f2937',
              }}
            >
              Welcome to Our
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  display: 'block',
                }}
              >
                Blog
              </Box>
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: '#6b7280',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              Discover the latest insights, tutorials, and trends in technology and programming. 
              Join our community of developers and tech enthusiasts.
            </Typography>

            {/* Stats */}
            <Grid container spacing={3} sx={{ justifyContent: 'center', mt: 4 }}>
              <Grid item xs={6} md={4}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Article sx={{ fontSize: 40, mb: 1, color: '#f97316' }} />
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#1f2937' }}>
                    100+
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    Articles
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={6} md={4}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <People sx={{ fontSize: 40, mb: 1, color: '#f97316' }} />
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#1f2937' }}>
                    50+
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    Authors
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={6} md={4}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Visibility sx={{ fontSize: 40, mb: 1, color: '#f97316' }} />
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#1f2937' }}>
                    10K+
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    Readers
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Blog Posts */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Latest Blog Posts
        </Typography>

        {loading ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              Loading blogs...
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {blogs.map((blog) => (
              <Grid item xs={12} md={6} lg={4} key={blog.id}>
                <BlogCard blog={blog} />
              </Grid>
            ))}
          </Grid>
        )}

        {blogs.length === 0 && !loading && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No blog posts available yet.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default BlogListing;