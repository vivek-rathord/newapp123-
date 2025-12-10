import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
 import { blogAPI } from "../services/api";
import './Blogs.css';
import BlogList from "../components/blog/BlogList";

 
function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({ duration: 800, once: true });
    }, []);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const response = await blogAPI.getAllBlogs();
            setBlogs(response.data.data || response.data);
            setError(null);
        } catch (err) {
            console.error('Error fetching blogs:', err);
            setError('Failed to load blogs');
            setBlogs([]);
        } finally {
            setLoading(false);
        }
    };

    const handleBlogClick = (blogId) => {
        navigate(`/blogs/${blogId}`);
    };

    return (
        <div className='blog-page container' >
            <div className="Headingtxt container" data-aos="fade-up" data-aos-delay="150">
                <span>Blogs</span>
                <h2>Thinks We Think, learn & share</h2>
                <p>Whether you're looking to kickstart your learning journey or need tailored IT solutions for your business, we're just a message away. Reach out with your queries, ideas, or collaboration requests. We'll get back to you as soon as possible.</p>
            </div>
            
            {loading && <div className="loading">Loading blogs...</div>}
            {error && <div className="error-message">{error}</div>}
            
            {!loading && blogs.length > 0 && (
                <BlogList blogs={blogs} onBlogClick={handleBlogClick} data-aos="fade-up" data-aos-delay="200" />
            )}

            {!loading && blogs.length === 0 && !error && (
                <div className="no-blogs">
                    <p>No blogs available at the moment.</p>
                </div>
            )}
        </div>
    )
}

export default Blogs
