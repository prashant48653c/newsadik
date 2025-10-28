"use client";

import { useState, useEffect } from "react";

export function TeamModal({ isOpen, onClose, onSave, member }) {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    role: "",
    address: "",
    email: "",
    link: "",
    linkedin: "",
  });
  const [file, setFile] = useState(null);

  // Initialize form
  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name || "",
        title: member.title || "",
        role: member.role || "",
        address: member.address || "",
        email: member.email || "",
        link: member.link || "",
        linkedin: member.linkedin || "",
      });
    } else {
      setFormData({
        name: "",
        title: "",
        role: "",
        address: "",
        email: "",
        link: "",
        linkedin: "",
      });
    }
    setFile(null);
  }, [member, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.title.trim() || !formData.role.trim()) {
      alert("Name, Title, and Role are required");
      return;
    }

    const formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append("title", formData.title);
    formdata.append("role", formData.role);
    formdata.append("address", formData.address);
    formdata.append("email", formData.email);
    formdata.append("link", formData.link);
    formdata.append("linkedin", formData.linkedin);
    if (file) {
      formdata.append("image", file);
    }

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
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content overflow-auto" style={{ maxHeight: "80vh" }}>
            <form onSubmit={handleSubmit}>
              <div className="modal-header border-0 pb-2">
                <h5 className="modal-title fw-bold">
                  {member ? "Edit Team Member" : "Add New Team Member"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                ></button>
              </div>

              <div className="modal-body pt-0">
                {/* Name & Title */}
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      <i className="fas fa-user me-2 text-primary"></i>
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="title" className="form-label">
                      <i className="fas fa-id-badge me-2 text-primary"></i>
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
                      placeholder="Enter title"
                      required
                    />
                  </div>
                </div>

                {/* Role */}
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">
                    <i className="fas fa-briefcase me-2 text-primary"></i>
                    Role <span className="text-danger">*</span>
                  </label>
                  <input
                    id="role"
                    type="text"
                    className="form-control"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    placeholder="Enter role"
                    required
                  />
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="form-control"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    placeholder="Enter address"
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <i className="fas fa-envelope me-2 text-primary"></i>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Enter email"
                  />
                </div>

                {/* Portfolio Link */}
                <div className="mb-3">
                  <label htmlFor="link" className="form-label">
                    <i className="fas fa-link me-2 text-primary"></i>
                    Portfolio Link
                  </label>
                  <input
                    id="link"
                    type="url"
                    className="form-control"
                    value={formData.link}
                    onChange={(e) =>
                      setFormData({ ...formData, link: e.target.value })
                    }
                    placeholder="https://example.com"
                  />
                </div>

                {/* LinkedIn */}
                <div className="mb-3">
                  <label htmlFor="linkedin" className="form-label">
                    <i className="fab fa-linkedin me-2 text-primary"></i>
                    LinkedIn URL
                  </label>
                  <input
                    id="linkedin"
                    type="url"
                    className="form-control"
                    value={formData.linkedin}
                    onChange={(e) =>
                      setFormData({ ...formData, linkedin: e.target.value })
                    }
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>

                {/* Profile Image */}
                <div className="mb-3">
                  <label htmlFor="profileImg" className="form-label">
                    <i className="fas fa-camera me-2 text-primary"></i>
                    Profile Image
                  </label>

                  {/* Current Image (Edit Mode) */}
                  {!file && member?.profileImg && (
                    <div className="mb-2 p-2 bg-light rounded d-flex align-items-center gap-2">
                      <span className="text-muted small">Current:</span>
                      <img
                        src={member.profileImg}
                        alt="Current profile"
                        className="rounded"
                        style={{ width: "64px", height: "64px", objectFit: "cover" }}
                      />
                    </div>
                  )}

                  {/* New File Preview */}
                  {file && (
                    <div className="mb-2 p-2 bg-light rounded d-flex align-items-center gap-2">
                      <i className="fas fa-check text-success"></i>
                      <span className="text-truncate" style={{ maxWidth: "200px" }}>
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
                  {member ? (
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