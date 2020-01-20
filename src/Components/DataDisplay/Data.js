import React from 'react';

const Data = (props) => {
    return (
            
               <div  id="card"className='tc bg-light-green dib br4 pa3 ma2 grow bw1 shadow-5'> 
                
                     <h2>Height: {props.height} meters</h2>
                     { <p>{props.time}</p> }
                
            </div>
            
    
    );
}

export default Data; 