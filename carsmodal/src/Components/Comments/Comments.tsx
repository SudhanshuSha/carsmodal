import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Collapse from "../Collapse/Collapse";

const Comments = () => {
  const [isCollapseActive, setIsCollapseActive] = useState(false);

  const toggleCollapseHandler = () => {
    setIsCollapseActive((state) => {
      return !state;
    });

    return;
  };
  return (
    <>
      <Row className="border-bottom">
        <Col className="mb-2">
          <span className="heading">
            <b>Average</b>
          </span>
          <div>
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
            <FontAwesomeIcon icon={faStar} className="checked" />
          </div>
          <div className="mb-2">
            <span className="text-fade me-1">2 days ago</span>
            <hr className="spacehr m-0 p-0 ms-1 me-1"></hr>
            <span className="text-fade ms-1 me-1">Bhargab Jyoti Das</span>
          </div>
          <div className="mb-2">
            <p>
              Amazing car with amazing features driving is so smooth daily
              commute able overall it is better than most of the other cars
              available in the same price range. Definitely recommend to let it
              come to your home if the budget is average for you. Thanks
            </p>
          </div>
        </Col>
        <Row>
          <Col xs={10}></Col>
          <Col>
            <div className="text-collapselink" onClick={toggleCollapseHandler}>
              {!isCollapseActive && "Read More"}
            </div>
          </Col>
        </Row>

        {isCollapseActive && (
          <Collapse setCollapseInActive={toggleCollapseHandler} />
        )}
      </Row>
    </>
  );
};

export default Comments;
