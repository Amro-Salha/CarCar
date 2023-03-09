import * as LottiePlayer from "@lottiefiles/lottie-player";
import "./features/features.css"

function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">CarCar</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership
          management!
        </p>
      </div>
      <div className="player">
        <lottie-player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_CZyPeqwmRW.json"
          style={{}}
        ></lottie-player>
      </div>
    </div>
  );
}

export default MainPage;
