import RequestBox from "./components/RequestBox"
import RequestList from "./components/RequestList"

let mockRequests = [
  { id: 1, title: "Troble 1", name: 'Adriano Barroso', body: 'Having trouble with Devise.' },
  { id: 2, title: "Troble 2", name: 'Diego Van Dyk', body: 'Something wrong with my js files.' },
  { id: 3, title: "Troble 3", name: 'Brad Pit', body: 'Dont know how to render partials.' }
]

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { requestsList: [] };
  }
  addRequest(requestToAdd) {
    let newRequestsList = this.state.requestsList;
    newRequestsList.unshift({ id: Date.now(),
                              title: 'Problem',
                              name: 'Somebody',
                              body: requestToAdd });

    this.setState({ requestsList: newRequestsList });
  }
  render() {
    return (
      <div className="container">
        <RequestBox sendRequest={this.addRequest.bind(this)} />
        <RequestList requests={this.state.requestsList} />
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
