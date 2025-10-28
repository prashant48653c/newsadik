"use client";

import { useState, useEffect } from "react";

export function TestimonialModal({ isOpen, onClose, onSave, testimonial }) {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    content: "",
  });
  const [file, setFile] = useState(null);

  // Initialize form
  useEffect(() => {
    if (testimonial) {
      setFormData({
        title: testimonial.title || "",
        subtitle: testimonial.subtitle || "",
        content: testimonial.content || "",
      });
    } else {
      setFormData({
        title: "",
        subtitle: "",
        content: "",
      });
    }
    setFile(null);
  }, [testimonial, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.subtitle.trim() || !formData.content.trim()) {
      alert("Title, Subtitle, and Content are required");
      return;
    }

    const formdata = new FormData();
    formdata.append("title", formData.title);
    formdata.append("subtitle", formData.subtitle);
    formdata.append("content", formData.content);
    if (file) {
      formdata.append("image", file);
    }
console.log("Something")
    onSave(formdata);
    onClose();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      {/* Bootstrap & Font Awesome CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      {/* Modal */}
      <div
        className={`modal fade ${isOpen ? "show d-block" : ""}`}
        style={{ display: isOpen ? "block" : "none", backgroundColor: "rgba(0,0,0,0.5)" }}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header border-0 pb-2">
                <h5 className="modal-title fw-bold">
                  {testimonial ? "Edit Testimonial" : "Add New Testimonial"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                ></button>
              </div>

              <div className="modal-body pt-0">
                {/* Title */}
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    <i className="fas fa-heading me-2 text-primary"></i>
                    Title <span className="text-danger">*</span>
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="form-control"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="Enter testimonial title"
                    required
                  />
                </div>

                {/* Subtitle */}
                <div className="mb-3">
                  <label htmlFor="subtitle" className="form-label">
                    <i className="fas fa-user-tie me-2 text-primary"></i>
                    Subtitle <span className="text-danger">*</span>
                  </label>
                  <input
                    id="subtitle"
                    type="text"
                    className="form-control"
                    value={formData.subtitle}
                    onChange={(e) =>
                      setFormData({ ...formData, subtitle: e.target.value })
                    }
                    placeholder="e.g., CEO at Company"
                    required
                  />
                </div>

                {/* Logo Upload */}
                <div className="mb-3">
                  <label htmlFor="profileImg" className="form-label">
                    <i className="fas fa-image me-2 text-primary"></i>
                    Logo Image
                  </label>

                  {/* Current Logo (Edit Mode) */}
                  {!file && testimonial?.logo && (
                    <div className="mb-2 p-2 bg-light rounded d-flex align-items-center gap-2">
                      <span className="text-muted small">Current:</span>
                      <img
                        src={testimonial.logo}
                        alt="Current logo"
                        className="rounded"
                        style={{ width: "64px", height: "64px", objectFit: "contain" }}
                      />
                    </div>
                  )}

                  {/* New File Preview */}
                  {file && (
                    <div className="mb-2 p-2 bg-light rounded d-flex align-items-center gap-2">
                      <i className="fas fa-check text-success"></i>
                      <span className="text-truncate" style={{ maxWidth: "180px" }}>
                        {file.name}
                      </span>
                    </div>
                  )}

                  <input
                    id="profileImg"
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                </div>

                {/* Content */}
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    <i className="fas fa-quote-left me-2 text-primary"></i>
                    Testimonial Content <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="content"
                    className="form-control"
                    rows="4"
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    placeholder="Enter the testimonial text..."
                    required
                  ></textarea>
                </div>
              </div>

              <div className="modal-footer border-0 pt-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {testimonial ? (
                    <>
                      <i className="fas fa-save me-2"></i>
                      Update
                    </>
                  ) : (
                    <>
                      <i className="fas fa-plus me-2"></i>
                      Create
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="modal-backdrop fade show"
          onClick={onClose}
          style={{ zIndex: -1 }}
        ></div>
      )}
    </>
  );
}