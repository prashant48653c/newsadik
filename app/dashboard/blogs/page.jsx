"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { BlogModal } from "@/components/dashboard/blog-modal"
import {addBlog, deleteBlog, editBlog, getBlog} from "@/service/blog.service"
import toast from "react-hot-toast"
// import { Spinner } from "@/components/ui/spinner"

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingBlog, setEditingBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [deleteModalBlog, setDeleteModalBlog] = useState(null)

  async function fetchBlogs(){
    try {
      const responce = await getBlog();
      if(responce){
        setLoading(false);
        setBlogs(responce)
      }
    } catch (error) {
      setLoading(false)
      toast.error("no blogs founds")
    }
  }

  useEffect(()=>{
   fetchBlogs()
  },[])

  const handleEdit = (blog) => {
    setEditingBlog(blog)
    setIsModalOpen(true)
  }

  const handleDelete = async(id) => {
    try {
      setLoading(true);
      const responce = await deleteBlog(id);
      if(responce){
        await fetchBlogs()
        toast.success("blog deleted successfully")
        setLoading(false)
        // Close the modal
        const modalElement = document.getElementById('deleteBlogModal');
        const modal = window.bootstrap.Modal.getInstance(modalElement);
        if (modal) modal.hide();
      }
    } catch (error) {
      setLoading(false);
      toast.error("failed to delete blog")
    }
  }

  const handleSave = async(blogData) => {
    setIsModalOpen(false)
    setLoading(true);
    if (editingBlog) {
      try {
        const responce = await editBlog(blogData, Number(editingBlog.id))
        if(responce){
          await fetchBlogs()
         setLoading(false);
         toast.success("blog updated successfully");
        }else{
      toast.error("you must upload image ")
      setLoading(false)
     }
      } catch (error) {
        toast.error("failed to update blogs");
        setLoading(false)
      }
    } else {
      try {
        const responce = await addBlog(blogData)
        if(responce){
          await fetchBlogs()
         setLoading(false);
         toast.success("blog created successfully");
        }else{
      toast.error("you must upload image ")
      setLoading(false)
     }
      } catch (error) {
        toast.error("failed to update blogs, you must upload all fields");
        setLoading(false)
      }
    }
    setIsModalOpen(false)
    setEditingBlog(null)
  }

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 fw-bold mb-2">Blog Management</h1>
          <p className="text-muted">Manage your blog posts</p>
        </div>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2" style={{display: 'inline-block', verticalAlign: 'middle'}}>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add Blog Post
        </button>
      </div>

      <div className="row g-4">
        {loading ? (
          <div className="col-12 text-center py-5">
            {/* <Spinner /> */} Loading...
          </div>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm h-100">
                <div className="position-relative">
                  <Image
                    src={blog.thumbnailImg || "/placeholder.svg"}
                    alt={blog.title}
                    width={300}
                    height={200}
                    className="card-img-top"
                    style={{height: '192px', objectFit: 'cover'}}
                  />
                  <div className="position-absolute top-0 end-0 m-2 d-flex gap-1">
                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleEdit(blog)}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button 
                      className="btn btn-danger btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteBlogModal"
                      onClick={() => setDeleteModalBlog(blog)}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-truncate-2">{blog.title}</h5>
                  <div className="d-flex align-items-center text-muted small mb-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </div>
                  <p className="card-text text-muted small text-truncate-3">{blog.content}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <div className="modal fade" id="deleteBlogModal" tabIndex="-1" aria-labelledby="deleteBlogModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteBlogModalLabel">Are you absolutely sure?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              You want to delete this blog post!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button 
                type="button" 
                className="btn btn-danger" 
                onClick={() => deleteModalBlog && handleDelete(Number(deleteModalBlog.id))}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <BlogModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingBlog(null)
        }}
        onSave={handleSave}
        blog={editingBlog}
      />

      <style jsx>{`
        .text-truncate-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .text-truncate-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}