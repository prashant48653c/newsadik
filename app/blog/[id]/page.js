'use client'
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import { getBlogById, getBlog } from "@/service/blog.service"
import { useParams } from 'next/navigation'
import toast from 'react-hot-toast'

export default function Blog_Details() {
  const params = useParams()
  const [blog, setBlog] = useState(null)
  const [otherBlogs, setOtherBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogAndOthers() {
      try {
        const id = Number(params.id)
        const [currentBlog, allBlogs] = await Promise.all([
          getBlogById(id),
          getBlog()
        ])

        if (currentBlog) setBlog(currentBlog)

        // Filter out current blog for sidebar
        const filtered = allBlogs.filter(b => b.id !== id)
        setOtherBlogs(filtered.slice(0, 3)) // Show only 3 latest posts
      } catch (error) {
        toast.error("Something went wrong while fetching blog data")
      } finally {
        setLoading(false)
      }
    }
    fetchBlogAndOthers()
  }, [params.id])

  if (loading) {
    return (
      <div className='w-full flex justify-center items-center min-h-screen'>
        Loading...
      </div>
    )
  }

  if (!blog) {
    return (
      <div className='w-full flex justify-center items-center min-h-screen'>
        <h2 className='text-red-600'>Blog not found</h2>
      </div>
    )
  }

  return (
    <div className="boxed_wrapper  ">
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle={blog.title}>
        <section   className="sidebar-page-container p_relative pt_110 pb_120">
          <div className="auto-container">
            <div className="row clearfix">
              
              {/* Sidebar */}
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="blog-sidebar mr_40 mb_30">
                

                  {/* Latest Posts */}
                  <div className="sidebar-widget post-widget mb_60">
                    <div className="widget-title mb_20">
                      <h3>Latest Posts</h3>
                    </div>
                    <div className="post-inner  ">
                      {otherBlogs.map(post => (
                        <div style={{marginBottom:"1rem"}} className="post " key={post.id}>
                          <figure className="post-thumb">
                            <Link href={`/blog/${post.id}`}>
                              <img src={post.thumbnailImg || "/placeholder.svg"} alt={post.title} />
                            </Link>
                          </figure>
                          <h6>
                            <Link href={`/blog/${post.id}`}>
                              {post.title.length > 50 ? post.title.slice(0, 50) + "..." : post.title}
                            </Link>
                          </h6>
                          <span className="post-date">{new Date(post.createdAt).toLocaleDateString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="blog-details-content">
                  <div className="news-block-two">
                    <div className="inner-box">
                      {blog.thumbnailImg && (
                        <div className="image-box">
                          <figure className="image">
                            <img src={blog.thumbnailImg} alt={blog.title} />
                          </figure>
                        </div>
                      )}
                      <div className="lower-content">
                        <span className="category">Blog</span>
                        <h3>{blog.title}</h3>
                        <ul className="post-info">
                          <li>By <Link href="#">{blog.author || "Admin"}</Link></li>
                          <li><span>{new Date(blog.createdAt).toLocaleDateString()}</span></li>
                        </ul>
                      </div>
                      <div className="text-box pt_25 mb_50">
                        <p>{blog.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <Subscribe />
      </Layout>
    </div>
  )
}
