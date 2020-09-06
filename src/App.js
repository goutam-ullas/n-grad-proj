import React, { Component } from "react";
import "./style.css";
import ReactPlayer from "react-player";
import mapboxgl from "mapbox-gl";

//add mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1Ijoibm5pa2l0YSIsImEiOiJjazdtYzV2MDYwMzliM2dubnVubnJuMTRrIn0.6KqRhtWgMc_nGwMPAqmstQ";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 78.473,
      lat: 17.376,
      zoom: 17.7
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/nnikita/ckd7n4m5b04e31ip8ai5a1xfj",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      attributionControl: false
    });
    // disable map zoom when using scroll
    map.scrollZoom.disable();
  }
  render() {
    return (
      <div className="App">
        <div
          ref={el => (this.mapContainer = el)}
          className="mapContainer"
          style={{
            top: 0,
            left: 0,
            height: 1600,
            position: "absolute"
          }}
        />

        <div className="Video">
          <ReactPlayer
            url="https://vimeo.com/447916895/08bdea37d0"
            controls="true"
            style={{
              width: 320,
              height: 203,
              top: 0,
              left: 0,
              position: "absolute"
            }}
          />
        </div>

        <div className="Video">
          <ReactPlayer
            url="https://vimeo.com/447916895/08bdea37d0"
            controls="true"
            style={{
              width: 320,
              height: 203,
              top: 400,
              left: 0,
              position: "absolute"
            }}
          />
        </div>

        <div className="Video">
          <ReactPlayer
            url="https://vimeo.com/447916895/08bdea37d0"
            controls="true"
            style={{
              width: 320,
              height: 203,
              top: 800,
              left: 0,
              position: "absolute"
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
