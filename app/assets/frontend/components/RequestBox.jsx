import RequestActions from "../actions/RequestActions"

export default class RequestBox extends React.Component {
  sendRequest(event) {
    event.preventDefault();
    RequestActions.sendRequest(this.refs.requestTextArea.value);
    this.refs.requestTextArea.value = '';
  }
  render() {
    return (
      <div className="input-group">
        <br />
        <form onSubmit={this.sendRequest.bind(this)}>
          <div>
            <label>Whats the issue?</label>
          </div>
          <div>
            <textarea ref="requestTextArea"/>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Request</button>
          </div>
        </form>
      </div>
    )
  }
}

