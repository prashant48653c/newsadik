"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  deleteSpecialization,
  updateSpecialization,
  uploadSpecializationOnService,
} from "@/service/service";
import toast from "react-hot-toast";
import { Upload } from "lucide-react";

function ServiceEditModal({
  service,
  isOpen,
  onClose,
  onSave,
  onUpdateSpecialization,
}) {
  const [serviceType, setServiceType] = useState("");
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [features, setFeatures] = useState([""]);
  const [benefits, setBenefits] = useState([{ title: "", subtitle: "" }]);
  const [specializations, setSpecializations] = useState([
    { title: "", description: "", miniImage: null, miniImagePreview: "" },
  ]);

  // File states (only set when user uploads new file)
  const [mainImage, setMainImage] = useState(null);
  const [secondaryImage, setSecondaryImage] = useState(null);
  const [thirdImage, setThirdImage] = useState(null);

  // Preview states (URLs for display)
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [secondaryImagePreview, setSecondaryImagePreview] = useState("");
  const [thirdImagePreview, setThirdImagePreview] = useState("");

  const [specializationUpdating, setSpecializationUpdating] = useState({});

  // Populate form when modal opens
  useEffect(() => {
    if (service && isOpen) {
      setServiceType(service.serviceType || "");
      setHeading(service.heading || "");
      setSubheading(service.subheading || "");

      setFeatures(service.feature?.length > 0 ? service.feature : [""]);

      try {
        const parsedBenefits =
          typeof service.benefit === "string"
            ? JSON.parse(service.benefit)
            : service.benefit;
        setBenefits(
          parsedBenefits?.length > 0
            ? parsedBenefits
            : [{ title: "", subtitle: "" }]
        );
      } catch {
        setBenefits([{ title: "", subtitle: "" }]);
      }

      try {
        const parsedSpecs =
          typeof service.specialization === "string"
            ? JSON.parse(service.specialization)
            : service.specialization;

        if (parsedSpecs?.length > 0) {
          setSpecializations(
            parsedSpecs.map((s, i) => ({
              id: s.id || `temp-${i}`,
              title: s.title || "",
              description: s.description || "",
              miniImage: null,
              miniImagePreview: s.image || "",
            }))
          );
        } else {
          setSpecializations([
            {
              title: "",
              description: "",
              miniImage: null,
              miniImagePreview: "",
            },
          ]);
        }
      } catch {
        setSpecializations([
          { title: "", description: "", miniImage: null, miniImagePreview: "" },
        ]);
      }

      // Only set previews — DO NOT set file states
      setMainImagePreview(service.image || "");
      setSecondaryImagePreview(service.image2 || "");
      setThirdImagePreview(service.image3 || "");

      // Reset file states (user must re-upload to change)
      setMainImage(null);
      setSecondaryImage(null);
      setThirdImage(null);
    }
  }, [service, isOpen]);

  const handleFileChange = (e, type) => {
    const file = e.target.files?.[0];
    console.log("Running?");
    if (!file) return;
    console.log(file, type);
    const reader = new FileReader();
    reader.onload = (ev) => {
      const preview = ev.target?.result;
      if (type === "main") {
        setMainImage(file);
        setMainImagePreview(preview);
      } else if (type === "secondary") {
        setSecondaryImage(file);
        setSecondaryImagePreview(preview);
      } else if (type === "third") {
        setThirdImage(file);
        setThirdImagePreview(preview);
      }
    };
    reader.readAsDataURL(file);
  };

  const removeMainImage = (type) => {
    if (type === "main") {
      setMainImage(null);
      setMainImagePreview("");
      const input = document.getElementById("mainImage");
      if (input) input.value = "";
    } else if (type === "secondary") {
      setSecondaryImage(null);
      setSecondaryImagePreview("");
      const input = document.getElementById("secondaryImage");
      if (input) input.value = "";
    } else if (type === "third") {
      setThirdImage(null);
      setThirdImagePreview("");
      const input = document.getElementById("thirdImage");
      if (input) input.value = "";
    }
  };

  const handleSpecializationImageChange = (e, index) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const newSpecs = [...specializations];
      newSpecs[index].miniImage = file;
      newSpecs[index].miniImagePreview = ev.target?.result;
      setSpecializations(newSpecs);
    };
    reader.readAsDataURL(file);
  };

  const removeMiniImage = (index) => {
    const newSpecs = [...specializations];
    newSpecs[index].miniImage = null;
    newSpecs[index].miniImagePreview = "";
    setSpecializations(newSpecs);
  };

  const addFeature = () => setFeatures([...features, ""]);
  const removeFeature = (i) =>
    setFeatures(features.filter((_, idx) => idx !== i));
  const updateFeature = (i, val) => {
    const newFeatures = [...features];
    newFeatures[i] = val;
    setFeatures(newFeatures);
  };

  const addBenefit = () =>
    setBenefits([...benefits, { title: "", subtitle: "" }]);
  const removeBenefit = (i) =>
    setBenefits(benefits.filter((_, idx) => idx !== i));
  const updateBenefit = (i, field, val) => {
    const newBenefits = [...benefits];
    newBenefits[i][field] = val;
    setBenefits(newBenefits);
  };

  const addSpecialization = () =>
    setSpecializations([
      ...specializations,
      { title: "", description: "", miniImage: null, miniImagePreview: "" },
    ]);

  const removeSpecialization = async (index, id) => {
    if (!id || String(id).startsWith("temp-")) {
      setSpecializations(specializations.filter((_, i) => i !== index));
      return;
    }

    try {
      await deleteSpecialization(id);
      setSpecializations(specializations.filter((_, i) => i !== index));
      toast.success("Specialization deleted!");
      onUpdateSpecialization();
    } catch (error) {
      toast.error("Failed to delete specialization");
    }
  };

  const updateSpecializations = (i, field, val) => {
    const newSpecs = [...specializations];
    newSpecs[i][field] = val;
    setSpecializations(newSpecs);
  };

  const uploadSpecialization = async (spec) => {
    if (!spec.title.trim() || !spec.description.trim()) {
      toast.error("Title and description are required");
      return;
    }

    const formdata = new FormData();
    formdata.append("title", spec.title);
    formdata.append("description", spec.description);
    if (spec.miniImage) formdata.append("image", spec.miniImage);

    try {
      await uploadSpecializationOnService(formdata, service.id);
      toast.success("Specialization added!");
      onUpdateSpecialization();
    } catch (error) {
      toast.error("Failed to add specialization");
    }
  };

  const handleSpecializationUpdate = async (index) => {
    const spec = specializations[index];
    if (!spec.id || String(spec.id).startsWith("temp-")) {
      toast.error("Cannot update unsaved specialization");
      return;
    }
    if (!spec.title.trim() || !spec.description.trim()) {
      toast.error("Title and description are required");
      return;
    }

    setSpecializationUpdating((prev) => ({ ...prev, [spec.id]: true }));

    const formdata = new FormData();
    formdata.append("title", spec.title);
    formdata.append("description", spec.description);
    if (spec.miniImage instanceof File)
      formdata.append("image", spec.miniImage);

    try {
      await updateSpecialization(formdata, spec.id);
      toast.success("Specialization updated!");
      onUpdateSpecialization();
    } catch (error) {
      toast.error("Update failed");
    } finally {
      setSpecializationUpdating((prev) => ({ ...prev, [spec.id]: false }));
    }
  };

  const resetForm = () => {
    setServiceType("");
    setHeading("");
    setSubheading("");
    setFeatures([""]);
    setBenefits([{ title: "", subtitle: "" }]);
    setSpecializations([
      { title: "", description: "", miniImage: null, miniImagePreview: "" },
    ]);
    setMainImage(null);
    setSecondaryImage(null);
    setThirdImage(null);
    setMainImagePreview("");
    setSecondaryImagePreview("");
    setThirdImagePreview("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("serviceType", serviceType);
    formdata.append("heading", heading);
    formdata.append("subheading", subheading);

    const filteredFeatures = features.filter((f) => f.trim());
    const filteredBenefits = benefits.filter(
      (b) => b.title.trim() && b.subtitle.trim()
    );

    formdata.append("feature", JSON.stringify(filteredFeatures));
    formdata.append("benefit", JSON.stringify(filteredBenefits));

    // Only append if it's a new File
    if (mainImage instanceof File) formdata.append("image", mainImage);
    if (secondaryImage instanceof File)
      formdata.append("image2", secondaryImage);
    if (thirdImage instanceof File) formdata.append("image3", thirdImage);

    onSave(formdata, service?.id);
    resetForm();
    onClose();
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <>
      {/* Modal */}
      <div
        className={`modal fade ${isOpen ? "show d-block" : ""}`}
        style={{
          display: isOpen ? "block" : "none",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div
            className="modal-content overflow-auto"
            style={{ maxHeight: "90vh" }}
          >
            <form onSubmit={handleSubmit}>
              <div
                className="modal-header border-bottom pb-3"
                style={{ padding: "1rem 1.5rem" }}
              >
                <h4
                  className="modal-title fw-bold text-center w-100"
                  style={{ fontSize: "1.25rem" }}
                >
                  Edit Service
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                  style={{ fontSize: "1rem" }}
                />
              </div>

              <div className="modal-body pt-4" style={{ padding: "1.5rem" }}>
                <p
                  className="text-center text-muted small mb-4"
                  style={{ fontSize: "0.875rem" }}
                >
                  Update the service details below
                </p>

                {/* Basic Info */}
                <div className="mb-5">
                  <div
                    className="d-flex align-items-center gap-2 mb-3"
                    style={{ gap: "0.5rem" }}
                  >
                    <i className="fas fa-file-alt text-primary" />
                    <h5
                      className="mb-0 fw-semibold"
                      style={{ fontSize: "1.1rem" }}
                    >
                      Basic Information
                    </h5>
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
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fas fa-star text-warning" />
                      <h5
                        className="mb-0 fw-semibold"
                        style={{ fontSize: "1.1rem" }}
                      >
                        Features
                      </h5>
                      <span className="text-muted small">
                        ({features.filter((f) => f.trim()).length} items)
                      </span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                      onClick={addFeature}
                    >
                      Add
                    </button>
                  </div>
                  {features.map((f, i) => (
                    <div
                      key={i}
                      className="d-flex gap-2 align-items-center mb-2"
                    >
                      <div
                        className="flex-shrink-0 rounded-circle bg-primary text-white d-flex align-items-center justify-content-center small fw-bold"
                        style={{ width: "32px", height: "32px" }}
                      >
                        {i + 1}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        value={f}
                        onChange={(e) => updateFeature(i, e.target.value)}
                      />
                      {features.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-sm btn-danger"
                          onClick={() => removeFeature(i)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fas fa-bolt text-success" />
                      <h5
                        className="mb-0 fw-semibold"
                        style={{ fontSize: "1.1rem" }}
                      >
                        Benefits
                      </h5>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                      onClick={addBenefit}
                    >
                      Add
                    </button>
                  </div>
                  {benefits.map((b, i) => (
                    <div key={i} className="p-3 border rounded bg-light mb-3">
                      <div className="d-flex justify-content-between mb-2">
                        <strong>Benefit {i + 1}</strong>
                        {benefits.length > 1 && (
                          <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() => removeBenefit(i)}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <div className="row g-2">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            value={b.title}
                            onChange={(e) =>
                              updateBenefit(i, "title", e.target.value)
                            }
                            placeholder="Title"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            value={b.subtitle}
                            onChange={(e) =>
                              updateBenefit(i, "subtitle", e.target.value)
                            }
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
                      <i className="fas fa-star" style={{ color: "#6f42c1" }} />
                      <h5
                        className="mb-0 fw-semibold"
                        style={{ fontSize: "1.1rem" }}
                      >
                        Specializations
                      </h5>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                      onClick={addSpecialization}
                    >
                      Add
                    </button>
                  </div>
                  {specializations.map((s, i) => (
                    <div
                      key={i}
                      className="p-4 border rounded-3 mb-3 position-relative"
                      style={{
                        borderWidth: "2px",
                        borderStyle: "dashed",
                        borderColor: "#e9ecef",
                        background:
                          "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="d-flex align-items-center gap-3">
                          <div
                            className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold"
                            style={{
                              width: "32px",
                              height: "32px",
                              background:
                                "linear-gradient(45deg, #6f42c1, #0d6efd)",
                            }}
                          >
                            {i + 1}
                          </div>
                          <div>
                            <h6 className="mb-0">Specialization {i + 1}</h6>
                            <small className="text-muted">
                              Add details and image
                            </small>
                          </div>
                        </div>
                        {specializations.length > 1 && (
                          <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() => removeSpecialization(i, s.id)}
                          >
                            Remove
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
                            onChange={(e) =>
                              updateSpecializations(i, "title", e.target.value)
                            }
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
                            onChange={(e) =>
                              updateSpecializations(
                                i,
                                "description",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="col-lg-6">
                          <label className="form-label d-flex align-items-center gap-1">
                            Image (Optional)
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            className="d-none"
                            id={`mini-${i}`}
                            onChange={(e) =>
                              handleSpecializationImageChange(e, i)
                            }
                          />
                          {s.miniImagePreview ? (
                            <div className="position-relative">
                              <Image
                                src={s.miniImagePreview}
                                alt=""
                                width={300}
                                height={180}
                                className="rounded img-fluid"
                                style={{ objectFit: "cover" }}
                              />
                              <div
                                className="position-absolute top-0 end-0 p-2 rounded"
                                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                              >
                                <label
                                  htmlFor={`mini-${i}`}
                                  className="btn btn-sm btn-light me-1"
                                  style={{ cursor: "pointer" }}
                                >
                                  Upload
                                </label>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-danger"
                                  onClick={() => removeMiniImage(i)}
                                >
                                  Remove
                                </button>
                              </div>
                              <div
                                className="position-absolute top-0 start-0 m-2 bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  fontSize: "0.7rem",
                                }}
                              >
                                Check
                              </div>
                            </div>
                          ) : (
                            <label
                              htmlFor={`mini-${i}`}
                              className="d-flex flex-column align-items-center justify-content-center border rounded-3 p-4 text-center"
                              style={{
                                height: "180px",
                                borderStyle: "dashed",
                                borderColor: "#dee2e6",
                                cursor: "pointer",
                              }}
                            >
                              <i className="fas fa-camera fa-2x text-muted mb-2" />
                              <p className="mb-1 text-muted small">
                                Click to upload
                              </p>
                              <small className="text-muted">
                                JPG, PNG (max 5MB)
                              </small>
                            </label>
                          )}
                        </div>
                      </div>

                      {/* Update / Add Button */}
                      <div className="mt-3">
                        {s.id && !String(s.id).startsWith("temp-") ? (
                          <button
                            type="button"
                            className="btn w-100"
                            style={{
                              backgroundColor: "#6f42c1",
                              color: "white",
                            }}
                            onClick={() => handleSpecializationUpdate(i)}
                            disabled={
                              specializationUpdating[s.id] ||
                              !s.title.trim() ||
                              !s.description.trim()
                            }
                          >
                            {specializationUpdating[s.id] ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" />
                                Updating...
                              </>
                            ) : (
                              <>Update This Specialization</>
                            )}
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-success w-100"
                            onClick={() => uploadSpecialization(s)}
                          >
                            Add This Specialization
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main Images */}
               <div className="space-y-6">
  <div className="flex items-center gap-2 mb-4">
    <h3 className="text-lg font-semibold">Main Images</h3>
  </div>

  <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(20rem, 1fr))', gap:'1rem'}} className="">
    {/* Main Image */}
    <div className="w-full  sm:w-1/2 lg:w-1/3 px-3 mb-6">
      <div className="space-y-3">
        <label
          htmlFor="mainImage"
          className="text-sm font-medium flex items-center gap-2"
        >
          Main Image <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            id="mainImage"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "main")}
            className="hidden"
          />
          <label
            htmlFor="mainImage"
            className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
          >
            {mainImagePreview ? (
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={mainImagePreview}
                  alt="Main image preview"
                  width={350}
                  height={300}
                  style={{
                    width:"20rem",
                    height:"20rem"
                  }}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <Upload className="h-8 w-8 text-white" />
                </div>
              </div>
            ) : (
              <div className="text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  Click to upload main image
                </p>
              </div>
            )}
          </label>
        </div>
      </div>
    </div>

    {/* Secondary Image */}
    <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
      <div className="space-y-3">
        <label
          htmlFor="secondaryImage"
          className="text-sm font-medium flex items-center gap-2"
        >
          Secondary Image <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            id="secondaryImage"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "secondary")}
            className="hidden"
          />
          <label
            htmlFor="secondaryImage"
            className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
          >
            {secondaryImagePreview ? (
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={secondaryImagePreview}
                  alt="Secondary image preview"
                  width={350}
                  height={300}
                   style={{
                    width:"20rem",
                    height:"20rem"
                  }}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <Upload className="h-8 w-8 text-white" />
                </div>
              </div>
            ) : (
              <div className="text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  Click to upload secondary image
                </p>
              </div>
            )}
          </label>
        </div>
      </div>
    </div>

    {/* Tertiary Image */}
    <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
      <div className="space-y-3">
        <label
          htmlFor="thirdImage"
          className="text-sm font-medium flex items-center gap-2"
        >
          Tertiary Image <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            id="thirdImage"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "third")}
            className="hidden"
          />
          <label
            htmlFor="thirdImage"
            className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
          >
            {thirdImagePreview ? (
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={thirdImagePreview}
                  alt="Tertiary image preview"
                  width={350}
                  height={300}
                   style={{
                    maxWidth:"20rem",
                    height:"20rem"
                  }}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <Upload className="h-8 w-8 text-white" />
                </div>
              </div>
            ) : (
              <div className="text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  Click to upload tertiary image
                </p>
              </div>
            )}
          </label>
        </div>
      </div>
    </div>
  </div>
</div>
              </div>

              <div
                className="modal-footer border-top pt-3"
                style={{ padding: "1rem 1.5rem" }}
              >
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Update Service
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
        />
      )}
    </>
  );
}

export default ServiceEditModal;
