'use strict';

import React, { Component } from 'react';
import Route from './components/route';

export default class App extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Route/>
    );
  }
}
