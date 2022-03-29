import { Col, Container, Row } from "react-bootstrap";
import "./Accordian.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Comments from "../Comments/Comments";
import Ratingscircle from "../Knobs/Ratingscircle";
import { CustomerRating, Rating, RatingAndComment } from "../../Interface/RatingAndComment";

const ratings: RatingAndComment = {
  avgRating: 4.5,
  toatalRating: 5,
  totalRiviews: 5,
  avgCircleRating: [
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
  ],
  customerRatings: [
    {
      name: "Hasher 2",
      stars: 1,
      mainComment: "Bad",
      rating: [
        {
          Type: "Exterior",
          Rating: 1,
          color: "red",
        },
        {
          Type: "Comfort",
          Rating: 4,
          color: "green",
        },
        {
          Type: "Performance",
          Rating: 3,
          color: "orange",
        },
        {
          Type: "Fuel Economy",
          Rating: 1,
          color: "red",
        },
        {
          Type: "Value For Money",
          Rating: 4,
          color: "green",
        },
      ],
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis minus quaerat nostrum atque inventore, laboriosam cupiditate architecto distinctio. Fugiat consequatur a quo minima aut delectus molestias impedit harum dolore.",
      purchase: "used",
      drivenFor: "yet to drive",
    },
    {
      name: "Hasher 1",
      stars: 4,
      mainComment: "Average",
      rating: [
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
      ],
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis minus quaerat nostrum atque inventore, laboriosam cupiditate architecto distinctio. Fugiat consequatur a quo minima aut delectus molestias impedit harum dolore.",
      purchase: "used",
      drivenFor: "did a short drive once",
    },
  ],
};

const Accordian = () => {
  return (
    <Container className="m-5">
      <Row>
        <Col xs={6} className="border">
          <Row className="border-bottom mb-2">
            <Col>
              <FontAwesomeIcon icon={faStar} className="checked" />
              <span className="heading">
                <b>{ratings.avgRating}</b>
              </span>
              <span className="text-fade"> /5</span>

              <span className="text-fade ms-1 me-1">
                ({ratings.toatalRating} Ratings)
              </span>

              <hr className="spacehr m-0 p-0 ms-1 me-1"></hr>

              <span className="text-fade ms-1 me-1">
                {ratings.totalRiviews} Reviews
              </span>
            </Col>
          </Row>
          <Row className="border-bottom mb-2">
            {ratings.avgCircleRating.map((rating: Rating) => {
              return (
                <Ratingscircle
                  rating={rating.Rating}
                  type={rating.Type}
                  color={rating.color}
                ></Ratingscircle>
              );
            })}
          </Row>
          {ratings.customerRatings.map((customerRating: CustomerRating) => {
            return <Comments customerRating={customerRating} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Accordian;
