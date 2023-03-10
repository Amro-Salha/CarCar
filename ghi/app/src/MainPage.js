import { Player } from "@lottiefiles/react-lottie-player";
import car from "./lottieimg/car.json"
import { Container } from 'react-bootstrap'


function MainPage() {
  return (
    <Container>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">CarCar</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            The premiere solution for automobile dealership
            management!
          </p>
        </div>
        <div>
          <Player
            autoplay
            loop
            src={car}
            style={{ height:"400px", width:"700px"}}
          ></Player>
        </div>
      </div>
    </Container>
  );
}

export default MainPage;
