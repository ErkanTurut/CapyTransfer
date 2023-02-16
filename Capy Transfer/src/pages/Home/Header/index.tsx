import Hero from "./hero";
import FileZone from "./fileZone";
import "./header.css";
const Header = () => {
  return (
    <header className="bg-dark py-5">
      <div className="container py-3">
        <div className="row py-5">
          <div className="col-md-6 text-center text-md-start d-print-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-center order-last justify-content-md-start align-items-md-center order-md-first justify-content-xl-end mb-4">
            <Hero />
          </div>
          <div className="col-md-5 mb-4 ">
            <FileZone />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
