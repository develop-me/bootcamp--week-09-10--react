import React from "react";

let animals = [
  { name: "Rafiki", animal: "Baboon" },
  { name: "Paddington", animal: "Bear" },
  { name: "Judy", animal: "Rabbit" },
  { name: "Bing Bong", animal: "?" },
];

const Animals = () => (
  <table className="table">
    <thead>
      <tr><th>Name</th><th>Animal</th></tr>
    </thead>
    <tbody>
      { animals.map((a, i) => (
        <tr key={ i }><td>{ a.name }</td><td>{ a.animal }</td></tr>
      ))}
    </tbody>
  </table>
);

export default Animals;
