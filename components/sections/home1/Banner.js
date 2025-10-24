"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchCarousel } from "@/service/banner.service";
import { getStats } from "@/service/stats.service";

// Simple animated counter
const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target || 0);
    if (!end) return;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / stepTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </span>
  );
};

export default function Banner() {
  const [carousel, setCarousel] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  async function loadData() {
    try {
      const [carouselRes, statsRes] = await Promise.all([
        fetchCarousel(),
        getStats(),
      ]);
      if (Array.isArray(carouselRes)) setCarousel(carouselRes);
      setStats(statsRes);
    } catch (err) {
      console.error("Error loading banner data:", err);
    } finally {
      setLoading(false);
    }
  }
 const statsConfig = [
    {
      key: "years"  ,
      title: "Years",
      value: stats?.years || 0,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      key: "placements" ,
      title: "Placements",
      value: stats?.placements || 0,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      key: "services"  ,
      title: "Services",
      value: stats?.services || 0,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      key: "countriesServed"  ,
      title: "Countries Served",
      value: stats?.countriesServed || 0,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      key: "team"  ,
      title: "Team Members",
      value: stats?.team || 0,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      key: "database"  ,
      title: "Database",
      value: stats?.database || 0,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ]
   useEffect(() => {
   const fetchStats=async()=>{
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

  useEffect(() => {
    loadData();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };

  if (loading || isLoading) {
    return (
      <section style={{ textAlign: "center", padding: "80px 0" }}>
        <p>Loading banner...</p>
      </section>
    );
  }

  return (
    <section style={{ position: "relative",background:"black" }}>
      {/* Top Slider */}
      <div style={{ height: "100vh", position: "relative",background:"black" }}>
        {carousel.length > 0 ? (
          <Slider {...sliderSettings}>
            {carousel.map((item, i) => (
              <div key={item.id || i}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`Banner ${i + 1}`}
                    fill
                    sizes="100vw"
                    priority={i === 0}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div
            style={{
              width: "100%",
              height: "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#eee",
            }}
          >
            <p>No banner images available</p>
          </div>
        )}
      </div>

    
    </section>
  );
}
