"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ServiceModal } from "@/components/dashboard/service-modal";
import {
  getService,
  createService,
  deleteService,
  updateService,
} from "@/service/service";
import toast from "react-hot-toast";
import ServiceEditModal from "@/components/dashboard/service-edit-model";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [viewService, setViewService] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [deleteModalService, setDeleteModalService] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  async function fetchService() {
    try {
      setLoading(true);
      const response = await getService();
      if (response) {
        setServices(response);
      }
    } catch (error) {
      toast.error("Failed to fetch services");
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchService();
  }, []);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const success = await deleteService(id);
      if (success) {
        await fetchService();
        toast.success("Service deleted successfully");
        setIsDeleteModalOpen(false);
        setDeleteModalService(null);
      } else {
        toast.error("Failed to delete service");
      }
    } catch (error) {
      toast.error("Failed to delete service");
      console.error("Error deleting service:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateSpecialization = async () => {
    await fetchService();
  };

  const handleSave = async (serviceData) => {
    setIsModalOpen(false);
    setLoading(true);

    try {
      const success = await createService(serviceData);
      if (success) {
        await fetchService();
        toast.success("Service created successfully");
      } else {
        toast.error("Failed to create service");
      }
    } catch (error) {
      toast.error("Service creation failed");
      console.error("Error creating service:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (serviceData, id) => {
    setIsEditModalOpen(false);
    setLoading(true);

    try {
      const success = await updateService(serviceData, id);
      if (success) {
        await fetchService();
        toast.success("Service updated successfully");
      } else {
        toast.error("Failed to update service");
      }
    } catch (error) {
      toast.error("Service update failed");
      console.error("Error updating service:", error);
    } finally {
      setLoading(false);
    }
  };

  const openViewModal = (service) => {
    setViewService(service);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setViewService(null);
  };

  const openDeleteModal = (service) => {
    setDeleteModalService(service);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeleteModalService(null);
  };

  if (loading) {
    return (
      <div style={{ padding: "1.5rem", fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", margin: 0 }}>
              Services Management
            </h1>
            <p style={{ color: "#6c757d", margin: "0.25rem 0 0" }}>
              Manage your service offerings
            </p>
          </div>
          <button
            disabled
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#0d6efd",
              color: "white",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "not-allowed",
              opacity: 0.6,
            }}
          >
            Add Service
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "256px",
            color: "#6c757d",
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "1.5rem", fontFamily: "system-ui, sans-serif" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", margin: 0 }}>
            Services Management
          </h1>
          <p style={{ color: "#6c757d", margin: "0.25rem 0 0" }}>
            Manage your service offerings
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#0d6efd",
            color: "white",
            border: "none",
            borderRadius: "0.375rem",
            fontWeight: "500",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
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
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add Service
        </button>
      </div>

      {services.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "3rem 1rem",
          }}
        >
          <p style={{ color: "#6c757d", marginBottom: "1rem" }}>
            No services found
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#0d6efd",
              color: "white",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
            }}
          >
            Add Your First Service
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                border: "1px solid #dee2e6",
                borderRadius: "0.75rem",
                overflow: "hidden",
                boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,.075)",
                backgroundColor: "white",
              }}
            >
              <div style={{ position: "relative" }}>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.serviceType}
                  width={300}
                  height={200}
                  style={{
                    width: "100%",
                    height: "192px",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0.5rem",
                    right: "0.5rem",
                    display: "flex",
                    gap: "0.25rem",
                  }}
                >
                  <button
                    onClick={() => openViewModal(service)}
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "rgba(108, 117, 125, 0.9)",
                      color: "white",
                      border: "none",
                      borderRadius: "0.375rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedService(service);
                      setIsEditModalOpen(true);
                    }}
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "rgba(13, 110, 253, 0.9)",
                      color: "white",
                      border: "none",
                      borderRadius: "0.375rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>

                  <button
                    onClick={() => openDeleteModal(service)}
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "rgba(220, 53, 69, 0.9)",
                      color: "white",
                      border: "none",
                      borderRadius: "0.375rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div style={{ padding: "1rem" }}>
                <h5 style={{ margin: "0 0 0.5rem", fontWeight: "600" }}>
                  {service.serviceType}
                </h5>
                <p
                  style={{
                    color: "#6c757d",
                    fontSize: "0.875rem",
                    margin: "0 0 0.75rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {service.heading}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
                  {service.feature?.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: "#f8f9fa",
                        color: "#212529",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "0.375rem",
                        fontSize: "0.75rem",
                        border: "1px solid #dee2e6",
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                  {service.feature && service.feature.length > 2 && (
                    <span
                      style={{
                        backgroundColor: "#f8f9fa",
                        color: "#212529",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "0.375rem",
                        fontSize: "0.75rem",
                        border: "1px solid #dee2e6",
                      }}
                    >
                      +{service.feature.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View Service Modal */}
      {isViewModalOpen && viewService && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "1rem",
          }}
          onClick={closeViewModal}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0.75rem",
              width: "100%",
              maxWidth: "900px",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
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
                {viewService.heading}
              </h3>
              <button
                onClick={closeViewModal}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  padding: "0.25rem",
                }}
              >
                ×
              </button>
            </div>

            <div style={{ padding: "1.5rem" }}>
              <div
                style={{
                  display: "grid",
                  gap: "1.5rem",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                }}
              >
                <div>
                  <h6 style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
                    Service Type
                  </h6>
                  <span
                    style={{
                      backgroundColor: "#6c757d",
                      color: "white",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    {viewService.serviceType}
                  </span>
                </div>
                <div>
                  <h6 style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
                    Subheading
                  </h6>
                  <p style={{ color: "#6c757d", fontSize: "0.875rem", margin: 0 }}>
                    {viewService.subheading}
                  </p>
                </div>

                <div>
                  <h6 style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
                    Features
                  </h6>
                  <ul style={{ margin: 0, paddingLeft: "1.25rem", fontSize: "0.875rem" }}>
                    {viewService.feature?.map((feature, index) => (
                      <li key={index} style={{ marginBottom: "0.25rem" }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6 style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
                    Benefits
                  </h6>
                  <ul style={{ margin: 0, paddingLeft: "1.25rem", fontSize: "0.875rem" }}>
                    {viewService.benefit?.map((benefit, index) => (
                      <li key={index} style={{ marginBottom: "0.25rem" }}>
                        {benefit.subtitle} {benefit.title}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <h6 style={{ fontWeight: 500, marginBottom: "1rem" }}>
                    Specializations
                  </h6>
                  <div
                    style={{
                      display: "grid",
                      gap: "1rem",
                      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    }}
                  >
                    {viewService.specialization?.map((spec, index) => (
                      <div
                        key={index}
                        style={{
                          border: "1px solid #dee2e6",
                          borderRadius: "0.5rem",
                          padding: "0.75rem",
                        }}
                      >
                        <h6 style={{ fontSize: "0.875rem", fontWeight: 500, margin: "0 0 0.25rem" }}>
                          {spec.title}
                        </h6>
                        <p style={{ fontSize: "0.8rem", color: "#6c757d", margin: "0 0 0.5rem" }}>
                          {spec?.description}
                        </p>
                        <img
                          src={spec.image}
                          alt=""
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                            borderRadius: "0.375rem",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <h6 style={{ fontWeight: 500, marginBottom: "1rem" }}>
                    Images
                  </h6>
                  <div
                    style={{
                      display: "grid",
                      gap: "1rem",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    }}
                  >
                    {[
                      { label: "Main Image", src: viewService.image },
                      { label: "Secondary Image", src: viewService.image2 },
                      { label: "Tertiary Image", src: viewService.image3 },
                    ].map((img, i) => (
                      <div key={i}>
                        <p style={{ fontSize: "0.875rem", color: "#6c757d", margin: "0 0 0.5rem" }}>
                          {img.label}
                        </p>
                        <div style={{ position: "relative", width: "100%", height: "128px" }}>
                          <Image
                            src={img.src || "/placeholder.svg"}
                            alt={img.label}
                            fill
                            style={{ objectFit: "cover", borderRadius: "0.375rem" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && deleteModalService && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "1rem",
          }}
          onClick={closeDeleteModal}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0.75rem",
              width: "100%",
              maxWidth: "400px",
              boxShadow: "0 1rem 3rem rgba(0,0,0,.175)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                padding: "1.25rem 1.5rem",
                borderBottom: "1px solid #dee2e6",
              }}
            >
              <h5 style={{ margin: 0, fontWeight: "600" }}>
                Are you absolutely sure?
              </h5>
            </div>
            <div style={{ padding: "1.5rem" }}>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>
                This action <strong>cannot be undone</strong>. This will permanently delete the service "
                <strong>{deleteModalService.serviceType}</strong>" and all its associated data.
              </p>
            </div>
            <div
              style={{
                padding: "1rem 1.5rem",
                borderTop: "1px solid #dee2e6",
                display: "flex",
                justifyContent: "flex-end",
                gap: "0.5rem",
              }}
            >
              <button
                onClick={closeDeleteModal}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#6c757d",
                  color: "white",
                  border: "none",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(Number(deleteModalService.id))}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
      <ServiceEditModal
        service={selectedService}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleUpdate}
        onUpdateSpecialization={updateSpecialization}
      />
    </div>
  );
}