import "./header.css";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <div>
      <p className="fw-bold text-success mb-2 linear-wipe prevent-select">
        Distributed transfer
      </p>
      <h2 className="fw-bold">Stronger, Smarter, Better!</h2>
      <p className="my-3">
        Dransfer is a file transfer system using the IPFS protocol. This allows
        efficient distribution of large volumes of immutable, fast and optimized
        data.
      </p>
      <Button variant="success">Learn more</Button>
    </div>
  );
};

export default Hero;
