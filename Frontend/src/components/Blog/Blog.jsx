import React from "react";
import './Blog.css';
import blogData from './blogs.json';
import BlogFooter from './BlogFooter'

const Blog = () => {
  return (
    <div style={{ background: '#f5f5f5' }}>
      <div id="container">
        <h2 id='heading'>UPTODD PARENTING BLOGS</h2>
        <div id='line'></div>
        <div id="blogs-container">
          {blogData.map((blog) => (
            <div className="blog">
              <a id="blog-img" href="#"><img src={blog.img} /></a>
              <div className="blog-content">
                <a href="#">{blog.title}</a>
                <p>{blog.text}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};

export default Blog;
