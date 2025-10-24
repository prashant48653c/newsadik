'use client'

import React, { useEffect, useState } from 'react'
import { getTeam } from '@/service/team.service'
import toast from 'react-hot-toast'
import Image from 'next/image'

 
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
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-12 team-block">
                  <div className="border border-gray-200 h-64 flex flex-col items-center justify-center">
                    <div className="p-4 w-full h-full flex flex-col items-center justify-center">
                      
                    </div>
                  </div>
                </div>
              ))
            : team.map((member, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-12 team-block">
                  <div className="p-4 flex flex-col items-center text-center shadow-md rounded-2xl bg-white hover:shadow-lg transition w-60 h-64">
                    <div className="flex flex-col items-center">
                      <Image
                        src={member.profileImg}
                        alt={member.name || `Team Member ${index}`}
                        width={128}
                        height={128}
                        style={{borderRadius:"100%", width:"8rem", height:"8rem",objectFit:"cover"}}
                        className="rounded-full object-cover w-32 h-32 mb-4"
                      />
                      <p className="text-lg font-semibold text-gray-900">{member.name}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}
