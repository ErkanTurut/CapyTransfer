import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DropZone from "./dropZone";
const FileZone = () => {
  return (
    <div className="row d-flex justify-content-center justify-item-center">
      <div className="col-11 col-lg-10">
        <Card className="card mb-0">
          <Card.Body className="card-body p-sm-3">
            <Card.Title className="text-center">Card Title</Card.Title>
            <DropZone />
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default FileZone;
