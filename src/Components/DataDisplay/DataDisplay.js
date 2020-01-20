



import React from 'react';
import Data from './Data'

const DataDisplay = ({info, placeHolderData}) => {

    const formatDate = (time) => {
        let timeArr = time.split('')
        let i = 0;
        for (i = 0; i<=15; i++) {
            timeArr.pop()
        }
        return timeArr.join('').replace('T', "  : ")
       }
       
       
  
    return (
        <div className="cardGroup">
            {
            
                info.map(data => {
                    let time = formatDate(data.timestamp);
                    
                    return (
                        <div>
                        <Data
                         height={data.height.toFixed(2)}
                         time={time}
                        // name={data.name} for testing purposes with placeholder
                        />
           
          </div>
                    );
                })
            }
                        
          
        </div>
    );
      

    
}

export default DataDisplay;