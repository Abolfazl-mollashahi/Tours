import { useState } from 'react';

const Tour = ({tour,delettoure}) => {
  const [readmore,setreadmore] = useState(false)
  return (
    <article className='single-tour' >
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className='tour-price'>${tour.price}</h4>
        </div>
        <p>
          {readmore ? tour.info :
          tour.info.substring(0,150)
          }
          <button onClick={()=>setreadmore(!readmore)} >
            {readmore ? 'Show less' : 'Read More'}
          </button>
        </p>
        <button className='delete-btn' onClick={()=>delettoure(tour.id)}>not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
