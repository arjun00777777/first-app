import React from "react";
import ReactDOM from "react-dom";
import contacts from "./App";
import "./styles.css";
function Card(props) {
  return (
    <div className="card">
      <div className="first">
        <h2>{props.name}</h2>
      </div>
      <div className="zero">
        <img className="circle-img" src={props.src} alt="avatar.img" />
      </div>
      <div className="bottom">
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1 className="con">My Contacts</h1>
    <Card
      name={contacts[0].Name}
      src={contacts[0].src}
      tel={contacts[0].tel}
      email={contacts[0].email}
    />
    <Card
      name={contacts[1].Name}
      src={contacts[1].src}
      tel={contacts[1].tel}
      email={contacts[1].email}
    />
    <Card
      name={contacts[2].Name}
      src={contacts[2].src}
      tel={contacts[2].tel}
      email={contacts[2].email}
    />
    <Card
      name={contacts[1].Name}
      src={contacts[1].src}
      tel={contacts[1].tel}
      email={contacts[1].email}
    />
  </div>,
  document.getElementById("root")
);
