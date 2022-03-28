import { Row, Col } from "react-bootstrap";
import Ratingscircle from "../Knobs/Ratingscircle";

import "./Collapse.css";

const Collapse: React.FC<{ setCollapseInActive: () => void }> = (props) => {
  const onClickHandler = () => {
    props.setCollapseInActive();
  };
  return (
    <>
      <Row>
        <Col>
          <p className="mb-2">
            <span className="text-rating">Rating parameters</span>(out of 5)
          </p>
          <Ratingscircle></Ratingscircle>
          <p className="mb-2">
            <span className="text-rating">About the Reviewer</span>
          </p>
          <Row>
            <Col>
              <p className="text-a">
                Purchase <span className="text-rating">Used</span>
              </p>
            </Col>
            <Col className="mb-3">
              <p className="text-a">
                Driven for{" "}
                <span className="text-rating">Did a short drive once</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-a">Was this review helpful?</p>
            </Col>
          </Row>
          <Row>
            <Col xs={10}></Col>
            <Col>
              <div className="text-collapselink" onClick={onClickHandler}>
                Collapse
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Collapse;
