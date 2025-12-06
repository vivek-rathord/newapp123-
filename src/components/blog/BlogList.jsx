import React from 'react';
import BlogCard from './BlogCard';
import './BlogList.css';

function BlogList({ blogs, onBlogClick }) {
    if (!blogs || blogs.length === 0) {
        return <p className="no-blogs">No blogs found</p>;
    }

    return (
        <div className="blogcards container">
            {blogs.map((blog, index) => (
                <BlogCard
                    key={blog.id}
                    blog={blog}
                    onCardClick={onBlogClick}
                />
            ))}
        </div>
    );
}

export default BlogList;
