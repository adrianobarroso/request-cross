import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
  receivedRequests(rawRequests) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_REQUESTS,
      rawRequests
    })
  },
  receivedOneRequest(rawRequest) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_REQUEST,
      rawRequest
    })
  }
}
