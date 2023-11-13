import axios from "axios";
import { BASE_URL } from "../configs/app-config";

// Service for making HTTP requests using axios
const ApiService = {
  // Function for making a GET request to a specified endpoint
  get: async (endpoint: string) => {
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`);
      return response;
    } catch (error) {
      return error;
    }
  },
};

export { ApiService };
