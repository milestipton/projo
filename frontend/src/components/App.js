import React, { Component, Fragment } from "react";
import ReactDOM from 'react-dom/client';
import Home from '../components/ProjectHome/Home';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from '../store';
import Form from "./CreateProject/Form";

class App extends Component {
   render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/form" element={<Form />} />
            </Routes>
          </Fragment>
        </Router>
      </Provider>
    )
   }
}


export default App;

const root = ReactDOM.createRoot(document.getElementById('app'));
const element = <App />;
root.render(element);
