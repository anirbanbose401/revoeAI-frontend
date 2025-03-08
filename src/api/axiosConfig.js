import axios from "axios"; // Import the Axios library

// Set the base URL for all Axios requests to your backend URL
axios.defaults.baseURL = "https://revoeai-backend-2.onrender.com";

// Ensure that cookies (such as JWT tokens) are sent with each request
axios.defaults.withCredentials = true;

export default axios; // Export the configured Axios instance