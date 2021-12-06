import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { client, checkError } from './services/client.js';
import { getBlogs } from './services/blogs.js';

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <section className="main">
      <Header />
      <Footer />
    </section>
  );
}

export default App;
