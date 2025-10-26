"use client"

import { useEffect, useState } from "react"
import CounterUp from "@/components/elements/CounterUp"
import { getStats } from "@/service/stats.service"
import toast from "react-hot-toast"

export default function Funfact() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getStats()
        if (response) {
          setStats(response)
        } else {
          toast.error("No stats found")
        }
      } catch (error) {
        toast.error("Failed to load statistics")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <section className="funfact-section text-center pb_90">
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="p-4 bg-light rounded placeholder-glow"
                style={{ width: "190px" }}
              >
                <span className="placeholder col-6 mb-2 d-block mx-auto"></span>
                <span className="placeholder col-8 d-block mx-auto"></span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (!stats) return null

  const data = [
    { value: stats.years, label: "Years of Experience" },
    { value: stats.placements, label: "Successful Placements" },
    { value: stats.team, label: "Team Members" },
    { value: stats.countriesServed, label: "Countries Served" },
    { value: stats.database, label: "Database" },
    { value: stats.services, label: "Services" },
  ]

  return (
    <section className="funfact-section text-center pb_90">
      <div className="mx-6">
        <div className="d-flex justify-content-center flex-wrap gap-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="funfact-block-one d-flex flex-column align-items-center justify-content-center p-3 border rounded"
              style={{ width: "190px", minHeight: "110px" }}
            >
              <div
                className="count-outer fw-bold"
                style={{ fontSize: "1.8rem", lineHeight: "1.1" }}
              >
                <CounterUp end={item.value || 0} />
                <span className="symble">+</span>
              </div>
              <p
                className="mb-0"
                style={{ fontSize: "0.9rem", lineHeight: "1.2" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
