'use client';

import React, { useState } from "react";
import toast from "react-hot-toast";
import { addContact, addEmployer } from "@/service/contact.service";
import Header1 from "@/components/layout/header/Header1";
import Footer1 from "@/components/layout/footer/Footer1";

export default function ApplyForms() {
  const [activeTab, setActiveTab] = useState("career");

  // Career Form State
  const [careerFormData, setCareerFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    resume: null,
  });
  const [isCareerSubmitting, setIsCareerSubmitting] = useState(false);

  // Employer Form State
  const [employerFormData, setEmployerFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phoneNumber: "",
    industry: "",
    jobTitle: "",
    location: "",
    requirements: "",
    urgency: "normal",
  });
  const [isEmployerSubmitting, setIsEmployerSubmitting] = useState(false);

  // Career Handlers
  const handleCareerInputChange = (e) => {
    const { name, value } = e.target;
    setCareerFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setCareerFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleCareerSubmit = async () => {
    if (!careerFormData.name || !careerFormData.email || !careerFormData.phoneNumber || !careerFormData.resume) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsCareerSubmitting(true);
    try {
      const submitData = new FormData();
      submitData.append("name", careerFormData.name);
      submitData.append("email", careerFormData.email);
      submitData.append("phoneNumber", careerFormData.phoneNumber);
      submitData.append("resume", careerFormData.resume);

      const response = await addContact(submitData);
      if (response) {
        toast.success("Application submitted successfully!");
        setCareerFormData({ name: "", email: "", phoneNumber: "", resume: null });
        const fileInput = document.getElementById("resume");
        if (fileInput) fileInput.value = "";
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsCareerSubmitting(false);
    }
  };

  // Employer Handlers
  const handleEmployerInputChange = (e) => {
    const { name, value } = e.target;
    setEmployerFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmployerSubmit = async () => {
    if (
      !employerFormData.companyName ||
      !employerFormData.contactPerson ||
      !employerFormData.email ||
      !employerFormData.phoneNumber ||
      !employerFormData.jobTitle ||
      !employerFormData.location
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsEmployerSubmitting(true);
    try {
      const response = await addEmployer(employerFormData);
      if (response) {
        toast.success("Request submitted successfully! We'll contact you soon.");
        setEmployerFormData({
          companyName: "",
          contactPerson: "",
          email: "",
          phoneNumber: "",
          industry: "",
          jobTitle: "",
          location: "",
          requirements: "",
          urgency: "normal",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsEmployerSubmitting(false);
    }
  };

  return (

    <>
    <Header1/>
   
    <div className="container mt_100 py-4">
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          {/* Bootstrap Tabs */}
          <ul className="nav nav-tabs mb-4" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "career" ? "active" : ""}`}
                onClick={() => setActiveTab("career")}
                type="button"
              >
                Start Your Career
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "employer" ? "active" : ""}`}
                onClick={() => setActiveTab("employer")}
                type="button"
              >
                Get Your Candidates
              </button>
            </li>
          </ul>

          <div className="tab-content">
            {/* Career Form */}
            {activeTab === "career" && (
              <div className="tab-pane fade show active">
                <h4 className="text-primary mb-3">Start Your Career</h4>
                <p className="text-muted mb-4">
                  Submit your resume and let Sadiksha Overseas help you find the perfect opportunity.
                </p>

                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={careerFormData.name}
                      onChange={handleCareerInputChange}
                      className="form-control"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={careerFormData.email}
                      onChange={handleCareerInputChange}
                      className="form-control"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={careerFormData.phoneNumber}
                      onChange={handleCareerInputChange}
                      className="form-control"
                      placeholder="+977 9800000000"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">
                      Resume <span className="text-danger">*</span>
                    </label>
                    <input
                      type="file"
                      id="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="form-control"
                    />
                    <div className="form-text">
                      Accepted: PDF, DOC, DOCX (Max 5MB)
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="button"
                      onClick={handleCareerSubmit}
                      disabled={isCareerSubmitting}
                      className="btn btn-primary w-100"
                    >
                      {isCareerSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Employer Form */}
            {activeTab === "employer" && (
              <div className="tab-pane fade show active">
                <h4 className="text-success mb-3">Get Your Candidates</h4>
                <p className="text-muted mb-4">
                  Looking for skilled workers? Tell us your needs and we'll find the right talent.
                </p>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">
                      Company Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={employerFormData.companyName}
                      onChange={handleEmployerInputChange}
                      className="form-control"
                      placeholder="ABC Hospitality"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Contact Person <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={employerFormData.contactPerson}
                      onChange={handleEmployerInputChange}
                      className="form-control"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={employerFormData.email}
                      onChange={handleEmployerInputChange}
                      className="form-control"
                      placeholder="hr@company.com"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={employerFormData.phoneNumber}
                      onChange={handleEmployerInputChange}
                      className="form-control"
                      placeholder="+971 50 123 4567"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Industry</label>
                    <input
                      type="text"
                      name="industry"
                      value={employerFormData.industry}
                      onChange={handleEmployerInputChange}
                      className="form-control"
                      placeholder="Hospitality, Construction, etc."
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Job Title <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={employerFormData.jobTitle}
                      onChange={handleEmployerInputChange}
                      className="form-control"
                      placeholder="Chef, Electrician, Nurse"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Job Location <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={employerFormData.location}
                      onChange={handleEmployerInputChange}
                      className="form-control"
                      placeholder="Dubai, Qatar, Singapore"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Urgency</label>
                    <select
                      name="urgency"
                      value={employerFormData.urgency}
                      onChange={handleEmployerInputChange}
                      className="form-select"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent (Within 1 month)</option>
                      <option value="immediate">Immediate (Within 2 weeks)</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Additional Requirements</label>
                    <textarea
                      name="requirements"
                      value={employerFormData.requirements}
                      onChange={handleEmployerInputChange}
                      rows="4"
                      className="form-control"
                      placeholder="Skills, experience, certifications, salary range, etc."
                    />
                  </div>

                  <div className="col-12">
                    <button
                      type="button"
                      onClick={handleEmployerSubmit}
                      disabled={isEmployerSubmitting}
                      className="btn btn-success w-100"
                    >
                      {isEmployerSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer1/>
     </>
  );
}