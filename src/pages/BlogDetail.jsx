import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
import { blogAPI } from "../services/api";
import './BlogDetail.css';

function BlogDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        Aos.init({ duration: 800, once: true });
    }, []);

    useEffect(() => {
        fetchBlog();
    }, [id]);

    const fetchBlog = async () => {
        try {
            setLoading(true);
            const response = await blogAPI.getBlog(id);
            setBlog(response.data.data || response.data);
            setError(null);
        } catch (err) {
            console.error('Error fetching blog:', err);
            setError('Failed to load blog');
            setBlog(null);
        } finally {
            setLoading(false);
        }
    };

    const getImageUrl = () => {
        if (blog?.image) {
            return blog.image;
        }
        return 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop';
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Recently';
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const calculateReadTime = (content) => {
        if (!content) return 5;
        const wordsPerMinute = 200;
        const words = content.split(/\s+/).length;
        return Math.ceil(words / wordsPerMinute);
    };

    if (loading) {
        return (
            <div className="blog-detail-page">
                <div className="loading">Loading blog...</div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="blog-detail-page">
                <div className="error-container">
                    <h2>Oops! Blog not found</h2>
                    <p>{error || 'This blog could not be loaded.'}</p>
                    <button className="back-button" onClick={() => navigate('/blogs')}>
                        ← Back to Blogs
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-detail-page">
            {/* Back Button */}
            <button className="back-button" onClick={() => navigate('/blogs')} data-aos="fade-right">
                ← Back to Blogs
            </button>

            {/* Hero Image */}
            <div className="blog-hero" data-aos="fade-up">
                <img 
                    src={getImageUrl()} 
                    alt={blog.title}
                    className="blog-hero-image"
                />
                <div className="hero-overlay"></div>
            </div>

            {/* Content Container */}
            <div className="blog-detail-container" data-aos="fade-up" data-aos-delay="100">
                {/* Header Section */}
                <div className="blog-header">
                    <h1 className="blog-title">{blog.title}</h1>
                    
                    <div className="blog-meta">
                        <div className="author-info">
                            <div className="author-avatar">
                                {blog.author ? blog.author.charAt(0).toUpperCase() : 'A'}
                            </div>
                            <div className="author-details">
                                <span className="author-name">{blog.author || 'Anonymous'}</span>
                                <span className="publish-date">{formatDate(blog.created_at)}</span>
                            </div>
                        </div>
                        <div className="read-info">
                            <span className="read-time">
                                {calculateReadTime(blog.content)} min read
                            </span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                {blog.description && (
                    <div className="blog-excerpt" data-aos="fade-up" data-aos-delay="150">
                        <p>{blog.description}</p>
                    </div>
                )}

                {/* Main Content */}
                <div className="blog-content" data-aos="fade-up" data-aos-delay="200">
                    <div className="content-text">
                        {blog.content ? (
                            <p>{blog.content}</p>
                        ) : (
                            <p>No additional content available for this blog.</p>
                        )}
                    </div>
                </div>

                {/* Blog Stats */}
                <div className="blog-stats" data-aos="fade-up" data-aos-delay="250">
                    <div className="stat-item">
                        <span className="stat-label">Published:</span>
                        <span className="stat-value">{formatDate(blog.created_at)}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Read Time:</span>
                        <span className="stat-value">{calculateReadTime(blog.content)} minutes</span>
                    </div>
                    {blog.category && (
                        <div className="stat-item">
                            <span className="stat-label">Category:</span>
                            <span className="stat-value">{blog.category}</span>
                        </div>
                    )}
                </div>

                {/* Back to Blogs Button */}
                <div className="back-button-container" data-aos="fade-up" data-aos-delay="300">
                    <button className="primary-button" onClick={() => navigate('/blogs')}>
                        Read More Blogs
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
