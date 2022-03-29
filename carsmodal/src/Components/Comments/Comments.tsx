import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Collapse from "../Collapse/Collapse";
import { CustomerRating } from "../../Interface/RatingAndComment";

const Comments: React.FC<{ customerRating: CustomerRating }> = (props) => {
  const [isCollapseActive, setIsCollapseActive] = useState(false);

  const toggleCollapseHandler = () => {
    setIsCollapseActive((state) => {
      return !state;
    });
    return;
  };

  const getStars = (totalStars: number) => {
    let content = [];
    for (let i = 0; i < totalStars; i++) {
      content.push(<FontAwesomeIcon key ={i} icon={faStar} className="checked" />);
    }
    for (let i = 0; i < 5 - totalStars; i++) {
      content.push(<FontAwesomeIcon key ={i} icon={faStar} />);
    }
    return content;
  };

  return (
    <>
      <Row className="border-bottom">
        <Col className="mb-2">
          <span className="heading">
            <b>{props.customerRating.mainComment}</b>
          </span>
          <div>
            {getStars(props.customerRating.stars)}

          </div>
          <div className="mb-2">
            <span className="text-fade me-1">2 days ago</span>
            <hr className="spacehr m-0 p-0 ms-1 me-1"></hr>
            <span className="text-fade ms-1 me-1">
              {props.customerRating.name}
            </span>
          </div>
          <div className="mb-2">
            <p>{props.customerRating.comment}</p>
          </div>
        </Col>
        <Row>
          <Col xs={10}></Col>
          <Col className="mb-3">
            <div className="text-collapselink" onClick={toggleCollapseHandler}>
              {!isCollapseActive && "Read More"}
            </div>
          </Col>
        </Row>

        {isCollapseActive && (
          <Collapse setCollapseInActive={toggleCollapseHandler} customerRating={props.customerRating} />
        )}
      </Row>
    </>
  );
};

export default Comments;
