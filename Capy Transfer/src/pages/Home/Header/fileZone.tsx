import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FileZone = () => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-sm-11 col-md-11 col-lg-9 col-xl-8 col-xxl-7">
        <Card className="card mb-0">
          <Card.Body className="card-body p-sm-3">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default FileZone;
