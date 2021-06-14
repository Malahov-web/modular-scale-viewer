import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyCpLnb8YrKmUVA26D8VGCE0vNBwLb5UpmY",
  timeout: 2000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getFonts() {
    // return axiosInstance.get(); // +
    // return axiosInstance.get('?sort=popularity'); // - 400
    // return axiosInstance.get('sort=popularity'); // 400
    // return axiosInstance.get('&sort=popularity'); // 400 - добавляет слэш после baseURL
    return axiosInstance.get(""); // 400

    // Правильный запрос - разделитель праметров &
    // https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyCpLnb8YrKmUVA26D8VGCE0vNBwLb5UpmY
  },
};
