import API from "../API"

export default {
  getAllRequests() {
    API.getAllRequests();
  },
  sendRequest(body) {
    API.createRequest(body);
  }
}
