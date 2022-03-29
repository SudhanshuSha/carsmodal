import { Col, Container, Row } from "react-bootstrap";
import "./Accordian.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Comments from "../Comments/Comments";
import Ratingscircle from "../Knobs/Ratingscircle";

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

const Accordian = () => {
  return (
    <Container className="m-5">
      <Row>
        <Col xs={6} className="border">
          <Row className="border-bottom mb-2">
            <Col>
              <FontAwesomeIcon icon={faStar} className="checked" />
              <span className="heading">
                <b>4.5</b>
              </span>
              <span className="text-fade"> /5</span>

              <span className="text-fade ms-1 me-1">(1568 Ratings)</span>

              <hr className="spacehr m-0 p-0 ms-1 me-1"></hr>

              <span className="text-fade ms-1 me-1">939 Reviews</span>
            </Col>
          </Row>
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
          <Comments />
        </Col>
      </Row>
    </Container>
  );
};

export default Accordian;
