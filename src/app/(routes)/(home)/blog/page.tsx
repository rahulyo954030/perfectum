import BlogHero from '@/_components/blog'
import BlogPost from '@/_components/blog/blogContent'
import NewsLetter from '@/_components/common/newsletter'
import React from 'react'

const Blog = () => {
  return (
    <div className='bg-secondary1'>
    <BlogHero/>
    <BlogPost/>
    <NewsLetter/>
    </div>
  )
}

export default Blog