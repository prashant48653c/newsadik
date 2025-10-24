import api from "@/lib/axios";

// Fetch stats
export async function getStats() {
  try {
    const response = await api.get("/landing/stat");
    console.log("Fetched stats:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching stats:", error);
    return null;
  }
}

// Update stats
export async function updateStats(data) {
  try {
    const response = await api.patch("/landing/stat", data);
    console.log("Updated data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating stats:", error);
    return null;
  }
}
