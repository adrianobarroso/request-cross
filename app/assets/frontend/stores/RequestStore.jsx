import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import { EventEmitter } from "events";

let _requests = [];
const CHANGE_EVENT = "CHANGE";

class RequestEventEmitter extends EventEmitter {
  getAll() {
    return _requests.map(request => {
      request.formattedDate = moment(request.created_at).fromNow();
      return request;
    })
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let RequestStore = new RequestEventEmitter();

AppDispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_REQUESTS:
      _requests = action.rawRequests;
      // emit change event
      RequestStore.emitChange();

      break;
    case ActionTypes.RECEIVED_ONE_REQUEST:
      _requests.unshift(action.rawRequest);
      // emit change event
      RequestStore.emitChange();
    default:
  }
});

export default RequestStore;
