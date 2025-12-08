 import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blog, onCardClick, onAuthorClick, onCategoryClick }) => {
  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(blog.id);
    }
  };

  const handleAuthorClick = (e) => {
    e.stopPropagation();
    if (onAuthorClick) {
      onAuthorClick(blog.author, e);
    }
  };

  const getImageUrl = () => {
    if (blog.image) {
      return blog.image;
    }
    return 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop';
  };

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop';
  };

  const calculateReadTime = (content) => {
    if (!content) return blog.read_time || 5;
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Recently';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="blog-card" onClick={handleCardClick} role="article" tabIndex="0">
      <div className="card-image">
        <img 
          src={getImageUrl()} 
          alt={blog.title || 'Blog post thumbnail'}
          className="blog-image"
          onError={handleImageError}
          loading="lazy"
        />
        <div className="image-overlay"></div>
      </div>
      
      <div className="card-content">
        <div className="card-category">
          {blog.category && (
            <span 
              className="category-tag"
              onClick={onCategoryClick}
            >
              {blog.category}
            </span>
          )}
        </div>
        
        <h3 className="card-title">{blog.title || 'Untitled Blog'}</h3>
        
        <p className="card-description">
          {blog.description && blog.description.length > 120 
            ? `${blog.description.substring(0, 120)}...` 
            : blog.description || 'No description available'
          }
        </p>
        
        <div className="card-footer">
          <div 
            className="author-info"
            onClick={handleAuthorClick}
            role="button"
            tabIndex="0"
          >
            <div className="author-avatar">
              {blog.author ? blog.author.charAt(0).toUpperCase() : 'U'}
            </div>
            <span className="author-name">{blog.author || 'Unknown Author'}</span>
          </div>
          
          <div className="card-meta">
            <span className="read-time">
              {calculateReadTime(blog.content)} min read
            </span>
            <span className="publish-date">
              {formatDate(blog.created_at)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;