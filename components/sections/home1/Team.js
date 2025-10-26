'use client'

import React, { useEffect, useState } from 'react'
import { getTeam } from '@/service/team.service'
import toast from 'react-hot-toast'
import Image from 'next/image'
import Link from 'next/link'

 
export default function Team() {
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await getTeam()
        if (response) setTeam(response)
      } catch (error) {
        toast.error('No team available at the moment!')
      } finally {
        setLoading(false)
      }
    }
    fetchTeam()
  }, [])

  return (
    <section className="team-section centred pt_120 pb_70">
        <div className="auto-container">
            <div className="sec-title pb_60 sec-title-animation animation-style2">
              <span className="sub-title mb_10 title-animation">Our Team</span>
              <h2 className="title-animation">Meet The Team</h2>
            </div>

            <div className="row clearfix">
              {loading ? (
                <p className="text-center w-100">Loading team members...</p>
              ) : team.length === 0 ? (
                <p className="text-center w-100">No team members found.</p>
              ) : (
                team.map((member, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-6 col-sm-12 team-block"
                  >
                    <div
                      className="team-block-one wow fadeInUp animated"
                      data-wow-delay={`${index * 100}ms`}
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <img
                              src={
                                member.profileImg ||
                                "assets/images/team/team-1.jpg"
                              }
                              alt={member.name}
                              style={{
                                width: "300px",
                                height: "300px",
                                objectFit: "cover",
                                borderRadius: "10px",
                              }}
                            />
                          </figure>
                          <figure className="overlay-image">
                            <img
                              src={
                                member.profileImg ||
                                "assets/images/team/team-1.jpg"
                              }
                              alt={member.name}
                              style={{
                                width: "300px",
                                height: "300px",
                                objectFit: "cover",
                                borderRadius: "10px",
                              }}
                            />
                          </figure>
                        </div>

                        <div className="lower-content">
                          <h3>
                            <Link href={member.linkedin || "/"}>
                              {member.name || "Unnamed"}
                            </Link>
                          </h3>
                          <span className="designation">
                            {member.role || "Team Member"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
    </section>
  )
}
