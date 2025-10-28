"use client";

export function CareerViewModal({ isOpen, onClose, application }) {
  if (!application) return null;

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = application.resume;
    link.download = `${application.name}_resume`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
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
            <div className="modal-header border-0 pb-2">
              <h5 className="modal-title fw-bold">Application Details</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body pt-0">
              {/* Name */}
              <div className="d-flex align-items-center gap-2 mb-4">
                <i className="fas fa-user text-secondary"></i>
                <h5 className="mb-0 fw-semibold">{application.name}</h5>
              </div>

              {/* Details */}
              <div className="mb-4">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="fas fa-envelope text-secondary"></i>
                  <span className="fw-medium me-1">Email:</span>
                  <a
                    href={`mailto:${application.email}`}
                    className="text-primary text-decoration-underline"
                  >
                    {application.email}
                  </a>
                </div>

                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="fas fa-phone text-secondary"></i>
                  <span className="fw-medium me-1">Phone:</span>
                  <a
                    href={`tel:${application.phoneNumber}`}
                    className="text-primary text-decoration-underline"
                  >
                    {application.phoneNumber}
                  </a>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <i className="fas fa-calendar-alt text-secondary"></i>
                  <span className="fw-medium me-1">Applied:</span>
                  <span>{formatDate(application.createdAt)}</span>
                </div>
              </div>

              <hr className="my-4" />

              {/* Resume */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-medium">Resume:</span>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                  onClick={handleDownloadResume}
                >
                  <i className="fas fa-download me-1"></i>
                  Download
                </button>
              </div>
              <p className="text-muted small">
                Click the button above to download the applicant's resume
              </p>

              <hr className="my-4" />

              {/* Close Button */}
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
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