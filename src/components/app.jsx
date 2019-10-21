import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker';
import flats from '../../data/flats';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  render() {
    return (

      )
  }
}

export default App;
