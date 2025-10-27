'use client'

import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import { getBlog } from '@/service/blog.service'
import toast from 'react-hot-toast'

export default function Blog_Grid() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await getBlog()
        if (response) setBlogs(response)
      } catch (error) {
        toast.error("No blogs available at the moment!")
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  // Skeleton Loader Component
  const BlogCardSkeleton = () => (
    <div className="col-lg-6 col-md-6 col-sm-12 news-block">
      <div className="news-block-two">
        <div className="inner-box shadow-lg">
          <div className="image-box">
            <figure className="image m-0">
              <div className="w-full h-64 bg-gray-300 animate-pulse"></div>
            </figure>
          </div>
          <div className="lower-content">
            <div className="h-6 bg-gray-300 rounded w-20 mb-3 animate-pulse"></div>
            <div className="h-8 bg-gray-300 rounded w-full mb-3 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Blog Grid">
        <section className="sidebar-page-container p_relative pt_110 pb_120">
          <div className="auto-container">
            <div className="row clearfix">

              {/* Sidebar */}
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="blog-sidebar mr_40 mb_30">
                  

               

                  <div className="sidebar-widget post-widget mb_60">
                    <div className="widget-title mb_20">
                      <h3>Latest Posts</h3>
                    </div>
                    <div className="post-inner">
                      {loading ? (
                        <>
                          {[1, 2, 3].map((i) => (
                            <div className="post" key={i}>
                              <figure className="post-thumb">
                                <div className="w-full h-20 bg-gray-300 animate-pulse rounded"></div>
                              </figure>
                              <div className="w-full">
                                <div className="h-4 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                                <div className="h-3 bg-gray-300 rounded w-2/3 animate-pulse"></div>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        blogs.slice(0, 3).map((post) => (
                          <div className="post" key={post.id}>
                            <figure className="post-thumb">
                              <Link href={`/blog/${post.id}`}>
                                <img src={post.thumbnailImg || "/placeholder.svg"} alt={post.title} />
                              </Link>
                            </figure>
                            <h6>
                              <Link href={`/blog/${post.id}`}>{post.title}</Link>
                            </h6>
                            <span className="post-date">{new Date(post.createdAt).toLocaleDateString()}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                 
                </div>

            
              </div>

              {/* Blog Grid */}
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="blog-grid-content">
                  <div className="row clearfix">
                    {loading ? (
                      <>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <BlogCardSkeleton key={i} />
                        ))}
                      </>
                    ) : (
                      blogs.map((post) => (
                        <div  className="col-lg-6 col-md-6 col-sm-12 news-block" key={post.id}>
                          <div  className="news-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box shadow-lg">
                              <div className="image-box">
                                <figure className="image m-0">
                                  <Link href={`/blog/${post.id}`}>
                                    <img 
                                      src={post.thumbnailImg || "/placeholder.svg"} 
                                      alt={post.title}
                                      style={{height:"300px"}}
                                      className="w-full 
                                       h-64 object-contain"
                                    />
                                  </Link>
                                </figure>
                              </div>
                              <div className="lower-content">
                                <span className="category">Blog</span>
                                <h3>
                                <Link href={`/blog/${post.id}`}>
    {post.title.length > 55 ? post.title.slice(0, 55) + "..." : post.title}
  </Link>
                                </h3>
                                <ul className="post-info">
                                  <li>By <Link href="#">{post.author || "Admin"}</Link></li>
                                  <li><span>{new Date(post.createdAt).toLocaleDateString()}</span></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
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