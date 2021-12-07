import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { getBlogs } from './services/blogs.js';
import BlogCard from './components/BlogCard/BlogCard.js';

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const blogData = await getBlogs();
      setBlogs(blogData);
    };
    fetchData();
  }, []);
  return (
    <section className="main">
      <Header />
      {blogs.map((blog) => (
        <BlogCard {...blog} key={blog.id} />
      ))}
      <Footer />
    </section>
  );
}

export default App;
