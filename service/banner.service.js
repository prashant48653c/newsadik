import api from "../lib/axios";

// Fetch all carousel items
export async function fetchCarousel() {
  try {
    const response = await api.get("/landing/carousel");
    console.log("Fetched carousel:", response.data);
    return response.data || [];
  } catch (error) {
    console.error("Error fetching carousel:", error);
    return [];
  }
}

// Add a new carousel item
export async function addCarousel(data) {
  try {
    const response = await api.patch("/landing/carousel", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Added carousel item:", response.data);
    return true;
  } catch (error) {
    console.error("Error adding carousel:", error);
    return false;
  }
}

// Delete a carousel item by ID
export async function deleteCarousel(id) {
  try {
    const response = await api.delete(`/landing/carousel/${id}`);
    console.log("Deleted carousel item:", response.data);
    return true;
  } catch (error) {
    console.error("Error deleting carousel:", error);
    return false;
  }
}

// Update an existing carousel item
export async function updateCarousel(id, data) {
  try {
    const response = await api.patch(`/landing/carousel/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Updated carousel item:", response.data);
    return true;
  } catch (error) {
    console.error("Error updating carousel:", error);
    return false;
  }
}

// Reorder carousel items
export async function reorderBanner(orderData) {
  try {
    const response = await api.post("/landing/carousel/reorder", orderData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error reordering carousel:", error);
    return false;
  }
}
