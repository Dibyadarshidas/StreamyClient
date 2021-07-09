import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Router>
      <Header/>
        <Switch>
        <Route exact path="/">
          <StreamList />
        </Route>
        <Route path="/stream/create/">
          <StreamCreate />
        </Route>
        <Route path="/stream/:id">
          <StreamShow />
        </Route>
        <Route path="/stream/edit/:id">
          <StreamEdit />
        </Route>
        <Route path="/stream/delete/:id">
          <StreamDelete />
        </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
