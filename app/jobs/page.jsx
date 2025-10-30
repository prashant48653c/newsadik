"use client";
import React, { useEffect, useState } from "react";
import api from "@/lib/axios";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/navigation";
const JobPage = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchAdvertisements = async () => {
    try {
      const response = await api.get("/landing/advertisement");
      setAds(response.data.data || []);
    } catch (error) {
      console.error("Error fetching advertisements:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  const handleApply = (title) => {
    router.push("/apply-now");
  };

  // Skeleton component
  const SkeletonCard = () => (
    <div className="col-lg-6 col-md-6 col-sm-12 category-block mb_30">
      <div className="category-block-one">
        <div className="inner-box">
          <div className="skeleton skeleton-title mb-3"></div>
          <div className="skeleton skeleton-text mb-3"></div>
          <div className="skeleton skeleton-btn mb-3"></div>
          <div className="skeleton skeleton-img"></div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <>
        <section className="category-section centred pt_120 pb_70">
          {/* Background Layer */}
          <div className="bg-box">
            <div
              className="bg-layer parallax-bg"
              style={{
                backgroundImage:
                  "url(assets/images/background/category-bg.jpg)",
              }}
            ></div>
          </div>

          <div className="auto-container">
            {/* Section Title */}
            <div className="sec-title light pb_60 sec-title-animation animation-style2">
              <span className="sub-title mb_10 title-animation">
                Advertisements
              </span>
              <h2 className="title-animation">
                Explore Opportunities <br /> and Apply Easily
              </h2>
            </div>

            {/* Ads Grid */}
            <div className="row clearfix">
              {loading ? (
                <>
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                </>
              ) : ads.length === 0 ? (
                <p className="text-center text-light w-100">
                  No advertisements available.
                </p>
              ) : (
                ads.map((ad, index) => (
                  <div
                    key={ad.id || index}
                    className="col-lg-6 col-md-6 col-sm-12 category-block mb_30"
                  >
                    <div className="category-block-one">
                      <div className="inner-box">
                        {/* Ad Title */}
                        <h2>{ad.title}</h2>

                        {/* Ad Service Type */}
                        <p className="text-light">
                          {ad.Service?.serviceType || "General Advertisement"}
                        </p>

                        {/* Apply Button */}
                        <button
                          className="theme-btn btn-one"
                          onClick={() => handleApply(ad.title)}
                        >
                          Apply
                        </button>

                        {/* Image */}
                        <figure className="image-box image-hov-one">
                          <img
                            src={
                              ad.image || "assets/images/resource/category-1.jpg"
                            }
                            alt={ad.title}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default JobPage;
