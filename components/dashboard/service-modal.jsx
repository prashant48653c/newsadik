"use client";

import { useState } from "react";
import Image from "next/image";

export function ServiceModal({ isOpen, onClose, onSave }) {
  const [serviceType, setServiceType] = useState("");
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [features, setFeatures] = useState([""]);
  const [benefits, setBenefits] = useState([{ title: "", subtitle: "" }]);
  const [specializations, setSpecializations] = useState([
    { title: "", description: "", image: null, imagePreview: "" },
  ]);

  const [mainImage, setMainImage] = useState(null);
  const [secondaryImage, setSecondaryImage] = useState(null);
  const [thirdImage, setThirdImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [secondaryImagePreview, setSecondaryImagePreview] = useState("");
  const [thirdImagePreview, setThirdImagePreview] = useState("");

  const handleFileChange = (e, type) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      if (type === "main") {
        setMainImage(file);
        setMainImagePreview(ev.target?.result);
      } else if (type === "secondary") {
        setSecondaryImage(file);
        setSecondaryImagePreview(ev.target?.result);
      } else if (type === "third") {
        setThirdImage(file);
        setThirdImagePreview(ev.target?.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSpecializationImageChange = (e, index) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const newSpecializations = [...specializations];
      newSpecializations[index].image = file;
      newSpecializations[index].imagePreview = ev.target?.result;
      setSpecializations(newSpecializations);
    };
    reader.readAsDataURL(file);
  };

  const removeMiniImage = (index) => {
    const newSpecializations = [...specializations];
    newSpecializations[index].image = null;
    newSpecializations[index].imagePreview = "";
    setSpecializations(newSpecializations);
  };

  const addFeature = () => setFeatures([...features, ""]);
  const removeFeature = (i) => setFeatures(features.filter((_, idx) => idx !== i));
  const updateFeature = (i, val) => {
    const newFeatures = [...features];
    newFeatures[i] = val;
    setFeatures(newFeatures);
  };

  const addBenefit = () => setBenefits([...benefits, { title: "", subtitle: "" }]);
  const removeBenefit = (i) => setBenefits(benefits.filter((_, idx) => idx !== i));
  const updateBenefit = (i, field, val) => {
    const newBenefits = [...benefits];
    newBenefits[i][field] = val;
    setBenefits(newBenefits);
  };

  const addSpecialization = () =>
    setSpecializations([
      ...specializations,
      { title: "", description: "", image: null, imagePreview: "" },
    ]);
  const removeSpecialization = (i) =>
    setSpecializations(specializations.filter((_, idx) => idx !== i));
  const updateSpecialization = (i, field, val) => {
    const newSpecializations = [...specializations];
    newSpecializations[i][field] = val;
    setSpecializations(newSpecializations);
  };

  const resetForm = () => {
    setServiceType("");
    setHeading("");
    setSubheading("");
    setFeatures([""]);
    setBenefits([{ title: "", subtitle: "" }]);
    setSpecializations([{ title: "", description: "", image: null, imagePreview: "" }]);
    setMainImage(null);
    setSecondaryImage(null);
    setThirdImage(null);
    setMainImagePreview("");
    setSecondaryImagePreview("");
    setThirdImagePreview("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mainImage || !secondaryImage || !thirdImage) {
      alert("Please upload all main, secondary, and third images");
      return;
    }

    const formdata = new FormData();
    formdata.append("serviceType", serviceType);
    formdata.append("heading", heading);
    formdata.append("subheading", subheading);

    const filteredFeatures = features.filter((f) => f.trim());
    const filteredBenefits = benefits.filter((b) => b.title.trim() && b.subtitle.trim());
    const filteredSpecializations = specializations.filter((s) => s.title.trim() && s.description.trim());

    formdata.append("feature", JSON.stringify(filteredFeatures));
    formdata.append("benefit", JSON.stringify(filteredBenefits));
    formdata.append(
      "specialization",
      JSON.stringify(filteredSpecializations.map((s) => ({ title: s.title, description: s.description })))
    );

    formdata.append("image", mainImage);
    formdata.append("image2", secondaryImage);
    formdata.append("image3", thirdImage);

    filteredSpecializations.forEach((spec) => {
      if (spec.image) formdata.append("miniImage", spec.image);
    });

    onSave(formdata);
    resetForm();
    onClose();
  };

  const handleClose = () => {
    resetForm();
    onClose();
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
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content overflow-auto" style={{ maxHeight: "90vh" }}>
            <form onSubmit={handleSubmit}>
              <div className="modal-header border-bottom pb-3">
                <h4 className="modal-title fw-bold text-center w-100">
                  Create New Service
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>

              <div className="modal-body pt-4">
                <p className="text-center text-muted small mb-4">
                  Fill in the details to create a new service offering
                </p>

                {/* Basic Information */}
                <div className="mb-5">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className="fas fa-file-alt text-primary"></i>
                    <h5 className="mb-0 fw-semibold">Basic Information</h5>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">
                        Service Type <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        placeholder="e.g., Digital Marketing"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">
                        Main Heading <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                        placeholder="Enter compelling heading"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">
                        Subheading <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={subheading}
                        onChange={(e) => setSubheading(e.target.value)}
                        placeholder="Supporting subtitle"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fas fa-star text-warning"></i>
                      <h5 className="mb-0 fw-semibold">Features</h5>
                      <span className="text-muted small">
                        ({features.filter((f) => f.trim()).length} items)
                      </span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                      onClick={addFeature}
                    >
                      <i className="fas fa-plus me-1"></i> Add
                    </button>
                  </div>
                  {features.map((f, i) => (
                    <div key={i} className="d-flex gap-2 align-items-center mb-2">
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-circle bg-primary text-white d-flex align-items-center justify-content-center small fw-bold"
                      >
                        {i + 1}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        value={f}
                        onChange={(e) => updateFeature(i, e.target.value)}
                        placeholder={`Feature ${i + 1}`}
                      />
                      {features.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-sm btn-danger"
                          onClick={() => removeFeature(i)}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fas fa-bolt text-success"></i>
                      <h5 className="mb-0 fw-semibold">Benefits</h5>
                      <span className="text-muted small">
                        ({benefits.filter((b) => b.title && b.subtitle).length} items)
                      </span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                      onClick={addBenefit}
                    >
                      <i className="fas fa-plus me-1"></i> Add
                    </button>
                  </div>
                  {benefits.map((b, i) => (
                    <div key={i} className="p-3 border rounded bg-light mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <div className="w-6 h-6 rounded-circle bg-success text-white d-flex align-items-center justify-content-center small">
                            {i + 1}
                          </div>
                          <strong>Benefit {i + 1}</strong>
                        </div>
                        {benefits.length > 1 && (
                          <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() => removeBenefit(i)}
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        )}
                      </div>
                      <div className="row g-2">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            value={b.title}
                            onChange={(e) => updateBenefit(i, "title", e.target.value)}
                            placeholder="Title"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            value={b.subtitle}
                            onChange={(e) => updateBenefit(i, "subtitle", e.target.value)}
                            placeholder="Subtitle"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Specializations */}
                <div className="mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fas fa-star text-purple"></i>
                      <h5 className="mb-0 fw-semibold">Specializations</h5>
                      <span className="text-muted small">
                        ({specializations.filter((s) => s.title && s.description).length} items)
                      </span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                      onClick={addSpecialization}
                    >
                      <i className="fas fa-plus me-1"></i> Add
                    </button>
                  </div>
                  {specializations.map((s, i) => (
                    <div
                      key={i}
                      className="p-4 border-2 border-dashed rounded-3 mb-3 position-relative"
                      style={{
                        borderColor: "#e9ecef",
                        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="d-flex align-items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-circle text-white d-flex align-items-center justify-content-center fw-bold"
                            style={{
                              background: "linear-gradient(45deg, #6f42c1, #0d6efd)",
                            }}
                          >
                            {i + 1}
                          </div>
                          <div>
                            <h6 className="mb-0">Specialization {i + 1}</h6>
                            <small className="text-muted">
                              Add details and an image
                            </small>
                          </div>
                        </div>
                        {specializations.length > 1 && (
                          <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() => removeSpecialization(i)}
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        )}
                      </div>

                      <div className="row g-3">
                        <div className="col-lg-6">
                          <label className="form-label">
                            Title <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={s.title}
                            onChange={(e) => updateSpecialization(i, "title", e.target.value)}
                            placeholder="e.g., SEO Optimization"
                          />
                        </div>
                        <div className="col-lg-6">
                          <label className="form-label">
                            Description <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows="3"
                            value={s.description}
                            onChange={(e) => updateSpecialization(i, "description", e.target.value)}
                            placeholder="Detailed description..."
                          ></textarea>
                        </div>
                        <div className="col-lg-6">
                          <label className="form-label d-flex align-items-center gap-1">
                            <i className="fas fa-camera"></i> Image (Optional)
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            className="d-none"
                            id={`spec-img-${i}`}
                            onChange={(e) => handleSpecializationImageChange(e, i)}
                          />
                          {s.imagePreview ? (
                            <div className="position-relative">
                              <Image
                                src={s.imagePreview}
                                alt=""
                                width={300}
                                height={180}
                                className="rounded img-fluid"
                                style={{ objectFit: "cover" }}
                              />
                              <div className="position-absolute top-0 end-0 p-2 bg-dark bg-opacity-50 rounded">
                                <label
                                  htmlFor={`spec-img-${i}`}
                                  className="btn btn-sm btn-light me-1"
                                >
                                  <i className="fas fa-upload"></i>
                                </label>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-danger"
                                  onClick={() => removeMiniImage(i)}
                                >
                                  <i className="fas fa-times"></i>
                                </button>
                              </div>
                              <div
                                className="position-absolute top-0 start-0 m-2 w-6 h-6 bg-success text-white rounded-circle d-flex-center"
                                style={{ fontSize: "0.7rem" }}
                              >
                                <i className="fas fa-check"></i>
                              </div>
                            </div>
                          ) : (
                            <label
                              htmlFor={`spec-img-${i}`}
                              className="d-flex flex-column align-items-center justify-content-center border border-dashed rounded-3 p-4 text-center cursor-pointer hover-border-primary"
                              style={{ height: "180px", borderColor: "#dee2e6" }}
                            >
                              <i className="fas fa-camera fa-2x text-muted mb-2"></i>
                              <p className="mb-1 text-muted small">Click to upload</p>
                              <small className="text-muted">JPG, PNG (max 5MB)</small>
                            </label>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main Images */}
                <div className="mb-5">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className="fas fa-image text-primary"></i>
                    <h5 className="mb-0 fw-semibold">Main Images</h5>
                  </div>
                  <div className="row g-3">
                    {[
                      { label: "Main", id: "mainImage", preview: mainImagePreview, setter: handleFileChange },
                      { label: "Secondary", id: "secondaryImage", preview: secondaryImagePreview, setter: handleFileChange },
                      { label: "Tertiary", id: "thirdImage", preview: thirdImagePreview, setter: handleFileChange },
                    ].map((img, i) => (
                      <div key={i} className="col-md-4">
                        <label className="form-label">
                          {img.label} Image <span className="text-danger">*</span>
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          className="d-none"
                          id={img.id}
                          onChange={(e) => img.setter(e, img.id.replace("Image", "").toLowerCase())}
                          required
                        />
                        <label
                          htmlFor={img.id}
                          className="d-block border border-dashed rounded-3 p-3 text-center cursor-pointer position-relative overflow-hidden"
                          style={{ height: "200px" }}
                        >
                          {img.preview ? (
                            <>
                              <Image
                                src={img.preview}
                                alt=""
                                fill
                                className="object-cover rounded"
                              />
                              <div className="position-absolute inset-0 bg-black bg-opacity-40 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-opacity">
                                <i className="fas fa-upload fa-2x text-white"></i>
                              </div>
                            </>
                          ) : (
                            <div>
                              <i className="fas fa-cloud-upload-alt fa-3x text-muted mb-2"></i>
                              <p className="mb-0 text-muted">Click to upload</p>
                            </div>
                          )}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer border-top pt-3">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create Service
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
          onClick={handleClose}
          style={{ zIndex: -1 }}
        ></div>
      )}
    </>
  );
}