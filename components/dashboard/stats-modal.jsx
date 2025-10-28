"use client";

import { useState, useEffect } from "react";

export function StatsModal({ isOpen, onClose, onSave, stats }) {
  const [formData, setFormData] = useState({
    years: 0,
    placements: 0,
    services: 0,
    countriesServed: 0,
    team: 0,
    database: 0,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync form with incoming stats
  useEffect(() => {
    if (stats) {
      setFormData({
        years: stats.years,
        placements: stats.placements,
        services: stats.services,
        countriesServed: stats.countriesServed,
        team: stats.team,
        database: stats.database,
      });
    }
  }, [stats]);

  const validateForm = () => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (value < 0) {
        newErrors[key] = "Value cannot be negative";
      }
      if (!Number.isInteger(value)) {
        newErrors[key] = "Value must be a whole number";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await onSave(formData);
        onClose();
      } catch (error) {
        console.error("Error saving stats:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (key, value) => {
    const numValue = parseInt(value) || 0;
    setFormData((prev) => ({ ...prev, [key]: numValue }));

    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const statsFields = [
    { key: "years", label: "Years", icon: "fas fa-calendar-alt", color: "text-primary" },
    { key: "placements", label: "Successful", icon: "fas fa-chart-line", color: "text-success" },
    { key: "services", label: "Services", icon: "fas fa-briefcase", color: "text-purple" },
    { key: "countriesServed", label: "Countries Served", icon: "fas fa-globe", color: "text-warning" },
    { key: "team", label: "Team Members", icon: "fas fa-users", color: "text-danger" },
    { key: "database", label: "Database", icon: "fas fa-database", color: "text-info" },
  ];

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

      {/* Bootstrap Modal */}
      <div
        className={`modal fade ${isOpen ? "show d-block" : ""}`}
        style={{ display: isOpen ? "block" : "none", backgroundColor: "rgba(0,0,0,0.5)" }}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header border-0 pb-2">
                <h5 className="modal-title fw-bold">Edit Company Statistics</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                  disabled={isSubmitting}
                ></button>
              </div>

              <div className="modal-body pt-0">
                {/* ID & Last Updated */}
                <div className="d-flex align-items-center gap-3 mb-4 text-muted small">
                  <span className="badge bg-light text-dark border">ID: {stats.id}</span>
                  <span>
                    Last Updated: {new Date(stats.updatedAt).toLocaleDateString()}
                  </span>
                </div>

                {/* Form Fields */}
                <div className="row g-4">
                  {statsFields.map((field, index) => (
                    <div key={field.key} className="col-12">
                      <div className="d-flex align-items-center gap-3 mb-2">
                        <div
                          className="p-2 rounded bg-light d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <i className={`${field.icon} ${field.color}`}></i>
                        </div>
                        <label className="form-label mb-0 fw-medium">
                          {field.label}
                        </label>
                      </div>

                      <input
                        type="number"
                        min="0"
                        className={`form-control ${errors[field.key] ? "is-invalid" : ""}`}
                        value={formData[field.key]}
                        onChange={(e) => handleInputChange(field.key, e.target.value)}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        disabled={isSubmitting}
                      />
                      {errors[field.key] && (
                        <div className="invalid-feedback">{errors[field.key]}</div>
                      )}

                      {index < statsFields.length - 1 && (
                        <hr className="my-4 text-muted" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Live Preview */}
                <div className="bg-light rounded-3 p-3 mt-4">
                  <h6 className="fw-bold mb-3">Preview</h6>
                  <div className="row g-3 text-sm">
                    {statsFields.map((field) => (
                      <div key={field.key} className="col-6 col-md-4">
                        <div className="d-flex align-items-center gap-2">
                          <i className={`${field.icon} ${field.color} small`}></i>
                          <span className="text-muted">{field.label}:</span>
                          <span className="fw-semibold">
                            {formData[field.key].toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer border-0 pt-3">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Updating...
                    </>
                  ) : (
                    "Update Statistics"
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