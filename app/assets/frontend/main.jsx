import RequestBox from "./components/RequestBox"
import RequestList from "./components/RequestList"
import RequestStore from "./stores/RequestStore"

import RequestActions from "./actions/RequestActions";
RequestActions.getAllRequests();

let getAppState = () => {
  return { requestsList: RequestStore.getAll() };
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    RequestStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    RequestStore.removeChangeListener(this._onChange);
  }
  _onChange(){
    this.setState(getAppState());
  }
  render() {
    return (
      <div className="container">
        <RequestBox />
        <RequestList requests={this.state.requestsList} />
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(<Main />, reactNode);
  }
};

$(documentReady);
