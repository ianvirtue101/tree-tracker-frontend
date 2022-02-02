export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://dry-savannah-47125.herokuapp.com"
    : "http://localhost:8080";
