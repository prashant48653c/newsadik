"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";

export default function DashboardPage() {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getOverview() {
      try {
        const response = await api.get("/landing/overview");
        if (response.data) {
          setOverview(response.data);
        }
      } catch (error) {
        alert("Failed to retrieve overview");
      } finally {
        setLoading(false);
      }
    }
    getOverview();
  }, []);

  const stats = [
    { label: "Carousels", value: overview?.carousels, icon: "fas fa-images" },
    { label: "Services", value: overview?.services, icon: "fas fa-briefcase" },
    { label: "Partners", value: overview?.partners, icon: "fas fa-users" },
    { label: "Team Members", value: overview?.team, icon: "fas fa-user-check" },
    { label: "Testimonials", value: overview?.testimonials, icon: "fas fa-comment" },
    { label: "Blogs", value: overview?.blogs, icon: "fas fa-file-alt" },
  ];

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

      <div className="container-fluid py-4">
        <div className="mb-5">
          <h1 className="h3 fw-bold mb-1">Dashboard Overview</h1>
          <p className="text-muted">
            Manage your website content from this central dashboard.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="card-subtitle mb-2 text-muted fw-medium">
                        {stat.label}
                      </h6>
                      <h3 className="card-title mb-0 fw-bold">
                        {stat.value ?? "-"}
                      </h3>
                    </div>
                    <div className="text-muted">
                      <i className={`${stat.icon} fa-lg`}></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}