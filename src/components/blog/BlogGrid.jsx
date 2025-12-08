 import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';

const BlogGrid = ({ blogs, loading }) => {
  const navigate = useNavigate();

  const handleCardClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  const handleAuthorClick = (authorName, e) => {
    e.stopPropagation();
    console.log('Author clicked:', authorName);
   };

  const handleCategoryClick = (category, e) => {
    e.stopPropagation();
    console.log('Category clicked:', category);
   };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading blogs...</p>
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="no-blogs">
        <h3>No blogs found</h3>
       </div>
    );
  }

  return (
    <div className="blog-grid-container">
      <div className="blog-grid-header">
 
      </div>
      
      <div className="blog-grid">
        {blogs.map(blog => (
          <BlogCard 
            key={blog.id}
            blog={blog}
            onCardClick={handleCardClick}
            onAuthorClick={handleAuthorClick}
            onCategoryClick={handleCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;