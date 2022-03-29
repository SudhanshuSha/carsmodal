import { Row, Col } from "react-bootstrap";
import Ratingscircle from "../Knobs/Ratingscircle";

import "./Collapse.css";

const CustomerRatings = [
  {
    Type: "Exterior",
    Rating: 2,
    color: "red",
  },
  {
    Type: "Comfort",
    Rating: 3,
    color: "orange",
  },
  {
    Type: "Performance",
    Rating: 4,
    color: "green",
  },
  {
    Type: "Fuel Economy",
    Rating: 5,
    color: "green",
  },
  {
    Type: "Value For Money",
    Rating: 4,
    color: "green",
  },
];

const Collapse: React.FC<{ setCollapseInActive: () => void }> = (props) => {
  const onClickHandler = () => {
    props.setCollapseInActive();
  };
  return (
    <>
      <Row className="m-0">
        <Col xs={12} className="m-0 p-0">
          <p className="mb-2">
            <span className="text-rating">Rating parameters</span>(out of 5)
          </p>
          <Row className="border-bottom mb-2">
            {CustomerRatings.map((customerRating) => {
              return (
                <Ratingscircle
                  rating={customerRating.Rating}
                  type={customerRating.Type}
                  color={customerRating.color}
                ></Ratingscircle>
              );
            })}
          </Row>
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
