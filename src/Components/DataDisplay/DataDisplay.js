



import React from 'react';
import Data from './Data'

const DataDisplay = ({info, lng,lat}) => {

    const formatDate = (time) => {
        let timeArr = time.split('')
        let i = 0;
        for (i = 0; i <= 15; i++) {
            timeArr.pop()
        }
        return timeArr.join('').replace('T', "  : ")
       }
       
       
  
    return (
        <div>
            <h3 className="tc white">Coordinates</h3>
           <p className="tc white">{lat}, {lng}</p>
            
        <div className="cardGroup">
            {
            
                info.map(data => {
                    let time = formatDate(data.timestamp);
                    
                    return (
                        <div>
                        <Data
                         height={data.height.toFixed(2)}
                         time={time}
                        />
           
          </div>
                    );
                })
            }
                        
            </div>
        </div>
    );
      

    
}

export default DataDisplay;