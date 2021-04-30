import Container from "./components/container";
import Card from "./components/card";
import data from "./data";

const App = () => {
  return (
    <Container>
      <div className="row py-5 gy-4">
        {data.map((element, id) => (
          <Card col="col-md-6 col-lg-3" key={id} {...element} />
        ))}
      </div>
    </Container>
  );
};

export default App;
