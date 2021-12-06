import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
// import BlogCard from './components/BlogCard/BlogCard';

import { getBlogs } from './services/blogs';
import BlogCard from './components/BlogCard/BlogCard';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getBlogs();
      setBlogs(resp);
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
