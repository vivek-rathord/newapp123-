import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogAPI } from '../../services/api';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError('');
      console.log(`🔄 Fetching blog with ID: ${id}`);
      
      const response = await blogAPI.getBlog(id);
      console.log('  Blog details received:', response.data);
      
      setBlog(response.data);
    } catch (error) {
      console.error('❌ Error fetching blog:', error);
      
      let errorMessage = 'Failed to load blog. ';
      if (error.code === 'NETWORK_ERROR' || error.message.includes('Network Error')) {
        errorMessage += 'Please check if the Laravel server is running on http://localhost:8000';
      } else if (error.response?.status === 404) {
        errorMessage += 'Blog not found.';
      } else {
        errorMessage += 'Please try again later.';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleRetry = () => {
    fetchBlog();
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '50vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #f3f4f6',
          borderTop: '4px solid #fb6d55',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p>Loading blog details...</p>
        
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '4rem 2rem',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>Error</h3>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>{error}</p>
        <button
          onClick={handleRetry}
          style={{
            background: ' #fb6d55',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Try Again
        </button>
        <button
          onClick={handleGoBack}
          style={{
            background: 'transparent',
            color: '#6b7280',
            border: '1px solid #d1d5db',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginLeft: '1rem'
          }}
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!blog) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h3>Blog not found</h3>
        <button
          onClick={handleGoBack}
          style={{
            background: '#fb6d55',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '2rem',
      background: '#ffffff',
      minHeight: '100vh'
    }}>
      {/* Back Button */}
      <button
        onClick={handleGoBack}
        style={{
          background: 'transparent',
          border: '1px solid #d1d5db',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          cursor: 'pointer',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        ← Back
      </button>

       <div style={{ marginBottom: '2rem' }}>
        <span style={{
          background: ' #fb6d55',
          color: 'white',
          padding: '0.4rem 1rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: '600',
          display: 'inline-block',
          marginBottom: '1rem'
        }}>
          {/* {blog.category || ' '} */}
        </span>
        
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '800', 
          color: '#1f2937',
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          {blog.title}
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#6b7280',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          {blog.description}
        </p>
      </div>

      {/* Blog Image */}
      {blog.image && (
        <div style={{ 
          marginBottom: '2rem',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          <img 
            src={blog.image} 
            alt={blog.title}
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover'
            }}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop';
            }}
          />
        </div>
      )}

      <div style={{ 
        fontSize: '1.1rem', 
        lineHeight: '1.8',
        color: '#374151'
      }}>
        {blog.content ? (
          <div style={{ whiteSpace: 'pre-line' }}>
            {blog.content}
          </div>
        ) : (
          <div>
            <p>{blog.description}</p>
            <p style={{ marginTop: '1rem' }}>
              This blog post contains valuable information and insights about the topic. 
              The content is designed to help readers understand complex concepts in a simple way.
            </p>
            <p style={{ marginTop: '1rem' }}>
              We hope you find this information useful for your learning and development journey.
            </p>
          </div>
        )}
      </div>

      {/* Blog Meta Information */}
      <div style={{ 
        marginTop: '3rem',
        paddingTop: '2rem',
        borderTop: '1px solid #e5e7eb',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: '1.2rem'
          }}>
            {blog.author ? blog.author.charAt(0).toUpperCase() : 'U'}
          </div>
          <div>
            <p style={{ fontWeight: '600', color: '#1f2937', margin: 0 }}>
              {blog.author || 'Unknown Author'}
            </p>
            <p style={{ color: '#6b7280', margin: 0, fontSize: '0.9rem' }}>
              Published on {new Date(blog.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2rem', color: '#6b7280' }}>
          <span>5 min read</span>
          <span>{blog.category || 'Technology'}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;