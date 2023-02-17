import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import BlogGallery from "./BlogGallery";
import {BlogEntry} from "./BlogEntry";
import AddBlogEntry from "./AddBlogEntry";

function App() {

  const [blogs, setBlogs] =  useState<BlogEntry[]>([{id: '123', title: 'test-titel', author: 'test-author', content: 'test-content'},{id: '123', title: 'test-titel', author: 'test-author', content: 'test-content'}])

  function addBlog(newBlog: BlogEntry) {
    setBlogs(prevState => [...prevState, newBlog])
  }

  return <div>
    <Header />
    <BlogGallery blogEntries={blogs} />
    <AddBlogEntry onAddBlog={addBlog}/>
  </div>
}

export default App;
