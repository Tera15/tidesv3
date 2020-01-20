import React, { Component } from 'react';
import Header from './Components/Header/Header';
import DataDisplay from './Components/DataDisplay/DataDisplay';
import MapContainer from './Components/MapContainer/MapContainer';
import PlaceHolder from './PlaceHolder'; 
import wave from './wave.svg';

import 'tachyons';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: [],
      lat: '54.3150',
      lng: '130.3208',
      route: 'Landing',
      placeHolderData: []
      

    }
  }


  //callback to get long/lat data from MapContainer
  getLongLat = (latitude, longitude) => {
    this.setState({ lat: latitude })
    this.setState({ lng: longitude })
    console.log(this.state.lng)

  }

  // updating tide information when coordinates change.
  componentWillUpdate(prevProps, prevState) {
    console.log(prevState)
    if (prevState.lat !== this.state.lat) {
      const lat = this.state.lat
      const lng = this.state.lng
      const today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth();
      let yyyy = today.getFullYear();
      if (dd < 10) {
        let dd = 0 + dd;
      }

      if (mm < 10) {
        mm = 0 + mm
      }

      if(mm === 0) {
        mm = '0'+1;
      }
       // possibly add date selector dropdown for future dates?????? also for location.(geolocation api google so can enter townNames)
      const todaysDate = yyyy + '-' + mm + `-` + dd;
      const tomorrowsDate = yyyy + '-' + mm + `-` + (dd + 1);

      fetch(`https://api.stormglass.io/v1/tide/extremes/point?lat=${lat}&lng=${lng}&start=${todaysDate}&end=${tomorrowsDate}`, {
        headers: {
          'Authorization': 'd91ae818-bf10-11e9-81a5-0242ac130004-d91ae926-bf10-11e9-81a5-0242ac130004'
        }
      }).then((response) => response.json()).then((tideData) => {
        const extremes = tideData.extremes
      console.log(extremes)
        
        this.setState({info: extremes})

      });



            fetch ('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        this.setState({placeHolderData: data})
        console.log(data)
      })
    }


  }



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        this.setState({ placeHolderData: data })
        console.log(data)
      })

    const lat = this.state.lat
    const lng = this.state.lng
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth();
    let yyyy = today.getFullYear();
    if (dd < 10) {
      let dd = 0 + dd;
    }

    if (mm < 10) {
      mm = 0 + mm
    }

    if(mm === 0) {
      mm = '0'+1;
    }




    const todaysDate = yyyy + '-' + mm + `-` + dd;
    const tomorrowsDate = yyyy + '-' + mm + `-` + (dd + 1);
    console.log(tomorrowsDate);


    fetch(`https://api.stormglass.io/v1/tide/extremes/point?lat=${lat}&lng=${lng}&start=${todaysDate}&end=${tomorrowsDate}`, {
      headers: {
        'Authorization': 'd91ae818-bf10-11e9-81a5-0242ac130004-d91ae926-bf10-11e9-81a5-0242ac130004'
      }
    }).then((response) => response.json()).then((tideData) => {
      const extremes = tideData.extremes
    console.log(extremes)
      this.setState({info: extremes})
      console.log(tideData.meta);

    });



  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }






  render() {
    return (
      
      
    <div className='App'>
        <Header />
  
        <div className="mapContainer">
   
        <MapContainer
            getLongLat={this.getLongLat}
          />
        </div>
     
        
        <div className="tideData">
        <p className="tc fw2 white">click on different areas of map to get respective tide info</p>
           
        <DataDisplay
            info={this.state.info}
            placeHolderData={this.state.placeHolderData}
          />
           <p className="tc white fw4 ttu">not for navigational purposes</p>
        </div>  
        <img src={wave} alt=""/> 
      </div>
      
      
    );
  }

}





export default App;
