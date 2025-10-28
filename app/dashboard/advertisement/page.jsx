"use client";

import api from "@/lib/axios";
import { useEffect, useState } from "react";
import { getService } from "@/service/service";

const Advertisement = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [newAd, setNewAd] = useState({
    title: "",
    image: null,
    serviceId: "",
  });
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchService = async () => {
    try {
      const response = await getService();
      if (response) {
        setServices(response);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const fetchAdvertisements = async () => {
    try {
      const response = await api.get("/landing/advertisement");
      setAdvertisements(response.data.data || []);
    } catch (error) {
      console.error("Error fetching advertisements:", error);
    }
  };

  const postAd = async (title, image, serviceId) => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);
      formData.append("serviceId", serviceId);

      await api.post("/landing/advertisement", formData);
      await fetchAdvertisements();
      setNewAd({ title: "", image: null, serviceId: "" });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding advertisement:", error);
    }
  };

  const handleAddAdvertisement = async () => {
    if (!newAd.title || !newAd.image || !newAd.serviceId) {
      alert("Please fill all fields");
      return;
    }
    await postAd(newAd.title, newAd.image, newAd.serviceId);
  };

  const deleteAd = async (id) => {
    try {
      await api.delete(`/landing/advertisement`, { data: { id } });
      await fetchAdvertisements();
    } catch (error) {
      console.error("Error deleting advertisement:", error);
    }
  };

  const handleDeleteAd = async (id, event) => {
    event.stopPropagation();
    if (window.confirm("Are you sure you want to delete this advertisement?")) {
      await deleteAd(id);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewAd({ ...newAd, image: file });
    }
  };

  const getImagePreviewUrl = (file) => {
    if (!file) return null;
    return URL.createObjectURL(file);
  };

  const handleServiceChange = (e) => {
    setNewAd({ ...newAd, serviceId: e.target.value });
  };

  const openModal = () => {
    setNewAd({ title: "", image: null, serviceId: "" });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchAdvertisements();
    fetchService();
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", fontFamily: "system-ui, sans-serif" }}>
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 1.5rem",
          backgroundColor: "white",
          boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,.075)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>
          Advertisements
        </h1>
        <button
          onClick={openModal}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: "0.375rem",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          Add Advertisement
        </button>
      </div>

      {/* Custom Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "1rem",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0.75rem",
              width: "100%",
              maxWidth: "600px",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                borderBottom: "1px solid #dee2e6",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: "600" }}>
                Add New Advertisement
              </h3>
              <button
                onClick={closeModal}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  padding: "0.25rem",
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: "1.5rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <input
                  type="text"
                  placeholder="Title"
                  value={newAd.title}
                  onChange={(e) => setNewAd({ ...newAd, title: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.65rem 0.75rem",
                    border: "1px solid #ced4da",
                    borderRadius: "0.375rem",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: "0.5rem",
                    fontSize: "0.95rem",
                  }}
                >
                  Select Service
                </label>
                <select
                  value={newAd.serviceId}
                  onChange={handleServiceChange}
                  style={{
                    width: "100%",
                    padding: "0.65rem 0.75rem",
                    border: "1px solid #ced4da",
                    borderRadius: "0.375rem",
                    fontSize: "1rem",
                  }}
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.serviceType || service.heading || `Service ${service.id}`}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: "0.5rem",
                    fontSize: "0.95rem",
                  }}
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem 0.75rem",
                    border: "1px solid #ced4da",
                    borderRadius: "0.375rem",
                  }}
                />
                {newAd.image && (
                  <div style={{ marginTop: "1rem" }}>
                    <p style={{ margin: "0 0 0.5rem", fontSize: "0.875rem", color: "#6c757d" }}>
                      Selected: {newAd.image.name}
                    </p>
                    <div
                      style={{
                        border: "1px solid #dee2e6",
                        borderRadius: "0.375rem",
                        padding: "0.5rem",
                        backgroundColor: "#f8f9fa",
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={getImagePreviewUrl(newAd.image)}
                        alt="Preview"
                        style={{
                          maxWidth: "100%",
                          height: "128px",
                          objectFit: "contain",
                          borderRadius: "0.375rem",
                        }}
                        onLoad={(e) => {
                          const url = e.target.src;
                          setTimeout(() => URL.revokeObjectURL(url), 1000);
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div
              style={{
                padding: "1rem 1.5rem",
                borderTop: "1px solid #dee2e6",
                display: "flex",
                gap: "0.5rem",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={closeModal}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#6c757d",
                  color: "white",
                  border: "none",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
              <button
                onClick={handleAddAdvertisement}
                disabled={!newAd.title || !newAd.image || !newAd.serviceId}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor:
                    !newAd.title || !newAd.image || !newAd.serviceId
                      ? "#6c757d"
                      : "#0d6efd",
                  color: "white",
                  border: "none",
                  borderRadius: "0.375rem",
                  cursor:
                    !newAd.title || !newAd.image || !newAd.serviceId
                      ? "not-allowed"
                      : "pointer",
                  minWidth: "100px",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ads Grid */}
      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {advertisements.length === 0 ? (
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                color: "#6c757d",
                padding: "2rem",
              }}
            >
              No advertisements found.
            </div>
          ) : (
            advertisements.map((ad, index) => (
              <div
                key={ad.id || index}
                style={{
                  position: "relative",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,.075)",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0.125rem 0.25rem rgba(0,0,0,.075)";
                }}
              >
                {/* Delete Button */}
                <button
                  onClick={(e) => handleDeleteAd(ad.id, e)}
                  style={{
                    position: "absolute",
                    top: "0.5rem",
                    right: "0.5rem",
                    zIndex: 10,
                    width: "32px",
                    height: "32px",
                    padding: 0,
                    backgroundColor: "rgba(220, 53, 69, 0.9)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    opacity: 0,
                    transition: "opacity 0.2s ease",
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = 1;
                    e.currentTarget.style.pointerEvents = "auto";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = 0;
                    e.currentTarget.style.pointerEvents = "none";
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                {ad.image && (
                  <img
                    src={ad.image}
                    alt={ad.title}
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <div style={{ padding: "1rem" }}>
                  <h5
                    style={{
                      margin: "0 0 0.5rem",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                    }}
                  >
                    {ad.title}
                  </h5>
                  <span
                    style={{
                      backgroundColor: "#0d6efd",
                      color: "white",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    {ad.Service?.serviceType || "Unknown Service"}
                  </span>
                  <button style={{
                    background:"red",
                    color: "white",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      marginLeft:".2rem"
                  }} onClick={(e) => handleDeleteAd(ad.id, e)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Advertisement;