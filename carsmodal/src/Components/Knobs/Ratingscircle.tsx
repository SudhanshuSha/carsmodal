import { Col, Row } from "react-bootstrap";
import { Donut } from "react-dial-knob";

const Ratingscircle: React.FC<{ rating: number; type: string,color:string }> = (props) => {
  return (
    <>
      <Col
        className="col-2 alignmentCenter"
        style={{ width: "135px !important;" }}
      >
        <Donut
          diameter={50}
          min={0}
          max={5}
          step={1}
          value={props.rating}
          theme={{
            donutColor: props.color,
          }}
          ariaLabelledBy={"my-label"}
          spaceMaxFromZero={false}
        >
          <label id={"my-label"} className="donut-label">
            {props.type}
          </label>
        </Donut>
      </Col>
      <hr className="spacehrrating"></hr>
      {/* <Col
        className="col-2 alignmentCenter"
        style={{ width: "135px !important;" }}
      >
        <Donut
          diameter={50}
          min={0}
          max={5}
          step={1}
          value={2}
          theme={{
            donutColor: "#6f6f6f",
          }}
          ariaLabelledBy={"Comfort"}
          spaceMaxFromZero={false}
        >
          <label id={"Comfort"} className="donut-label">
            Comfort
          </label>
        </Donut>
      </Col>
      <hr className="spacehrrating"></hr>
      <Col
        className="col-2 alignmentCenter"
        style={{ width: "135px !important;" }}
      >
        <Donut
          diameter={50}
          min={0}
          max={5}
          step={1}
          value={2}
          theme={{
            donutColor: "#6f6f6f",
          }}
          ariaLabelledBy={"Performance"}
          spaceMaxFromZero={false}
        >
          <label id={"Performance"} className="donut-label">
            Performance
          </label>
        </Donut>
      </Col>
      <hr className="spacehrrating"></hr>
      <Col
        className="col-2 alignmentCenter "
        style={{ width: "135px !important;" }}
      >
        <Donut
          diameter={50}
          min={0}
          max={5}
          step={1}
          value={2}
          theme={{
            donutColor: "#6f6f6f",
          }}
          ariaLabelledBy={"Fuel-Economy"}
          spaceMaxFromZero={false}
        >
          <label id={"Fuel-Economy"} className="donut-label">
            Fuel Economy
          </label>
        </Donut>
      </Col>
      <hr className="spacehrrating"></hr>
      <Col
        className="col-2 alignmentCenter"
        style={{ width: "135px !important;" }}
      >
        <Donut
          diameter={50}
          min={0}
          max={5}
          step={1}
          value={2}
          theme={{
            donutColor: "#6f6f6f",
          }}
          ariaLabelledBy={"Value-For-Money"}
          spaceMaxFromZero={false}
        >
          <label id={"Value-For-Money"} className="donut-label">
            Value For Money
          </label>
        </Donut>
      </Col> */}
    </>
  );
};

export default Ratingscircle;
