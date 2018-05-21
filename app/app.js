'use strict';

import React, { Component } from 'react';
import Route from './components/route';
import AdMobService from './common/admob.service';

export default class App extends Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    AdMobService.initialize('ca-app-pub-3940256099942544/6300978111');
  }
  render() {
    return (
      <Route/>
    );
  }
}
