import api from "@/lib/axios";

// Get all blogs
export async function getBlog() {
  try {
    const response = await api.get("/landing/blogs");
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

// Add a new blog
export async function addBlog(data) {
  try {
    const response = await api.post("/landing/blog", data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

// Edit an existing blog
export async function editBlog(data, id) {
  try {
    const response = await api.patch(`/landing/blog/${id}`, data);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

// Delete a blog
export async function deleteBlog(id) {
  try {
    const response = await api.delete(`/landing/blog/${id}`);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

// Get a single blog by ID
export async function getBlogById(id) {
  try {
    const response = await api.get(`/landing/blogs/${id}`);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}
