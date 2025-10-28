"use client";
import Image from "next/image";
import { BannerModal } from "@/components/dashboard/banner-modal";
import { useState, useEffect } from "react";
import { fetchCarousel, addCarousel, deleteCarousel, reorderBanner } from "@/service/banner.service";
import toast from "react-hot-toast";

export default function BannerPage() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [deleteModalBanner, setDeleteModalBanner] = useState(null);

  const fetchBanners = async () => {
    try {
      setLoading(true);
      const data = await fetchCarousel();
      data.sort((a, b) => a.order - b.order);
      setBanners(data);
      console.log("Fetched banners:", data);
    } catch (error) {
      toast.error("Failed to fetch banners");
      console.error("Error fetching banners:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const handleSave = async (bannerData) => {
    setIsModalOpen(false);
    setLoading(true);
    
    try {
      const success = await addCarousel(bannerData);
      if (success) {
        await fetchBanners();
        toast.success("Banner created successfully");
      } else {
        toast.error("Failed to create banner");
      }
    } catch (error) {
      toast.error("Failed to create banner");
      console.error("Error creating banner:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    console.log("Id cliecked")
    try {
      const success = await deleteCarousel(id);
      if (success) {
        await fetchBanners();
        toast.success("Banner deleted successfully");
        
      } else {
        toast.error("Failed to delete banner");
      }
    } catch (error) {
      console.error("Error deleting banner:", error);
    }
  };

  // Drag and Drop Functions
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    setIsDragging(true);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", "");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setIsDragging(false);
  };

  const handleDrop = async (e, dropIndex) => {
    e.preventDefault();

    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      setIsDragging(false);
      return;
    }

    const newBanners = [...banners];
    const draggedItem = newBanners[draggedIndex];

    newBanners.splice(draggedIndex, 1);
    newBanners.splice(dropIndex, 0, draggedItem);

    setBanners(newBanners);
    setDraggedIndex(null);
    setIsDragging(false);

    try {
      const orderData = newBanners.map((banner, index) => ({
        id: banner.id,
        order: index,
      }));
      console.log("New banner order:", orderData);

      const response = await reorderBanner(orderData);
      if (response) {
        toast.success("Banner order updated successfully");
      } else {
        await fetchBanners();
        toast.error("Failed to update banner order");
      }
    } catch (error) {
      await fetchBanners();
      toast.error("Failed to update banner order");
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingBanner(null);
  };

  if (loading) {
    return (
      <div className="container-fluid py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h2 fw-bold mb-2">Banner Management</h1>
            <p className="text-muted">Manage your website banner images - drag to reorder</p>
          </div>
          <button className="btn btn-primary" disabled>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2" style={{display: 'inline-block', verticalAlign: 'middle'}}>
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Banner
          </button>
        </div>
        <div className="row g-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm">
                <div className="placeholder-glow">
                  <div className="placeholder w-100" style={{height: '192px', backgroundColor: '#e9ecef'}}></div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="placeholder col-3"></div>
                    <div className="d-flex gap-2">
                      <div className="placeholder" style={{width: '32px', height: '32px'}}></div>
                      <div className="placeholder" style={{width: '32px', height: '32px'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 fw-bold mb-2">Banner Management</h1>
          <p className="text-muted">Manage your website banner images - drag to reorder</p>
        </div>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2" style={{display: 'inline-block', verticalAlign: 'middle'}}>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add Banner
        </button>
      </div>

      {banners.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted mb-4">No banners found</p>
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2" style={{display: 'inline-block', verticalAlign: 'middle'}}>
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Your First Banner
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {banners.map((banner, index) => (
            <div 
              key={banner.id} 
              className="col-12 col-md-6 col-lg-4"
            >
              <div 
                className={`card shadow-sm position-relative banner-card ${
                  isDragging && draggedIndex === index
                    ? "dragging"
                    : ""
                }`}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                onDragEnd={handleDragEnd}
                style={{cursor: 'move'}}
              >
                {/* Drag handle */}
                <div className="position-absolute top-0 start-0 m-2" style={{zIndex: 10}}>
                  <div className="d-flex align-items-center justify-content-center bg-light rounded" style={{width: '24px', height: '24px'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="5" r="1"></circle>
                      <circle cx="9" cy="12" r="1"></circle>
                      <circle cx="9" cy="19" r="1"></circle>
                      <circle cx="15" cy="5" r="1"></circle>
                      <circle cx="15" cy="12" r="1"></circle>
                      <circle cx="15" cy="19" r="1"></circle>
                    </svg>
                  </div>
                </div>

                {/* Delete button */}
                <div className="position-absolute top-0 end-0 m-2" style={{zIndex: 10}}>
                  <button 
                    className="btn btn-danger btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    onClick={() => handleDelete(banner.id)}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>

                <Image
                  src={banner.image}
                  alt={`Banner ${banner.id}`}
                  width={400}
                  height={200}
                  className="card-img-top"
                  style={{height: '192px', objectFit: 'cover'}}
                  onError={(e) => {
                    e.target.src = '/placeholder-image.jpg';
                  }}
                />
                
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted small">
                      Banner #{banner.id} (Order: {index + 1})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">Are you absolutely sure?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              You want to delete this banner!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button 
                type="button" 
                className="btn btn-danger" 
                onClick={() => deleteModalBanner && handleDelete(Number(deleteModalBanner.id))}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <BannerModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleSave}
        banner={editingBanner}
      />

      <style jsx>{`
        .banner-card {
          transition: all 0.2s ease;
        }
        .banner-card:hover {
          box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
        }
        .banner-card.dragging {
          opacity: 0.5;
          transform: scale(0.95) rotate(2deg);
        }
      `}</style>
    </div>
  );
}