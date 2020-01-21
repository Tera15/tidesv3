import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { directive } from '@babel/types';

 



export class MapContainer extends Component {

 
    // get long/lat coords onClick location in the google map
    onMapClick = (map,maps,e) => { 
        const { latLng } = e; 
        const latitude = e.latLng.lat(); 
        const longitude = e.latLng.lng(); 
        //below is the callback function written inside of app.js to grab the lat and lng info from map.    
        this.props.getLongLat(latitude, longitude)
    }
    
    render() {
        const style = {
          width: '50vw',
          height:'50vh',
          margin: "2% 0 0 25%",
          
            
        }
    return (
        
           
     
<Map 
      google={this.props.google} 
      zoom={6}
      initialCenter={{
        lat: 54.3150,
        lng: -130.3208
      }}
      
      style={style}
      onClick={this.onMapClick}

      />

                
    
   
     
    );
    
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCJRRiy1b_l1uT3SldWosUADac-qmXs_0Q')
})(MapContainer) 

