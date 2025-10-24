import api from "@/lib/axios";

// Fetch all services
export async function getService() {
  try {
    const response = await api.get("/landing/service");
    return response.data || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

// Create a new service
export async function createService(formdata) {
  try {
    const response = await api.patch("/landing/service", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.error("Error creating service:", error);
    return false;
  }
}

// Update a service
export async function updateService(formdata, id) {
  try {
    const response = await api.patch(`/landing/service/${id}`, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.error("Error updating service:", error);
    return false;
  }
}

// Update a specialization
export async function updateSpecialization(formdata, id) {
  try {
    const response = await api.patch(`/landing/specialization/${id}`, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.error("Error updating specialization:", error);
    return false;
  }
}

// Upload specialization to a service
export async function uploadSpecializationOnService(formdata, id) {
  try {
    const response = await api.post(`/landing/specialization/${id}`, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return true;
  } catch (error) {
    console.error("Error uploading specialization:", error);
    return false;
  }
}

// Delete a specialization
export async function deleteSpecialization(id) {
  try {
    const response = await api.delete(`/landing/specialization/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting specialization:", error);
    return false;
  }
}

// Delete a service
export async function deleteService(id) {
  try {
    const response = await api.delete(`/landing/service/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting service:", error);
    return false;
  }
}

// Get a single service by ID
export async function getServiceById(id) {
  try {
    const response = await api.get(`/landing/service/${id}`);
    return response.data.data || null;
  } catch (error) {
    console.error("Error fetching service by id:", error);
    return null;
  }
}
