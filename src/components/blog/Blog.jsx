import React from 'react'
import "./blog.css"
import BlogCard from './BlogCard'
import Bac from '../common/bac/Bac'
const Blog = () => {
  return (
    <>
    <Bac title = 'Blog Posts'/>
    <section className="blog padding">
        <div className="container grid2">
            <BlogCard/>
        </div>
    </section>
    </>
  )
}

export default Blog