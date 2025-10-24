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
      <section className="funfact-section centred pb_90">
        <div className="auto-container">
          <div className="row clearfix">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one animate-pulse bg-gray-100 rounded-lg py-10">
                  <div className="inner-box">
                    <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-3"></div>
                    <div className="h-3 bg-gray-300 rounded w-3/4 mx-auto"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (!stats) return null

  return (
    <section className="funfact-section centred pb_90">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="count-outer">
                  <CounterUp end={stats.years || 0} />
                  <span className="symble">+</span>
                </div>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="count-outer">
                  <CounterUp end={stats.placements || 0} />
                  <span className="symble">+</span>
                </div>
                <p>Successful Placements</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="count-outer">
                  <CounterUp end={stats.team || 0} />
                  <span className="symble">+</span>
                </div>
                <p>Team Members</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="count-outer">
                  <CounterUp end={stats.countriesServed || 0} />
                  <span className="symble">+</span>
                </div>
                <p>Countries Served</p>
              </div>
            </div>
          </div>

            <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="count-outer">
                  <CounterUp end={stats.database || 0} />
                  <span className="symble">+</span>
                </div>
                <p>Database</p>
              </div>
            </div>
          </div>


            <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="count-outer">
                  <CounterUp end={stats.services || 0} />
                  <span className="symble">+</span>
                </div>
                <p>Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
