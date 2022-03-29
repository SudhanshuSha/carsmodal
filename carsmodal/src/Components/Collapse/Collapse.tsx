import { Row, Col } from "react-bootstrap";
import { CustomerRating } from "../../Interface/RatingAndComment";
import Ratingscircle from "../Knobs/Ratingscircle";
import "./Collapse.css";

const Collapse: React.FC<{
  setCollapseInActive: () => void;
  customerRating: CustomerRating;
}> = (props) => {
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
            {props.customerRating.rating.map((customerRating) => {
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
                Purchase{" "}
                <span className="text-rating">
                  {props.customerRating.purchase}
                </span>
              </p>
            </Col>
            <Col className="mb-3">
              <p className="text-a">
                Driven for{" "}
                <span className="text-rating">
                  {props.customerRating.drivenFor}
                </span>
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
            <Col className="mb-3">
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
