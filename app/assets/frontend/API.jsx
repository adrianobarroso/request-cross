import ServerActions from "./actions/ServerActions"

export default {
  getAllRequests() {
    $.get("/requests")
    .success( rawRequests => ServerActions.receivedRequests(rawRequests) )
    .error(error => console.log(error));
  },
  createRequest(body) {
    $.post("/requests", { body })
    .success( rawRequest => ServerActions.receivedOneRequest(rawRequest) )
    .error(error => console.log(error));
  }
}
