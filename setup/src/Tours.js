import React,{Fragment} from 'react';
import Tour from './Tour';
const Tours = ({tours, deleteTour, fetchTours}) => {

  return (
<Fragment> 
  {tours.length !== 0 ? <section> 
    <div className="title">
     <h2>Our Tours</h2>
      <div className="underline"></div>
    <div>
    {tours.map(tour =>{
      return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />
    })}
     </div>
     </div> 
  </section>:
    <div className='title'>
     <h2>no tours left</h2>
     <button onClick={fetchTours} className='btn'>Fetch Tours</button>
    </div>}
 </Fragment>
  )
  
    
     
  
};

export default Tours;
