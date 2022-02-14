import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWUzZmU1YjUyMjgxOTY2YzNjZjJlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODE2NzkzNSwiZXhwIjoxNjM4NDI3MTM1fQ.lJUSrhuQ-d1GyL5eUvbRATpcS4lunc57IDgYs5ecfzY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token : `vuong ${TOKEN}`}
})
