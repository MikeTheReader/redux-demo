import React, { Component } from 'react';
import StateViewer from './state-viewer';
import ValueInput from './value-input';
import CountInput from './count-input';
import CountSlider from './count-slider';
import BlankOutButton from './blank-out-button';
import DisplayContainer from './display-container';
import MetaContainer from './meta-container';
import Highlight from 'react-highlight';

require('../../style/highlight.css')
require('../../style/index.css')

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
                        <CountSlider/>
                        <BlankOutButton/>
                        
                      </div>
                  </div>
                  <div className="panel panel-success">
                      <div className="panel-heading">Enter Stuff</div>
                      <div className="panel-body">
                        <ValueInput/>
                        <CountInput/>
                        <CountSlider/>
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
                  <div className="panel panel-danger">
                      <div className="panel-heading">
                          Most Recent Action
                      </div>
                      <div className="panel-body">
                        <Highlight>
                            <div id="action"></div>
                        </Highlight>
                      </div>
                  </div>
                  <div className="panel panel-info">
                      <div className="panel-heading">Show Stuff about the Stuff</div>
                      <div className="panel-body">
                        <MetaContainer />
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}
