import "./Button.css";

export default function Button(props) {

  return (
    <div className="container1">
      <div className="option">
        <span>{props.first.toUpperCase()}</span>
        <span style={{ color: props.first === "TICKETS" || props.first === "VEHICLE SPAWN DELAY" ? "#F3F300" : "inherit" }}>{props.sec}</span>
      </div>
    </div>
  );
}
