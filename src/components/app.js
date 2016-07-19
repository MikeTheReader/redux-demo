import React, { Component } from 'react';
import StateViewer from './state-viewer';
import ValueInput from './value-input';
import CountInput from './count-input';
import BlankOutButton from './blank-out-button';
import DisplayContainer from './display-container';

export default class App extends Component {
  render() {
    return (
        <div className="container-fluid">
              <h2>React / Redux Demo</h2>
              <div className="col-md-4">
                  <div className="panel panel-success">
                      <div className="panel-heading">Enter Stuff</div>
                      <div className="panel-body">
                        <ValueInput/>
                        <CountInput/>
                        <BlankOutButton/>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="panel panel-info">
                      <div className="panel-heading">Show Stuff</div>
                      <div className="panel-body">
                        <DisplayContainer />
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="panel panel-warning">
                      <div className="panel-heading">Application State</div>
                      <div className="panel-body">
                          <StateViewer />
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}
