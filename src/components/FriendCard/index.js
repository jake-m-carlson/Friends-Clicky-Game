import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.clickedOn(props.id)}>
        <img alt={props.id} src={props.image} />
      </div>
      <div className="content">
        <ul><li>
        <strong>Blurb:</strong> {props.blurb}
          </li></ul>
      </div>
    </div>
  );
}

export default FriendCard;
