import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, settours] = useState([]);
  const [loadingflag, setloadingflag] = useState(false);

  const getTours = async () => {
    setloadingflag(true);
    try {
      let response = await fetch(url);
      let data = await response.json();
      setloadingflag(false);
      settours(data);
    } catch (err) {
      setloadingflag(false);
      console.log(err);
    }
  };
  useEffect(() => {
    getTours();
  }, []);

  const delettoure = (id)=>{
    let toursfilter = tours.filter(tour=>tour.id !== id)
    settours(toursfilter)
  }

  if (loadingflag) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  
  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={getTours} >Refresh</button>
        </div>
      </main>
    );
  }

  return(
    <main>
      <Tours tours={tours} delettoure={delettoure} />
    </main>
  )
}

export default App;
