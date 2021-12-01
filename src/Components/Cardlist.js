import React from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {

  return (
    <div>
      {robots.map((users, i) => (
        <Card 
            key ={robots[i].id}
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} />
      ))}
    </div>
  );
};

export default Cardlist;
