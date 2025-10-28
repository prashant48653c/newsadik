"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export function BannerModal({ isOpen, onClose, onSave, banner }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (ev) => setPreview(ev.target?.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (ev) => setPreview(ev.target?.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select an image file");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      await onSave(formData);

      // Reset
      setSelectedFile(null);
      setPreview("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      onClose();
    } catch (error) {
      console.error("Error saving banner:", error);
      alert("Failed to save banner");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSelectedFile(null);
    setPreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    onClose();
  };

  const removePreview = () => {
    setSelectedFile(null);
    setPreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <>
      {/* Bootstrap & Font Awesome CDN (Add in layout.tsx) */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      {/* Bootstrap Modal */}
      <div
        className={`modal fade ${isOpen ? "show d-block" : ""}`}
        style={{ display: isOpen ? "block" : "none", backgroundColor: "rgba(0,0,0,0.5)" }}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">
                  {banner ? "Edit Banner" : "Add New Banner"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                  disabled={loading}
                ></button>
              </div>

              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Banner Image</label>

                  {/* Drag & Drop Area */}
                  <div
                    className="border border-2 border-dashed rounded-3 p-4 text-center transition-colors"
                    style={{
                      borderColor: preview ? "#0d6efd" : "#dee2e6",
                      backgroundColor: preview ? "#f8f9fa" : "#fff",
                    }}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    {preview ? (
                      <div className="position-relative d-inline-block">
                        <Image
                          src={preview}
                          alt="Preview"
                          width={300}
                          height={150}
                          className="rounded img-fluid"
                          style={{ maxHeight: "200px", objectFit: "cover" }}
                        />
                        <button
                          type="button"
                          className="btn btn-danger btn-sm rounded-circle position-absolute top-0 end-0 translate-middle"
                          onClick={removePreview}
                          style={{ width: "30px", height: "30px" }}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    ) : (
                      <div className="py-3">
                        <i className="fas fa-cloud-upload-alt fa-3x text-muted mb-3"></i>
                        <p className="mb-1 text-muted">
                          Drag and drop an image here, or click to select
                        </p>
                        <p className="text-muted small">PNG, JPG, JPEG up to 5MB</p>
                      </div>
                    )}
                  </div>

                  {/* Hidden File Input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="d-none"
                    id="bannerImage"
                  />

                  {/* Select Button */}
                  <button
                    type="button"
                    className="btn btn-outline-primary w-100 mt-2"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <i className="fas fa-upload me-2"></i>
                    Select Image
                  </button>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading || !selectedFile}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Saving...
                    </>
                  ) : banner ? (
                    "Update Banner"
                  ) : (
                    "Add Banner"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}