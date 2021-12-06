import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { client, checkError } from './services/client.js';
import { getBlogs } from './services/blogs.js';
import BlogCard from './components/BlogCard/BlogCard.js';

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
      setBlogs(data);
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
