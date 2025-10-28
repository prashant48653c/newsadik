"use client"
import { useState, useEffect} from "react"
import Image from "next/image"
import { PartnerModal } from "@/components/dashboard/partner-modal"
import {fetchPartners, deletePartners, createPartner} from "@/service/partner.service"
import toast from "react-hot-toast"

export default function PartnersPage() {
  const [partners, setPartners] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [deleteModalPartner, setDeleteModalPartner] = useState(null)

  async function getPartners(){
    try {
      const response = await fetchPartners();
      if(response){
        setPartners(response)
        setLoading(false)
      }else{
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      toast.error("failed to fetch partners")
      console.error("failed to fetch partners:", error)
    }
  }

  useEffect(()=>{
    getPartners()
  },[])

  const handleDelete = async(id) => {
    try {
      const response = await deletePartners(id);
      if(response){
        toast.success("partner deleted successfully");
        getPartners()
        // Close the modal
        // const modalElement = document.getElementById('deletePartnerModal');
        // const modal = window.bootstrap.Modal.getInstance(modalElement);
        // if (modal) modal.hide();
      }
    } catch (error) {
      console.error(error);
      toast.error("failed to delete partner")
    }
  }

  const handleSave = async(partnerData) => {
    try {
      for (const pair of partnerData.entries()) {
        console.log(pair[0], pair[1]);
      }

      setIsModalOpen(false);
      setLoading(true);
      const response = await createPartner(partnerData);
      console.log(response);
      if(response){
        await getPartners();
        setLoading(false)
        toast.success("partner created successfully");
      }else{
        toast.error("you must upload image ")
        setLoading(false)
      }
    } catch (error) {
      console.error(error);
      setLoading(false)
      toast.error("failed to create partner ")
    }
  }

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 fw-bold mb-2">Partners Management</h1>
          <p className="text-muted">Manage your business partners</p>
        </div>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2" style={{display: 'inline-block', verticalAlign: 'middle'}}>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add Partner
        </button>
      </div>

      {loading ? (
        <div className="text-center py-5">
          {/* <Spinner size="small" className="text-primary" /> */}Loading ...
        </div>
      ) : (
        <div className="row g-4">
          {partners.map((partner) => (
            <div key={partner.id} className="col-12 col-md-4 col-lg-3">
              <div className="card shadow-sm position-relative">
                <div className="position-relative">
                  <Image
                    src={partner.image || "/placeholder.svg"}
                    alt="partner"
                    width={200}
                    height={100}
                    className="card-img-top bg-light p-4"
                    style={{height: '96px', objectFit: 'contain'}}
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <button
                      className="btn btn-danger btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#deletePartnerModal"
                      onClick={() => handleDelete(partner.id)}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <div className="modal fade" id="deletePartnerModal" tabIndex="-1" aria-labelledby="deletePartnerModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deletePartnerModalLabel">Are you absolutely sure?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              You want to delete this partner!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button 
                type="button" 
                className="btn btn-danger" 
                onClick={() => deleteModalPartner && handleDelete(Number(deleteModalPartner.id))}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <PartnerModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        onSave={handleSave}
      />
    </div>
  )
}