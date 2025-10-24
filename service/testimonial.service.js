import api from "@/lib/axios";

// Fetch all testimonials
export async function getTestimonial() {
  try {
    const response = await api.get("/landing/testimonials");
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

// Add a new testimonial
export async function addTestimonial(data) {
  try {
    const response = await api.post("/landing/testimonial", data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

// Edit an existing testimonial
export async function editTestimonial(data, id) {
  try {
    const response = await api.patch(`/landing/testimonial/${id}`, data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

// Delete a testimonial
export async function deleteTestimonial(id) {
  try {
    const response = await api.delete(`/landing/testimonial/${id}`);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}
