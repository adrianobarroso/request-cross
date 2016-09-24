import Request from "./Request"

export default class RequestList extends React.Component {
  render() {
    let requests = this.props.requests.map(request =>
                        <Request key={request.id} {...request} />);
    return (
      <div>
        <hr />
        <ul>
          {requests}
        </ul>
      </div>
    )
  }
}


