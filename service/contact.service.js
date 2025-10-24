import api from "@/lib/axios";

// Fetch all career applicants
export async function getContact() {
  try {
    const response = await api.get("/landing/careers");
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

// Add a new career applicant
export async function addContact(data) {
  try {
    const response = await api.post("/landing/career", data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

// Fetch all employers
export async function getEmployers() {
  try {
    const response = await api.get("/landing/employers");
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

// Add a new employer
export async function addEmployer(data) {
  try {
    const response = await api.post("/landing/employer", data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}
