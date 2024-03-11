import Tour from "./Tour";

const Tours = ({ tours , delettoure }) => {
  return (
    <section>
    <div className="title">
      <h2>our Tours</h2>
      <div className="underline"></div>
    </div>
    <div className="">
      {
        tours.map(tour => <Tour key={tour.id} tour={tour} delettoure={delettoure} />)
      }
    </div>
    </section>
  );
};

export default Tours;
