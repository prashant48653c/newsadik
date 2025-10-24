'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import { getBlog } from "@/service/blog.service"
import toast from "react-hot-toast"

export default function News() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await getBlog()
        if (response && Array.isArray(response)) {
          setBlogs(response)
        } else {
          toast("No blogs available at the moment!")
        }
      } catch (error) {
        toast("Failed to load blogs")
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <section className="news-section pb_90">
      <div className="auto-container">
        <div className="sec-title centred pb_60 sec-title-animation animation-style2">
          <span className="sub-title mb_10 title-animation">Media</span>
          <h2 className="title-animation">Latest Blogs</h2>
        </div>

        <div className="row clearfix">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 news-block">
                  <div className="news-block-one wow fadeInUp animated" data-wow-delay={`${index * 300}ms`} data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="bg-layer bg-gray-200 animate-pulse h-64 w-full rounded-lg"></div>
                      <div className="overlay-bg-layer bg-gray-300 animate-pulse h-64 w-full rounded-lg mt-[-256px]"></div>
                      <div className="content-box mt-4">
                        <span className="post-date bg-gray-200 animate-pulse h-5 w-20 inline-block mb-2 rounded"></span>
                        <h4 className="bg-gray-200 animate-pulse h-6 w-full rounded"></h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : blogs.slice(0, 3).map((blog, index) => (
                <div key={blog.id} className="col-lg-4 col-md-6 col-sm-12 news-block">
                  <div className="news-block-one wow fadeInUp animated" data-wow-delay={`${index * 300}ms`} data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div
                        className="bg-layer"
                        style={{ backgroundImage: `url(${blog.thumbnailImg || '/placeholder.svg'})` }}
                      ></div>
                      <div
                        className="overlay-bg-layer"
                        style={{ backgroundImage: `url(${blog.thumbnailImg || '/placeholder.svg'})` }}
                      ></div>
                      <div className="content-box">
                        <span className="post-date">
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                        <h4>
                          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}
