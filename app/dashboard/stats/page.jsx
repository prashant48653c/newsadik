"use client"

import { useState, useEffect } from "react"
import { StatsModal } from "@/components/dashboard/stats-modal"
import {getStats, updateStats} from "@/service/stats.service"
import toast from "react-hot-toast"

export default function StatsPage() {
  const [stats, setStats] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async() => {
      const response = await getStats();
      if (response) {
        setStats(response);
        setIsLoading(false);
      } else {
        setStats(null);
      }
    }
    fetchStats();
  }, [])

  const handleSave = async (updatedStats) => {
    try {
      const updatedResponse = await updateStats(updatedStats);
      setStats(updatedResponse)
      setIsModalOpen(false)
      toast("Statistics updated successfully")
    } catch (error) {
      toast("Failed to update statistics")
    }
  }

  const statsConfig = [
    {
      key: "years",
      title: "Years",
      value: stats?.years || 0,
      icon: "calendar",
      color: "text-primary",
      bgColor: "bg-primary-subtle",
    },
    {
      key: "placements",
      title: "Placements",
      value: stats?.placements || 0,
      icon: "trending-up",
      color: "text-success",
      bgColor: "bg-success-subtle",
    },
    {
      key: "services",
      title: "Services",
      value: stats?.services || 0,
      icon: "briefcase",
      color: "text-purple",
      bgColor: "bg-purple-subtle",
    },
    {
      key: "countriesServed",
      title: "Countries Served",
      value: stats?.countriesServed || 0,
      icon: "globe",
      color: "text-warning",
      bgColor: "bg-warning-subtle",
    },
    {
      key: "team",
      title: "Team Members",
      value: stats?.team || 0,
      icon: "users",
      color: "text-danger",
      bgColor: "bg-danger-subtle",
    },
    {
      key: "database",
      title: "Database",
      value: stats?.database || 0,
      icon: "database",
      color: "text-info",
      bgColor: "bg-info-subtle",
    },
  ]

  const getIcon = (iconName) => {
    const icons = {
      calendar: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      "trending-up": (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
      briefcase: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      globe: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      users: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      database: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
    }
    return icons[iconName] || icons.calendar
  }

  if (isLoading) {
    return (
      <div className="container-fluid py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h2 fw-bold mb-2">Statistics Management</h1>
            <p className="text-muted">Loading statistics...</p>
          </div>
        </div>

        <div className="row g-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="card placeholder-glow">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="placeholder rounded" style={{width: '40px', height: '40px'}}></div>
                  </div>
                  <div className="placeholder col-8 mb-2"></div>
                  <div className="placeholder col-4" style={{height: '32px'}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="container-fluid py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h2 fw-bold mb-2">Statistics Management</h1>
            <p className="text-muted">No statistics found</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 fw-bold mb-2">Statistics Management</h1>
          <p className="text-muted">Manage your company statistics and achievements</p>
        </div>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="me-2" style={{display: 'inline-block', verticalAlign: 'middle'}}>
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          Edit Statistics
        </button>
      </div>

      <div className="row g-4">
        {statsConfig.map((stat) => (
          <div key={stat.key} className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm stat-card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className={`p-2 rounded ${stat.bgColor}`}>
                    <div className={stat.color}>
                      {getIcon(stat.icon)}
                    </div>
                  </div>
                  <button
                    className="btn btn-sm btn-ghost edit-btn"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>
                </div>
                <h6 className="card-subtitle mb-3 text-muted">{stat.title}</h6>
                <h2 className="card-title mb-0">{stat.value.toLocaleString()}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <StatsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} stats={stats} />

      <style jsx>{`
        .stat-card {
          transition: box-shadow 0.2s ease;
        }
        .stat-card:hover {
          box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
        }
        .edit-btn {
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .stat-card:hover .edit-btn {
          opacity: 1;
        }
        .btn-ghost {
          background: transparent;
          border: none;
        }
        .btn-ghost:hover {
          background: rgba(0,0,0,0.05);
        }
        .bg-primary-subtle {
          background-color: rgba(13, 110, 253, 0.1);
        }
        .bg-success-subtle {
          background-color: rgba(25, 135, 84, 0.1);
        }
        .bg-purple-subtle {
          background-color: rgba(111, 66, 193, 0.1);
        }
        .text-purple {
          color: #6f42c1;
        }
        .bg-warning-subtle {
          background-color: rgba(255, 193, 7, 0.1);
        }
        .bg-danger-subtle {
          background-color: rgba(220, 53, 69, 0.1);
        }
        .bg-info-subtle {
          background-color: rgba(13, 202, 240, 0.1);
        }
      `}</style>
    </div>
  )
}