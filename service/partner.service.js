"use client";

import api from "@/lib/axios";

// Fetch all partners
export async function fetchPartners() {
  try {
    const response = await api.get("/landing/partner");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch partners");
  }
}

// Delete a partner by ID
export async function deletePartners(id) {
  try {
    const response = await api.delete(`/landing/partner/${id}`);
    if (response.data.message === "Partner deleted") {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete partner");
  }
}

// Create (add) a new partner
export async function createPartner(data) {
  try {
    const response = await api.patch("/landing/partner", data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create partner");
  }
}
