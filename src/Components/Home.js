import React from "react";

export default function Home(props) {
  return (
    <div
      className={`text-center text-${
        props.mode === "light" ? "dark" : "light"
      }`}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
        repellat tenetur, adipisci vitae quos ab optio voluptates accusantium a
        eaque, sed similique deserunt repudiandae alias eveniet unde non quas
        est.
      </p>
      <h1> You can switch to dark/light themes </h1>
    </div>
  );
}
