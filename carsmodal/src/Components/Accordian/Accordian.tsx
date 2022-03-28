import { Col, Container, Row } from "react-bootstrap";
import "./Accordian.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Comments from "../Comments/Comments";
import Ratingscircle from "../Knobs/Ratingscircle";

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
          <Ratingscircle></Ratingscircle>
          <Comments />
        </Col>
      </Row>
    </Container>
  );
};

export default Accordian;
