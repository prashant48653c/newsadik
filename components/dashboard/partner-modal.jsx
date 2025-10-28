"use client";

import { useState } from "react";

export function PartnerModal({ isOpen, onClose, onSave }) {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a logo image");
      return;
    }

    const formdata = new FormData();
    formdata.append("image", file);
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
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header border-0 pb-2">
                <h5 className="modal-title fw-bold">Add New Partner</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                ></button>
              </div>

              <div className="modal-body pt-0">
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    <i className="fas fa-image me-2 text-primary"></i>
                    Partner Logo <span className="text-danger">*</span>
                  </label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleFileChange}
                    required
                  />
                  {file && (
                    <div className="mt-2 p-2 bg-light rounded d-flex align-items-center gap-2 small">
                      <i className="fas fa-check text-success"></i>
                      <span className="text-truncate" style={{ maxWidth: "200px" }}>
                        {file.name}
                      </span>
                    </div>
                  )}
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
                  <i className="fas fa-plus me-2"></i>
                  Create
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