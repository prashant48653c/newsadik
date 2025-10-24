import api from "@/lib/axios";

// Fetch team members
export async function getTeam() {
  try {
    const response = await api.get("/landing/team");
    if (response.data) {
      const res = response.data.sort((a, b) => a.order - b.order);
      return res;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Delete a team member
export async function deleteTeam(id) {
  try {
    const response = await api.delete(`/landing/team/${id}`);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Update a team member
export async function updateTeam(id, data) {
  try {
    const response = await api.patch(`/landing/team/${id}`, data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Create a new team member
export async function createTeam(data) {
  try {
    const response = await api.post(`/landing/team`, data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Reorder team members
export async function reorderTeam(orderData) {
  try {
    const response = await api.post("/landing/team/reorder", orderData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error reordering team:", error);
    return false;
  }
}
