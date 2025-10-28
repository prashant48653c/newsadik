"use client";

import { useState, useEffect } from "react";
import { CareerViewModal } from "@/components/dashboard/career-view-modal";
import { getContact, getEmployers } from "@/service/contact.service";

export default function CareersPage() {
  const [applications, setApplications] = useState([]);
  const [employers, setEmployers] = useState([]);
  const [loadingApplications, setLoadingApplications] = useState(true);
  const [loadingEmployers, setLoadingEmployers] = useState(true);
  const [viewingApplication, setViewingApplication] = useState(null);
  const [viewingEmployer, setViewingEmployer] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEmployerViewModalOpen, setIsEmployerViewModalOpen] = useState(false);

  useEffect(() => {
    fetchApplications();
    fetchEmployers();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoadingApplications(true);
      const data = await getContact();
      setApplications(data || []);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoadingApplications(false);
    }
  };

  const fetchEmployers = async () => {
    try {
      setLoadingEmployers(true);
      const data = await getEmployers();
      setEmployers(data || []);
    } catch (error) {
      console.error("Error fetching employers:", error);
    } finally {
      setLoadingEmployers(false);
    }
  };

  const handleView = (application) => {
    setViewingApplication(application);
    setIsViewModalOpen(true);
  };

  const handleViewEmployer = (employer) => {
    setViewingEmployer(employer);
    setIsEmployerViewModalOpen(true);
  };

  const handleDownloadResume = (resumeUrl, applicantName) => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = `${applicantName}_resume`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getRecentCount = (items) => {
    return items.filter((item) => {
      const itemDate = new Date(item.createdAt);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return itemDate >= weekAgo;
    }).length;
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency?.toLowerCase()) {
      case "urgent":
        return "bg-danger text-white";
      case "high":
        return "bg-warning text-dark";
      case "medium":
        return "bg-info text-dark";
      case "low":
        return "bg-success text-white";
      default:
        return "bg-secondary text-white";
    }
  };

  return (
    <>
      {/* Bootstrap & Font Awesome */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <div className="container-fluid py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h3 fw-bold mb-1">Career Management</h1>
            <p className="text-muted small">Manage job applications and client requests</p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary btn-sm" onClick={fetchApplications}>
              <i className="fas fa-sync-alt me-1"></i> Refresh Applications
            </button>
            <button className="btn btn-outline-secondary btn-sm" onClick={fetchEmployers}>
              <i className="fas fa-sync-alt me-1"></i> Refresh Clients
            </button>
          </div>
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-4" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="applications-tab"
              data-bs-toggle="tab"
              data-bs-target="#applications"
              type="button"
              role="tab"
            >
              Career Applications
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="clients-tab"
              data-bs-toggle="tab"
              data-bs-target="#clients"
              type="button"
              role="tab"
            >
              Client Applications
            </button>
          </li>
        </ul>

        <div className="tab-content">
          {/* Applications Tab */}
          <div className="tab-pane fade show active" id="applications" role="tabpanel">
            {/* Stats */}
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-3">
                    <div className="text-muted small">Total Applications</div>
                    <div className="h3 fw-bold mb-0">{applications.length}</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-3">
                    <div className="text-muted small">Recent (Last 7 days)</div>
                    <div className="h3 fw-bold mb-0 text-primary">{getRecentCount(applications)}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white border-0 py-3">
                <h5 className="mb-0 fw-semibold">Career Applications</h5>
              </div>
              <div className="card-body p-0">
                {loadingApplications ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : applications.length === 0 ? (
                  <div className="text-center py-5 text-muted">No applications found</div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Name</th>
                          <th>Contact</th>
                          <th>Applied Date</th>
                          <th>Resume</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((app) => (
                          <tr key={app.id}>
                            <td className="fw-medium">{app.name}</td>
                            <td>
                              <div className="small">
                                <div className="d-flex align-items-center gap-1 mb-1">
                                  <i className="fas fa-envelope text-muted"></i>
                                  <a href={`mailto:${app.email}`} className="text-primary text-decoration-underline">
                                    {app.email}
                                  </a>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                  <i className="fas fa-phone text-muted"></i>
                                  <a href={`tel:${app.phoneNumber}`} className="text-primary text-decoration-underline">
                                    {app.phoneNumber}
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td>{new Date(app.createdAt).toLocaleDateString()}</td>
                            <td>
                              <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => handleDownloadResume(app.resume, app.name)}
                              >
                                <i className="fas fa-download me-1"></i> Download
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => handleView(app)}
                              >
                                <i className="fas fa-eye"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Clients Tab */}
          <div className="tab-pane fade" id="clients" role="tabpanel">
            {/* Stats */}
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-3">
                    <div className="text-muted small">Total Client Requests</div>
                    <div className="h3 fw-bold mb-0">{employers.length}</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-3">
                    <div className="text-muted small">Recent (Last 7 days)</div>
                    <div className="h3 fw-bold mb-0 text-primary">{getRecentCount(employers)}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white border-0 py-3">
                <h5 className="mb-0 fw-semibold">Client Applications</h5>
              </div>
              <div className="card-body p-0">
                {loadingEmployers ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : employers.length === 0 ? (
                  <div className="text-center py-5 text-muted">No client applications found</div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Company</th>
                          <th>Contact Person</th>
                          <th>Job Details</th>
                          <th>Location</th>
                          <th>Urgency</th>
                          <th>Applied Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {employers.map((emp) => (
                          <tr key={emp.id}>
                            <td>
                              <div>
                                <div className="d-flex align-items-center gap-1 fw-medium">
                                  <i className="fas fa-building text-muted"></i>
                                  {emp.companyName}
                                </div>
                                {emp.industry && (
                                  <div className="text-muted small">{emp.industry}</div>
                                )}
                              </div>
                            </td>
                            <td>
                              <div className="small">
                                <div className="d-flex align-items-center gap-1 fw-medium mb-1">
                                  <i className="fas fa-user text-muted"></i>
                                  {emp.contactPerson}
                                </div>
                                <div className="d-flex align-items-center gap-1 mb-1">
                                  <i className="fas fa-envelope text-muted"></i>
                                  <a href={`mailto:${emp.email}`} className="text-primary text-decoration-underline">
                                    {emp.email}
                                  </a>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                  <i className="fas fa-phone text-muted"></i>
                                  <a href={`tel:${emp.phoneNumber}`} className="text-primary text-decoration-underline">
                                    {emp.phoneNumber}
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <div className="fw-medium">{emp.jobTitle}</div>
                                {emp.requirements && (
                                  <div className="text-muted small text-truncate" style={{ maxWidth: "200px" }}>
                                    {emp.requirements}
                                  </div>
                                )}
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center gap-1">
                                <i className="fas fa-map-marker-alt text-muted"></i>
                                {emp.location}
                              </div>
                            </td>
                            <td>
                              <span className={`badge ${getUrgencyColor(emp.urgency)}`}>
                                <i className="fas fa-clock me-1"></i>
                                {emp.urgency}
                              </span>
                            </td>
                            <td>{new Date(emp.createdAt).toLocaleDateString()}</td>
                            <td>
                              <div className="d-flex gap-1">
                                <button
                                  className="btn btn-outline-primary btn-sm"
                                  onClick={() => handleViewEmployer(emp)}
                                >
                                  <i className="fas fa-eye"></i>
                                </button>
                                <button className="btn btn-outline-secondary btn-sm">
                                  <i className="fas fa-envelope"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Career View Modal */}
        <CareerViewModal
          isOpen={isViewModalOpen}
          onClose={() => {
            setIsViewModalOpen(false);
            setViewingApplication(null);
          }}
          application={viewingApplication}
        />

        {/* Employer View Modal */}
        <div
          className={`modal fade ${isEmployerViewModalOpen ? "show d-block" : ""}`}
          style={{ display: isEmployerViewModalOpen ? "block" : "none", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content overflow-auto" style={{ maxHeight: "90vh" }}>
              <div className="modal-header border-0 pb-2">
                <h5 className="modal-title fw-bold">Client Application Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setIsEmployerViewModalOpen(false);
                    setViewingEmployer(null);
                  }}
                ></button>
              </div>
              <div className="modal-body pt-0">
                {viewingEmployer && (
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label text-muted small">Company Name</label>
                      <p className="fs-5 fw-semibold mb-0">{viewingEmployer.companyName}</p>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-muted small">Contact Person</label>
                      <p className="fs-5 mb-0">{viewingEmployer.contactPerson}</p>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-muted small">Email</label>
                      <p className="fs-5 mb-0">
                        <a href={`mailto:${viewingEmployer.email}`} className="text-primary text-decoration-underline">
                          {viewingEmployer.email}
                        </a>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-muted small">Phone Number</label>
                      <p className="fs-5 mb-0">
                        <a href={`tel:${viewingEmployer.phoneNumber}`} className="text-primary text-decoration-underline">
                          {viewingEmployer.phoneNumber}
                        </a>
                      </p>
                    </div>

                    {viewingEmployer.industry && (
                      <div className="col-12">
                        <label className="form-label text-muted small">Industry</label>
                        <p className="fs-5 mb-0">{viewingEmployer.industry}</p>
                      </div>
                    )}

                    <div className="col-md-6">
                      <label className="form-label text-muted small">Job Title</label>
                      <p className="fs-5 fw-semibold mb-0">{viewingEmployer.jobTitle}</p>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-muted small">Location</label>
                      <p className="fs-5 mb-0">{viewingEmployer.location}</p>
                    </div>

                    <div className="col-12">
                      <label className="form-label text-muted small">Urgency</label>
                      <span className={`badge ${getUrgencyColor(viewingEmployer.urgency)} fs-6`}>
                        <i className="fas fa-clock me-1"></i>
                        {viewingEmployer.urgency}
                      </span>
                    </div>

                    {viewingEmployer.requirements && (
                      <div className="col-12">
                        <label className="form-label text-muted small">Requirements</label>
                        <p className="fs-5 mb-0 white-space-pre-wrap">{viewingEmployer.requirements}</p>
                      </div>
                    )}

                    <div className="col-12">
                      <label className="form-label text-muted small">Applied Date</label>
                      <p className="fs-5 mb-0">{new Date(viewingEmployer.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="modal-footer border-0 pt-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    setIsEmployerViewModalOpen(false);
                    setViewingEmployer(null);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop */}
        {isEmployerViewModalOpen && (
          <div
            className="modal-backdrop fade show"
            onClick={() => {
              setIsEmployerViewModalOpen(false);
              setViewingEmployer(null);
            }}
            style={{ zIndex: -1 }}
          ></div>
        )}
      </div>

      <style jsx>{`
        .white-space-pre-wrap {
          white-space: pre-wrap;
        }
      `}</style>
    </>
  );
}