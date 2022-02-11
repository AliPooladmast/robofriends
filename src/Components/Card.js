import React from "react";
import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa1 ma2 grow bw2 shadow-5 ">
      <img
        src={`https://source.unsplash.com/random/200x200/?${id},face,avatar,profile,user`}
        alt="profile"
        className="image"
      />
      <div className="image-text">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
