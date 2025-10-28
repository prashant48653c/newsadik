"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { TestimonialModal } from "@/components/dashboard/testimonial-modal";
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { addTestimonial, editTestimonial, getTestimonial } from "@/service/testimonial.service";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    content: "",
    logo: null,
  });

  // Mock service functions (replace with real ones if needed)
 
 
  const handleSave = async (testimonialData) => {
    setIsModalOpen(false);

    if (editingTestimonial) {
      try {
        setLoading(true);
        const responce = await editTestimonial(
          testimonialData,
          Number(editingTestimonial?.id)
        );
        if (responce) {
          toast.success("testimonial updated successfully");
          await fetchTestimonial();
        } else {
          toast.error("you must upload image ");
          setLoading(false);
        }
      } catch (error) {
        toast.error("failed to update testimonial");
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        const responce = await addTestimonial(testimonialData);
        if (responce) {
          console.log(responce)
          toast.success("testimonial created successfully");
          await fetchTestimonial();
        } else {
          toast.error("you must upload image ");
          setLoading(false);
        }
      } catch (error) {
        toast.error("failed to create testimonial, you must upload all fields");
        setLoading(false);
      }
    }
    setIsModalOpen(false);
    setEditingTestimonial(null);
  };
  

  

  // Fetch testimonials
  async function fetchTestimonial() {
    try {
      const response = await getTestimonial();
      if (response) {
        setTestimonials(response);
      }
    } catch (error) {
      toast.error("No testimonials found");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTestimonial();
  }, []);

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData({
      title: testimonial.title,
      subtitle: testimonial.subtitle,
      content: testimonial.content || "",
      logo: null,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?"))
      return;

    try {
      setLoading(true);
      const response = await deleteTestimonial(id);
      if (response) {
        toast.success("Testimonial deleted successfully");
        await fetchTestimonial();
      }
    } catch (error) {
      toast.error("Failed to delete testimonial");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <>
      {/* Bootstrap CSS CDN (Add in <head> or layout) */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* Font Awesome for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <div className="container-fluid relative py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h3 fw-bold">Testimonials Management</h1>
            <p className="text-muted">Manage customer testimonials</p>
          </div>
          <button
            className="btn btn-primary d-flex align-items-center gap-2"
            onClick={() => {
              setEditingTestimonial(null);
              setFormData({ title: "", subtitle: "", content: "", logo: null });
              setIsModalOpen(true);
            }}
          >
            <i className="fas fa-plus"></i> Add Testimonial
          </button>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-header bg-white border-0 pb-2">
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="d-flex align-items-center gap-3">
                        <Image
                          src={testimonial.logo || "/placeholder.svg"}
                          alt="Company logo"
                          width={40}
                          height={40}
                          className="rounded-circle"
                        />
                        <div>
                          <h5 className="card-title mb-0 h6">
                            {testimonial.title}
                          </h5>
                          <p className="text-muted small mb-0">
                            {testimonial.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleEdit(testimonial)}
                          title="Edit"
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(testimonial.id)}
                          title="Delete"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {testimonial.content && (
                    <div className="card-body pt-2">
                      <p className="text-muted small">{testimonial.content}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {isModalOpen && (
          <TestimonialModal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setEditingTestimonial(null);
            }}
            onSave={handleSave}
            testimonial={editingTestimonial}
          />
        )}
      </div>

      {/* Bootstrap Modal */}
      {/* <div
        className={`modal fade ${isModalOpen ? "show d-block" : ""}`}
        style={{ display: isModalOpen ? "block" : "none", backgroundColor: "rgba(0,0,0,0.5)" }}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form onSubmit={handleSave}>
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingTestimonial ? "Edit" : "Add"} Testimonial
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingTestimonial(null);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Subtitle</label>
                  <input
                    type="text"
                    name="subtitle"
                    className="form-control"
                    value={formData.subtitle}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Content (Optional)</label>
                  <textarea
                    name="content"
                    className="form-control"
                    rows="3"
                    value={formData.content}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Logo</label>
                  <input
                    type="file"
                    name="logo"
                    className="form-control"
                    accept="image/*"
                    onChange={handleInputChange}
                    required={!editingTestimonial}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingTestimonial(null);
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Saving...
                    </>
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
}
