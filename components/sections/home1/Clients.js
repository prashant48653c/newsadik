"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Partner, fetchPartners } from "@/service/partner.service";
import toast from "react-hot-toast";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Clients() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const glideRef = useRef(null);
  const glideInstance = useRef(null);

  useEffect(() => {
    async function getPartners() {
      try {
        const response = await fetchPartners();
        if (response && Array.isArray(response)) {
          setPartners(response);
        } else {
          toast("No partners found");
        }
      } catch (error) {
        toast("Failed to load partners");
      } finally {
        setLoading(false);
      }
    }
    getPartners();
  }, []);

  useEffect(() => {
    if (partners.length > 0 && glideRef.current && !glideInstance.current) {
      glideInstance.current = new Glide(glideRef.current, {
        type: "carousel",
        startAt: 0,
        perView: 6,
        autoplay: 2500,
        hoverpause: true,
        animationDuration: 800,
        gap: 20,
        breakpoints: {
          1536: {
            perView: 6,
          },
          1280: {
            perView: 5,
          },
          1024: {
            perView: 4,
          },
          768: {
            perView: 3,
          },
          480: {
            perView: 2,
          },
        },
      });

      glideInstance.current.mount();
    }

    return () => {
      if (glideInstance.current) {
        glideInstance.current.destroy();
        glideInstance.current = null;
      }
    };
  }, [partners]);

  return (
    <section style={{
      marginTop:"50px"
    }} className="py-16   bg-white">
      <div className="mx-auto text-center px-4">
        {loading ? (
          <div className="flex flex-wrap justify-center gap-4 mx-auto">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-32 h-20 bg-gray-200 animate-pulse rounded-md"
              ></div>
            ))}
          </div>
        ) : partners.length > 0 ? (
          <div className="relative w-[90%] max-w-[90%] mx-auto">
            <div className="glide" ref={glideRef}>
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  {partners.map((partner, index) => (
                    <li key={partner.id || index} className="glide__slide">
                      <div style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"
                      }} className="flex items-center justify-center h-24">
                        <Image
                          src={partner.image}
                          alt={`Client ${index}`}
                          width={120}
                          height={80}
                          className=""
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation Arrows */}
              <div className="glide__arrows" data-glide-el="controls">
                <button
                  className="glide__arrow glide__arrow--left absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white shadow-md hover:bg-gray-100 p-3 rounded-full"
                  data-glide-dir="<"
                >
                  <ChevronLeft color="black" className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  className="glide__arrow glide__arrow--right absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white shadow-md hover:bg-gray-100 p-3 rounded-full"
                  data-glide-dir=">"
                >
                  <ChevronRight color="black" className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No clients to display</p>
        )}
      </div>
    </section>
  );
}