"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TeamModal } from "@/components/dashboard/team-modal";
import {
  getTeam,
  deleteTeam,
  createTeam,
  updateTeam,
  reorderTeam,
} from "@/service/team.service";
// import { Spinner } from "@/components/ui/spinner";
import toast from "react-hot-toast";

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [deleteModalMember, setDeleteModalMember] = useState(null);

  async function fetchTeam() {
    try {
      setLoading(true);
      const response = await getTeam();
      console.log(response);
      if (response) {
        setLoading(false);
        setTeamMembers(response);
      }
    } catch (error) {
      setLoading(false);
      toast("no data found");
    }
  }

  useEffect(() => {
    fetchTeam();
  }, []);

  const handleEdit = (member) => {
    setEditingMember(member);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteTeam(id);
      if (response) {
        toast.success("team deleted successfully");
        await fetchTeam();
        // Close the modal
        const modalElement = document.getElementById('deleteTeamModal');
        const modal = window.bootstrap.Modal.getInstance(modalElement);
        if (modal) modal.hide();
      }
    } catch (error) {
      toast.error("failed to delete team");
    }
  };

  const handleSave = async (memberData) => {
    setIsModalOpen(false);
    if (editingMember) {
      try {
        setLoading(true);
        const response = await updateTeam(Number(editingMember.id), memberData);
        if (response) {
          await fetchTeam();
          setLoading(false);
          toast.success("team updated successfully");
        } else {
          toast.error("you must upload image ");
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        toast.error("failed to update team");
      }
    } else {
      try {
        setLoading(true);
        const response = await createTeam(memberData);
        if (response) {
          await fetchTeam();
          setLoading(false);
          toast.success("team created successfully");
        } else {
          toast.error("you must upload image ");
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        toast.error("failed to create team");
      }
    }
    setEditingMember(null);
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

    const newTeamMembers = [...teamMembers];
    const draggedItem = newTeamMembers[draggedIndex];

    newTeamMembers.splice(draggedIndex, 1);
    newTeamMembers.splice(dropIndex, 0, draggedItem);

    setTeamMembers(newTeamMembers);
    setDraggedIndex(null);
    setIsDragging(false);

    try {
      const orderData = newTeamMembers.map((member, index) => ({
        id: member.id,
        order: index,
      }));
      console.log(orderData);

      const response = await reorderTeam(orderData);
      if (response) {
        toast.success("Team order updated successfully");
      } else {
        await fetchTeam();
        toast.error("Failed to update team order");
      }
    } catch (error) {
      await fetchTeam();
      toast.error("Failed to update team order");
    }
  };

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 fw-bold mb-2">Team Management</h1>
          <p className="text-muted">
            Manage your team members - drag to reorder
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="me-2" style={{display: 'inline-block', verticalAlign: 'middle'}}>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add Team Member
        </button>
      </div>

      <div className="row g-4">
        {loading ? (
          <div className="col-12 text-center py-5">
            {/* <Spinner /> */} Loading ...
          </div>
        ) : (
          teamMembers.map((member, index) => (
            <div key={member.id} className="col-12 col-md-6 col-lg-4">
              <div
                className={`card shadow-sm team-card ${
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
                <div className="position-relative p-2">
                  {/* Drag handle */}
                  <div className="position-absolute top-0 start-0 m-2" style={{zIndex: 10}}>
                    <div className="d-flex align-items-center justify-content-center bg-light rounded" style={{width: '24px', height: '24px'}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="9" cy="5" r="1"></circle>
                        <circle cx="9" cy="12" r="1"></circle>
                        <circle cx="9" cy="19" r="1"></circle>
                        <circle cx="15" cy="5" r="1"></circle>
                        <circle cx="15" cy="12" r="1"></circle>
                        <circle cx="15" cy="19" r="1"></circle>
                      </svg>
                    </div>
                  </div>

                  <div className="position-absolute top-0 end-0 m-2 d-flex gap-1" style={{zIndex: 10}}>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleEdit(member)}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteTeamModal"
                      onClick={() => handleDelete(member.id)}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="card-body d-flex flex-column align-items-center text-center pt-4 pb-4">
                  <Image
                    src={member?.profileImg || "/placeholder.svg"}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-circle mb-3 bg-light"
                    style={{width: '128px', height: '128px', objectFit: 'cover'}}
                  />
                  <h5 className="card-title mb-2">{member.name}</h5>
                  <span className="badge bg-secondary mb-2" title={member.title}>
                    {member.title.length > 100
                      ? member.title.slice(0, 50) + "…"
                      : member.title}
                  </span>
                  <p className="text-muted small mb-1">{member.role}</p>
                  <p className="text-muted small mb-3">{member.address}</p>
                  <div className="d-flex gap-2">
                    <a href={`mailto:${member.email}`} className="btn btn-sm btn-outline-primary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <div className="modal fade" id="deleteTeamModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Are you absolutely sure?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              You want to delete this team member!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button 
                type="button" 
                className="btn btn-danger" 
                onClick={() => deleteModalMember && handleDelete(Number(deleteModalMember.id))}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <TeamModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingMember(null);
        }}
        onSave={handleSave}
        member={editingMember}
      />

      <style jsx>{`
        .team-card {
          transition: all 0.2s ease;
        }
        .team-card:hover {
          box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
        }
        .team-card.dragging {
          opacity: 0.5;
          transform: scale(0.95) rotate(2deg);
        }
      `}</style>
    </div>
  );
}