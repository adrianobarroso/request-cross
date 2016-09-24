export default class Request extends React.Component {
  render() {
    return (
      <li className="list-inline">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.props.title} by {this.props.name}</h4>
            <p className="card-text">{this.props.body}</p>
            <a href="#" className="btn btn-primary">Help!</a>
          </div>
        </div>
        <hr />
      </li>
    )
  }
}


